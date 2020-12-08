<?php

namespace App\Http\Controllers;

use DB;
use PDF;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{

    public function index()
    {
        $customers = Customer::orderBy('id', 'asc')->paginate(20);
        return response()->json(['customers'=>$customers]);
    }

    public function indexActive()
    {
        $customers = Customer::orderBy('id', 'desc')->active()->get();
        return response()->json(['customers'=>$customers]);
    }

    public function store(Request $request)
    {
        $customer = new Customer([
            'name' => strtoupper($this->deleteAccent($request->name)),
            'dni' => $request->dni,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
        ]);
        $customer->save();

        return response()->json(['message' =>'Cliente '. $customer->name.' Registrado']);
    }

    public function show($id)
    {
        $customer = Customer::find($id);
        return response()->json($customer);
    }

    public function edit($id)
    {
        $customer = Customer::find($id);
        return response()->json($customer);
    }

    public function update(Request $request,Customer $customer)
    {
      try {
        DB::beginTransaction();
        $customer->update([
          'name' => strtoupper($this->deleteAccent($request->name)),
          'dni' => $request->dni,
          'email' => $request->email,
          'phone' => $request->phone,
          'address' => $request->address,
        ]);
        DB::commit();
          return response()->json(['message' => $customer->name. ' actualizado']);
      } catch (Exception $e) {
          DB::rollBack();
          return response()->json(['error'=>$e], 400);
      }
    }

    public function desactive(Customer $customer)
    {
        $customer->active = 0;
        $customer->save();

        return response()->json(['message' => $customer->name.' desactivado']);
    }

    public function activate(Customer $customer)
    {
        $customer->active = 1;
        $customer->save();

        return response()->json(['message' => $customer->name.' activado']);
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();

        return response()->json(['message'=>'Cliente Eliminado']);
    }

    public function deleteAccent($string){

      //Reemplazamos la A y a
      $string = str_replace(
      array('Á', 'À', 'Â', 'Ä', 'á', 'à', 'ä', 'â', 'ª'),
      array('A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a'),
      $string
      );

      //Reemplazamos la E y e
      $string = str_replace(
      array('É', 'È', 'Ê', 'Ë', 'é', 'è', 'ë', 'ê'),
      array('E', 'E', 'E', 'E', 'e', 'e', 'e', 'e'),
      $string );

      //Reemplazamos la I y i
      $string = str_replace(
      array('Í', 'Ì', 'Ï', 'Î', 'í', 'ì', 'ï', 'î'),
      array('I', 'I', 'I', 'I', 'i', 'i', 'i', 'i'),
      $string );

      //Reemplazamos la O y o
      $string = str_replace(
      array('Ó', 'Ò', 'Ö', 'Ô', 'ó', 'ò', 'ö', 'ô'),
      array('O', 'O', 'O', 'O', 'o', 'o', 'o', 'o'),
      $string );

      //Reemplazamos la U y u
      $string = str_replace(
      array('Ú', 'Ù', 'Û', 'Ü', 'ú', 'ù', 'ü', 'û'),
      array('U', 'U', 'U', 'U', 'u', 'u', 'u', 'u'),
      $string );

      //Reemplazamos la N, n, C y c
      $string = str_replace(
      array('Ç', 'ç'),
      array('C', 'c'),
      $string
      );

      return $string;
    }
}
