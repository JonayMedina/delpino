<?php

namespace App\Http\Controllers;

use App\Http\Resources\PaymentCollection;
use DB;
use PDF;
use Auth;
use Carbon\Carbon;
use App\Models\Payment;
use App\Http\Resources\Payment as PaymentResource;
use App\Models\Currency;
use App\Models\DetailPayments;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index()
    {
        $payments = new PaymentCollection(Payment::with(['customer:id,name', 'bank:id,account_holder,bank_name', 'detailPayments'])->orderBy('created_at', 'desc')->paginate(10));

        return response()->json(['payments' => $payments]);
    }

    public function authCustomerPayments()
    {
        $auth = Auth::user();
        $payments = new PaymentCollection(Payment::where('customer_id', $auth->customer->id)->with(['detailPayments', 'bank:id,account_holder,bank_name'])->orderBy('created_at', 'desc')->paginate(10));

        return response()->json(['payments' => $payments]);
    }

    public function getForStats()
    {
        $payments = PaymentResource::collection(Payment::with(['customer:id,name', 'bank:id,account_holder,bank_name'])->orderBy('created_at', 'desc')->latest()->take(10)->get());

        return response()->json(['payments' => $payments]);
    }

    public function customerForStats()
    {
        $auth = Auth::user();
        $payments = PaymentResource::collection(Payment::where('customer_id', $auth->customer->id)->with(['customer:id,name', 'bank:id,account_holder,bank_name'])->orderBy('created_at', 'desc')->latest()->take(10)->get());

        return response()->json(['payments' => $payments]);
    }

    public function indexCount()
    {
        $total = [];
        $total_by_iso = [];
        $amount = 0;
        $date = Carbon::now();
        $day = $date->day;
        $month = $date->month;
        $payments = Payment::whereMonth('created_at', '>=', $month)->get();
        $currencies = Currency::active()->get();
        // dd($payments);
        foreach ($currencies as $currkey => $curr) {
            $total_by_iso[$currkey]['iso'] = $curr['iso'];
            $total_by_iso[$currkey]['name'] = $curr['name'];
            $total_by_iso[$currkey]['amount'] = 0;
            foreach ($payments as $key => $pay) {
                if ($pay['pay_iso'] == $curr['iso']) {
                    $total_by_iso[$currkey]['amount'] += $pay['pay'];
                }
            }
        }
        $count = $payments->count();
        for ($d = 1; $d <= $day; $d++) {
            for ($i = 0; $i < $count; $i++) {
                if (Carbon::parse($payments[$i]->created_at)->day == $d) {
                    $amount += $payments[$i]->pay;
                }
            }
            $days[$d] = $d;
            $total[$d] = $amount;
            $amount = 0;
        }
        $count = $payments->count();
        return response()->json(['count' => $count, 'total' => $total, 'days' => $days, 'total_by_iso' => $total_by_iso]);
    }

    public function indexHistory()
    {
        $payments = Payment::with(['agent:id,username', 'client:id,name', 'bank:id,account_holder,name'])
            ->orderBy('id', 'desc')->get();

        return response()->json(['Payments' => $payments]);
    }

    public function store(Request $request)
    {
        $auth = Auth::user();
        try {
            DB::beginTransaction();
            $payment = new Payment([
                'price_rate' => $request->price_rate,
                'pay' => $request->pay,
                'pay_iso' => $request->pay_iso,
                'operatiton_code' => $request->operatiton_code,
                'operation_metod' => $request->operation_metod,
                'customer_id' => $auth->customer->id,
                'bank_id' => $request->bank_id,
                'active' => 0,
            ]);

            $payment->save();

            if ($request->hasFile('file')) {

                if ($request->file('file')->isValid()) {
                    $imageName = $payment->id . '-' . $payment->created_at->format('d-m-Y-H-m-s') . $request->file->getClientOriginalExtension();
                    $request->file->move(public_path('/payments/' . $payment->id . '/'), $imageName);

                    $url = '/payments/' . $payment->id . '/' . $imageName;

                    $payment->file = $url;
                    $payment->save();
                }
            }

            $detail = $request->detail_pay;

            foreach ($detail as $key => $d) {
                $bank = (in_array('bank_name', $d)) ? $d['bank_name'] : '';
                DetailPayments::create([
                    'payment_id' => $payment->id,
                    'amount' => $d['amount'],
                    'bank_account' => $d['bank_account'],
                    'bank_name' => $bank,
                    'name' => $d['name'],
                    'dni' => $d['dni'],
                    'active' => 1
                ]);
            }

            DB::commit();
            return response()->json(['message' => 'Pago Registrado '], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e], 400);
        }
    }

    public function storeByAdmin(Request $request)
    {
        try {
            DB::beginTransaction();
            $payment = new Payment([
                'price_rate' => $request->price_rate,
                'pay' => $request->pay,
                'pay_iso' => $request->pay_iso,
                'operatiton_code' => $request->operatiton_code,
                'operation_metod' => $request->operation_metod,
                'customer_id' => $request->customer_id,
                'bank_id' => $request->bank_id,
                'active' => 0,
            ]);

            $payment->save();

            if ($request->hasFile('file')) {

                if ($request->file('file')->isValid()) {
                    $imageName = $payment->id . '-' . $payment->created_at->format('d-m-Y-H-m-s') . $request->file->getClientOriginalExtension();
                    $request->file->move(public_path('/payments/' . $payment->id . '/'), $imageName);

                    $url = '/payments/' . $payment->id . '/' . $imageName;

                    $payment->file = $url;
                    $payment->save();
                }
            }

            $detail = $request->detail_pay;

            foreach ($detail as $key => $d) {
                $bank = (in_array('bank_name', $d)) ? $d['bank_name'] : '';
                DetailPayments::create([
                    'payment_id' => $payment->id,
                    'amount' => $d['amount'],
                    'bank_account' => $d['bank_account'],
                    'bank_name' => $bank,
                    'name' => $d['name'],
                    'dni' => $d['dni'],
                    'active' => 1
                ]);
            }

            DB::commit();
            return response()->json(['message' => 'Pago Registrado '], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e], 400);
        }
    }

    public function bankPdf($id)
    {
        $payment = Payment::with(['client:id,name,dni', 'bank'])->find($id);

        // dd($payment);
        $pdf = PDF::loadView('pdf.Payment-bank', ['Payment' => $payment])->download('Factura-' . $payment->id . '.pdf');
        return $pdf;
    }

    public function update(Request $request, Payment $payment)
    {

        try {
            $payment->update([
                'amount' => $request->amount,
                'amount_iso' => $request->amount_iso,
                'pay' => $request->pay,
                'pay_iso' => $request->pay_iso,
                'operatiton_code' => $request->operatiton_code,
                'operation_metod' => $request->operation_metod,
                'customer_id' => $request->customer_id,
                'recipient_id' => $request->recipient_id,
                'bank_id' => $request->bank_id,
                'description' => $request->description,
            ]);

            if ($request->hasFile('file')) {

                if ($request->file('file')->isValid()) {
                    $imageName = $payment->id . '-' . $payment->created_at->format('d-m-Y-H-m-s') . $request->file->getClientOriginalExtension();
                    $request->file->move(public_path('/payments/' . $payment->id . '/'), $imageName);

                    $url = '/payments/' . $payment->id . '/' . $imageName;

                    $payment->file = $url;
                    $payment->save();
                }
            }

            DB::commit();
            return response()->json(['message' => 'Pago Registrado '], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e], 400);
        }
        $payment->update($request->all());

        return response()->json(['message' => 'Pago Actualizado']);
    }

    public function desactive(Payment $payment)
    {
        $payment->active = 0;
        $payment->save();

        return response()->json(['message' => 'Desaprobado']);
    }

    public function activate(Payment $payment)
    {
        $payment->active = 1;
        $payment->save();

        return response()->json(['message' => 'Cobro Aprobado']);
    }

    public function payed(Request $request, Payment $payment)
    {
    }

    public function destroy(Payment $payment)
    {
        $payment->delete();
        return response()->json(['message' => 'Pago Eliminado']);
    }

    public function imgDownload($id)
    {
        $payment = Payment::findOrFail($id);

        return Storage::download($payment->file);
    }
}
