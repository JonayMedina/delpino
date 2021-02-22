<!DOCTYPE html>
<!-- saved from url=(0052)https://colorlib.com/etc/cs/comingsoon_03/index.html -->
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Coming Soon 3</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href="https://colorlib.com/etc/cs/comingsoon_03/images/icons/favicon.ico">

    <link rel="stylesheet" type="text/css" href="{{asset('/coming/bootstrap.min.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('/coming/font-awesome.min.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('/coming/animate.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('/coming/select2.min.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('/coming/util.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('/coming/main.css')}}">

    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Roboto&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
</head>

<body>
    <div class="bg-img1 size1 flex-w flex-c-m p-l-15 p-r-15" style="background-image: url(./img/logo-800.png);">
        <div class="wsize1 bor1 bg1 p-l-15 p-r-15 respon1">
            <div class="wrappic1">
                {{-- <img src="{{asset('/img/logo-final.png') }}" alt="VENEXPRESSDELPINO LOGO"> --}}
            </div>
            <p class="txt-center h1 m1-txt1 p-t-33 p-b-30">
                Our website is under construction
            </p>
            <p class="txt-center h1 m1-txt1 p-t-33 p-b-30">
                Nuetro sitio Pronto estara en Linea
            </p>

            <h2 class="txt-center h1 m1-txt1-white p-t-33 p-b-30">Pronto enviaras tus remesas desde: </h2>
            <h2>
                <p class="txt-center h1 m1-txt1-white p-t-33 p-b-30"> <i id="word"> Argentina</i></p>
            </h2>

            <p class="txt-center h1 m1-txt1 p-t-33 p-b-30">
                Visitanos Pronto
            </p>
        </div>
    </div>

    <script type="text/javascript" async="" src="{{asset('/coming/analytics.js') }}"></script>
    <script src="{{asset('/coming/jquery-3.2.1.min.js') }}"></script>

    <script src="{{asset('/coming/popper.js') }}"></script>
    <script src="{{asset('/coming/bootstrap.min.js') }}"></script>

    <script src="{{asset('/coming/select2.min.js') }}"></script>

    <script src="{{asset('/coming/moment.min.js') }}"></script>
    <script src="{{asset('/coming/moment-timezone.min.js') }}"></script>
    <script src="{{asset('/coming/moment-timezone-with-data.min.js') }}"></script>
    <script src="{{asset('/coming/countdowntime.js') }}"></script>
    <script>
        $('.cd100').countdown100({
			/*Set Endtime here*/
			/*Endtime must be > current time*/
			endtimeYear: 0,
			endtimeMonth: 0,
			endtimeDate: 35,
			endtimeHours: 18,
			endtimeMinutes: 0,
			endtimeSeconds: 0,
			timeZone: ""
			// ex:  timeZone: "America/New_York"
			//go to " http://momentjs') }}.com/timezone/ " to get timezone
		});
    </script>

    <script src="{{asset('/coming/tilt.jquery.min.js') }}"></script>
    <script>
        $('.js-tilt').tilt({
			scale: 1.1
		})
    </script>

    <script src="{{asset('/coming/main.js') }}"></script>

    <script async="" src="{{asset('/coming/js') }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-23581568-13');
    </script>

</body>

</html>
