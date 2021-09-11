<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no">
<link href="{{ asset('img/favicon2.png')}}" rel="icon" />
<title>Venexpresdelpino - Remesas em Latinoamerica</title>
<meta name="description" content="Remesas, Euros, Pesos colombianos, Pesos Chilenos, Sol Perano, Euros">
<meta name="author" content="jonaymedinadev@gmail.com">

<!-- Web Fonts
============================================= -->
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i' type='text/css'>

<!-- Stylesheet
============================================= -->
<link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap/css/bootstrap.min.css')}}" />
<link rel="stylesheet" type="text/css" href="{{ asset('css/font-awesome/css/all.min.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ asset('css/owl.carousel/assets/owl.carousel.min.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ asset('css/stylesheet.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ asset('css/custom.css') }}" />

  <script src="{{ asset('js/jquery.min.js') }}" defer></script>
  <script src="{{ asset('js/bootstrap.bundle.min.js') }}" defer></script>
<meta name="csrf-token" content="{{ csrf_token() }}" />
</head>
<body>

<!-- Preloader -->
<div id="preloader">
  <div data-loader="dual-ring"></div>
</div>
<!-- Preloader End -->

<!-- Document Wrapper
============================================= -->
<div id="main-wrapper">

  <!-- Header
  ============================================= -->
  <header id="header">
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start">
          <!-- Logo
          ============================= -->
          <div class="logo"> <a class="d-flex" href="{{ url('/')}}" title="VEneXpressDelpino"><img src="{{ asset('img/logo1.png') }}" alt="VeneXpressDelPino" /></a> </div>
          <!-- Logo end -->
          <!-- Collapse Button
          ============================== -->
          {{-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span> <span></span> <span></span> </button><!-- Collapse Button end -->

          <!-- Primary Navigation
          ============================== -->
          <nav class="primary-menu navbar navbar-expand-lg justify-content-end">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto">
                <li><a href="{{route('home')}}">Inicio</a></li>
                <li><a href="{{ url('/auth/crear-cuenta')}}">Sign Up</a></li>
                <li><a href="{{ url('/auth/login') }}">Login</a> </li>
                <li class="dropdown dropdown-mega"> <a class="dropdown-toggle" href="#">Secciones</a>
                  <ul class="dropdown-menu">
                    <li>
                      <div class="dropdown-mega-content">
                        <div class="row">
                          <div class="col-lg-3"> <span class="sub-title"></Span>
                            <ul class="dropdown-mega-submenu">
                              <li><a class="dropdown-item" href="#start">Inicio</a></li>
                              <li><a class="dropdown-item" href="#about-us">Nosotros</a></li>
                              <li><a class="dropdown-item" href="fees.html">Fees</a></li>
                              <li><a class="dropdown-item" href="help.html">Help</a></li>
                              <li><a class="dropdown-item" href="contact-us.html">Contact Us</a></li>
                              <li><a class="dropdown-item" href="elements.html">Elements</a></li>
                              <li><a class="dropdown-item" href="elements-2.html">Elements 2</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <!-- Primary Navigation end -->
        </div> --}}

        <div class="header-column justify-content-end">
          <!-- Login & Signup Link
          ============================== -->
          <nav class="login-signup navbar navbar-expand">
            <ul class="navbar-nav">
              <li><a href="{{ url('/auth/login') }}">Login</a> </li>
              <li class="align-items-center h-auto ml-sm-3"><a class="btn btn-primary d-sm-block" href="{{ url('/auth/crear-cuenta')}}">Registrarse</a></li>
            </ul>
          </nav>
          <!-- Login & Signup Link end -->
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->

   @yield('content')
    <!-- Footer
  ============================================= -->
  <footer id="footer">
    <div class="container">
      <div class="row">
        {{-- <div class="col-lg d-lg-flex align-items-center">
          <ul class="nav justify-content-center justify-content-lg-start text-3">
            <li class="nav-item"> <a class="nav-link active" href="#">About Us</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Support</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Help</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Careers</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Affiliate</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Fees</a></li>
          </ul>
        </div> --}}
        <div class="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
          <ul class="social-icons justify-content-center">
            <li class="social-icons-facebook"><a data-toggle="tooltip" href="https://www.facebook.com/venexpressdelpino.delpino" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li class="social-icons-twitter"><a data-toggle="tooltip" href="https://www.instagram.com/venexpressdelpino" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>
            {{-- <li class="social-icons-google"><a data-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i class="fab fa-google"></i></a></li> --}}
            {{-- <li class="social-icons-youtube"><a data-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i class="fab fa-youtube"></i></a></li> --}}
          </ul>
        </div>
      </div>
      <div class="footer-copyright pt-3 pt-lg-2 mt-2">
        <div class="row">
          <div class="col-lg">
            <p class="text-center text-lg-left mb-2 mb-lg-0">Copyright &copy; 2019 <a href="#">VeneXpressDelPino</a>. All Rights Reserved.</p>
          </div>
          {{-- <div class="col-lg d-lg-flex align-items-center justify-content-lg-end">
            <ul class="nav justify-content-center">
              <li class="nav-item"> <a class="nav-link active" href="#">Security</a></li>
              <li class="nav-item"> <a class="nav-link" href="#">Terms</a></li>
              <li class="nav-item"> <a class="nav-link" href="#">Privacy</a></li>
            </ul>
          </div> --}}
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer end -->

</div>
<!-- Document Wrapper end -->

<!-- Back to Top
============================================= -->
<a id="back-to-top" data-toggle="tooltip" title="Regresar al Inicio" href="javascript:void(0)"><i class="fa fa-chevron-up"></i></a>
<!-- Script -->
  {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
  <script src="{{ asset('js/owl.carousel.min.js') }}" defer></script>
  <script src="{{ asset('js/theme.js') }}" defer></script>
</body>
</html>
