<?php

namespace App\Http\Controllers;

use DB;
use PDF;
use Auth;
use Carbon\Carbon;
use App\Models\Payment;
use App\Http\Resources\Payment as PaymentResource;
use App\Http\Resources\PaymentCollection;
use App\Models\DetailPayments;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index()
    {
        $payments = new PaymentCollection(Payment::with(['agent:id,username,name,wallet_num', 'customer:id,name', 'bank:id,account_holder,name', 'detailpay'])->get()->reverse());

        return response()->json(['payments' => $payments]);
    }

    public function indexCount()
    {
        $total = [];
        $amount = 0;
        $date = Carbon::now();
        $day = $date->day;
        $month = $date->month;
        $payments = Payment::whereMonth('created_at', '>=', $month)->get();

        $count = $payments->count();
        for ($d = 1; $d <= $day; $d++) {
            for ($i = 0; $i < $count; $i++) {
                if (Carbon::parse($payments[$i]->payment_date)->day == $d) {
                    $amount += $payments[$i]->amount;
                }
            }
            $days[$d] = $d;
            $total[$d] = $amount;
            $amount = 0;
        }
        $count = $payments->count();
        return response()->json(['count' => $count, 'total' => $total, 'days' => $days]);
    }

    public function agentCount($id)
    {
        $total = [];
        $amount = 0;
        $date = Carbon::now();
        $day = $date->day;
        $month = $date->month;
        $payments = Payment::where('agent_id', $id)->whereMonth('created_at', '>=', $month)->get();

        $count = $payments->count();
        for ($d = 1; $d <= $day; $d++) {
            for ($i = 0; $i < $count; $i++) {
                if (Carbon::parse($payments[$i]->payment_date)->day == $d) {
                    $amount += $payments[$i]->amount;
                }
            }
            $days[$d] = $d;
            $total[$d] = $amount;
            $amount = 0;
        }
        $count = $payments->count();
        return response()->json(['count' => $count, 'total' => $total, 'days' => $days]);
    }

    public function indexHistory()
    {
        $payments = Payment::with(['agent:id,username', 'client:id,name', 'bank:id,account_holder,name'])
            ->orderBy('id', 'desc')->get();

        return response()->json(['Payments' => $payments]);
    }

    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $payment = new Payment([
                'amount' => $request->amount,
                'amount_iso' => $request->amount_iso,
                'pay' => $request->pay,
                'pay_iso' => $request->pay_iso,
                'operatiton_code' => $request->operatiton_code,
                'operation_metod' => $request->operation_metod,
                'customer_id' => $request->customer_id,
                'bank_id' => $request->bank_id,
                'description' => $request->description,
                'active' => 0,
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

            $detail = $request->detail_pay;

            foreach ($detail as $d) {
                DetailPayments::create([
                    'paiment_id' => $payment->id,
                    'amount' => $d->amount,
                    'bank_account' => $d->bank_account,
                    'bank_name' => $d->bank_name,
                    'dni' => $d->dni,
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

    public function indexCustomer()
    {
        $user = Auth::user();
        $payments = new PaymentCollection(Payment::where('customer_id', $user->id)->with(['recipient:id,name', 'bank:id,account_holder,bank_name'])->get()->reverse());

        return response()->json(['payments' => $payments]);
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
