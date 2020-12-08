@php
$config = [
    'appName' => config('app.name'),
];
@endphp

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('img/favicon2.png') }}">
    <meta name="keywords" content="euros a bolivares, dolares a bolivares,  EUR, peso colombiano venezuela, soles peruanos a bolivares, chile a venezuela, remesas españa, remesas, enviar euro, enviar dinero a venezuela">
    <meta name="description" content="Remesas a venezuela Euro Peso Colombiano peso chileno sol peruano">
    <meta name="author" content="jonay medina jonaymedinadev@gmail.com">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
    </div>

    <script>
        'use strict';
        window.config = @json($config);
    </script>
</body>
</html>
