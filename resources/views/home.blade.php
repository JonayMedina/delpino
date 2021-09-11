@extends('layouts.app-web')

@section('content')
 <!-- Content
  ============================================= -->
  <div id="content">

    <!-- Slideshow
    ============================================= -->
    <div class="owl-carousel owl-theme single-slideshow" data-autoplay="true" data-loop="true" data-autoheight="true" data-nav="true" data-items="1" id="start">
      <div class="item">
        <section class="hero-wrap section shadow-md">
          <div class="hero-mask opacity-7 bg-dark"></div>
          <div class="hero-bg" style="background-image:url({{ asset('img/bg/image-1.jpg') }});"></div>

          <div class="hero-content py-2 py-lg-5">
            <div class="container text-center">
              <h2 class="text-16 text-white">Envía y Recibe Dinero desde varios países A Venezuela.</h2>
              <p class="text-5 text-white mb-4">Rápido y fácil de Enviar, Recibir tu dinero online con VenexpressDelPino.<br class="d-none d-lg-block">
                Mas de 10 países en Latino América y Europa hacia Venezuela.</p>
              {{-- <a href="#" class="btn btn-primary m-2">Registrate!! Es Gratis!!.</a> <a class="btn btn-outline-light video-btn m-2" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-toggle="modal" data-target="#videoModal"><span class="text-2 mr-3"><i class="fas fa-play"></i></span>See How it Works</a> --}}
            </div>
          </div>
        </section>
      </div>
      <div class="item">
        <section class="hero-wrap section shadow-md">
          <div class="hero-bg" style="background-image:url({{ asset('img/bg/image-3.jpg') }});"></div>
          <div class="hero-content py-2 py-lg-4">
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-8 col-xl-7 text-center text-lg-left">
                  <h2 class="text-13 text-white">Más de 1000 transacciones por Mes.</h2>
                  <p class="text-5 text-white mb-4">La confiabilidad de nuestro clientes en Latino America y Europa nos Respalda.
                      <br class="d-none d-lg-block">
                        Mas de 10 países en Latino América y Europa hacia Venezuela.</p>
                  {{-- <a href="#" class="btn btn-primary mr-3">Get started for free</a> <a class="btn btn-link text-light video-btn" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-toggle="modal" data-target="#videoModal"><span class="mr-2"><i class="fas fa-play-circle"></i></span>Watch Demo</a> --}}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- Slideshow end -->

    <!-- Why choose
    ============================================= -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-9 text-center">Porque elegirnos?</h2>
        <p class="text-4 text-center mb-5">Aqui les tenemos las Principales razones porque Elegirnos.</p>
        <div class="row">
          <div class="col-sm-6 col-lg-3 mb-5 mb-lg-0">
            <div class="featured-box">
              <div class="featured-box-icon text-primary"> <i class="fas fa-hand-pointer"></i> </div>
                <h3>Facil de Usar</h3>
                <p class="text-3">Registre sus pagos y cuentas destino Facil. Consulte por WhatsApp nuestras cuentas disponibles y realice la trasferencia o solicite la tranferencia de fondos a nuestras cuentas.</p>
                <a class="btn-link text-3" href="https://api.whatsapp.com/send?phone=+584128423488" target="_blank"><i class="fas fa-whatsapp" aria-hidden="true "></i>+584128423488</a>
              </div>
          </div>
          <div class="col-sm-6 col-lg-3 mb-5 mb-lg-0">
            <div class="featured-box">
              <div class="featured-box-icon text-primary"> <i class="fas fa-share"></i> </div>
              <h3>Reporte su Deposito en nuestro panel de Remesa</h3>
              <p class="text-3">Ingrese a nuestro al panel de remesas y reporte sus depositos e Ingrese la ceunta destino.</p>
              <a class="btn-link text-3" href="{{ url('/auth/crear-cuenta')}}">Registrese <i class="fas fa-chevron-right text-1 ml-2"></i></a>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 mb-5 mb-sm-0">
            <div class="featured-box">
              <div class="featured-box-icon text-primary"> <i class="fas fa-dollar-sign"></i> </div>
              <h3>Bajas Comisiones</h3>
              <p class="text-3">Metenemos las comisiones mas bajas del mercado para que Obtengas los Mayores Beneficios con Nosotros.</p>
              <a href="#" class="btn-link text-3">Learn more<i class="fas fa-chevron-right text-1 ml-2"></i></a> </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="featured-box">
              <div class="featured-box-icon text-primary"> <i class="fas fa-lock"></i> </div>
              <h3>100% Seguridad</h3>
              <p class="text-3">Con mas de 5 años de Experiencia y Cientos de clientes, Brindando seguridad y confiabilidad en Tus Transacciones.</p>
              {{-- <a href="#" class="btn-link text-3">Learn more<i class="fas fa-chevron-right text-1 ml-2"></i></a>  --}}
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Why choose end -->

    <!-- Prices
    ============================================= -->
    @if ($prices)
      <section class="hero-wrap section shadow-md">
        <div class="hero-mask opacity-9 bg-primary"></div>
        <div class="hero-bg" style="background-image:url({{ asset(`img/bg/image-2.jpg`) }} );"></div>
        <div class="hero-content py-5">
          <div class="container text-center">
              <h2 class="text-9 text-white">Las mejores Tasas del Mercado a tu Disposición: </h2>
              <div class="row">
                  @foreach ($prices as $price)
                      <div class="col-sm-6 col-lg-3 mb-5 mb-lg-0">
                          <div class="featured-box">
                          <div class="featured-box-icon text-primary"> <i class="fas fa-check fa-xs text-white"></i> </div>
                              <h3 class="text-white">{{ $price->currency->name }}</h3>
                              <p class="text-3 text-white">Por Cada {{ $price->currency->symbol }}1  - {{ $price->amount_formated }}</p>
                          </div>
                      </div>
                  @endforeach
              </div>
            <h2 class="text-9 text-white">Conoce nuestra Plataforma</h2>
            <a href="{{ url('/auth/crear-cuenta')}}" class="btn btn-light">Registrate</a>
            <a href="{{ url('/auth/login') }}" class="btn btn-light">Iniciar Sesion</a>

          </div>
        </div>
      </section>
    @endif
    <!-- Prices end -->

    <!-- Payment Solutions
    ============================================= -->
    <section class="section">
      <div class="container overflow-hidden">
        <div class="row">
          <div class="col-lg-5 col-xl-6 d-flex">
            <div class="my-auto pb-5 pb-lg-0">
              <h2 class="text-9">Diversos Metodos.</h2>
              <p class="text-4">Escribanos para obtener los mejores precios y metodos de cambio hacia sus Cuentas en Venezuela, para sus diversas necesidades, encontramos un metodo de solución.</p>
              <a class="btn-link text-4" href="https://api.whatsapp.com/send?phone=+584128423488" target="_blank"><i class="fas fa-whatsapp " aria-hidden="true "></i> +584128423488</a></div>
          </div>
          <div class="col-lg-7 col-xl-6">
            <div class="row banner style-2 justify-content-center">
              <div class="col-12 col-sm-6 mb-4 text-center">
                <div class="item rounded shadow d-inline-block"> <a href="#">
                  <div class="caption rounded-bottom">
                    <h2 class="text-5 font-weight-400 mb-0">Pagos a Freelancers</h2>
                  </div>
                  <div class="banner-mask"></div>
                  <img class="img-fluid" src="{{ asset('img/anyone-freelancer.jpg') }}" alt="banner"> </a> </div>
              </div>
              <div class="col-12 col-sm-6 mb-4 text-center">
                <div class="item rounded shadow d-inline-block"> <a href="#">
                  <div class="caption rounded-bottom">
                    <h2 class="text-5 font-weight-400 mb-0">Compras Online</h2>
                  </div>
                  <div class="banner-mask"></div>
                  <img class="img-fluid" src="{{ asset('img/anyone-online-shopping.jpg') }}" alt="banner"> </a> </div>
              </div>
              <div class="col-12 col-sm-6 mb-4 mb-sm-0 text-center">
                <div class="item rounded shadow d-inline-block"> <a href="#">
                  <div class="caption rounded-bottom">
                    <h2 class="text-5 font-weight-400 mb-0">Ventas Online</h2>
                  </div>
                  <div class="banner-mask"></div>
                  <img class="img-fluid" src="{{ asset('img/anyone-online-sellers.jpg') }}" alt="banner"> </a> </div>
              </div>
              <div class="col-12 col-sm-6 text-center">
                <div class="item rounded shadow d-inline-block"> <a href="#">
                  <div class="caption rounded-bottom">
                    <h2 class="text-5 font-weight-400 mb-0">Pagar servicos Marketing</h2>
                  </div>
                  <div class="banner-mask"></div>
                  <img class="img-fluid" src="{{ asset('img/anyone-affiliate-marketing.jpg') }}" alt="banner"> </a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Payment Solutions end -->

    <!-- What can you do
    ============================================= -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-9 text-center">Que Puedes hacer con nosotros?</h2>
        <p class="text-4 text-center mb-5">Nuestro portal te brinda un servicio de control de depositos Directos.</p>
        <div class="row">
          <div class="col-sm-6 col-lg-3 mb-4">
            <div class="featured-box style-5 rounded">
              <div class="featured-box-icon text-primary"> <i class="fas fa-share-square"></i> </div>
              <h3>Enviarle a un Familiares o Amigos</h3>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 mb-4">
            <div class="featured-box style-5 rounded">
              <div class="featured-box-icon text-primary"> <i class="fas fa-check-square"></i> </div>
              <h3>Recibir Dinero</h3>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 mb-4">
            <div class="featured-box style-5 rounded">
              <div class="featured-box-icon text-primary"> <i class="fas fa-user-friends"></i> </div>
              <h3>Pagar Facturas en Venezuela</h3>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 mb-4">
            <div class="featured-box style-5 rounded">
              <div class="featured-box-icon text-primary"> <i class="fas fa-shopping-bag"></i> </div>
              <h3>Compras Online</h3>
            </div>
          </div>
        </div>
        {{-- <div class="text-center mt-4"><a href="#" class="btn-link text-4">See more can you do<i class="fas fa-chevron-right text-2 ml-2"></i></a></div> --}}
      </div>
    </section>
    <!-- What can you do end -->

    <!-- How work
    ============================================= -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="card bg-dark-3 shadow-sm border-0"> <img class="card-img opacity-8" src="{{ asset('img/how-work.jpg') }}" alt="banner">
              <div class="card-img-overlay p-0"> <a class="d-flex h-100 video-btn" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-toggle="modal" data-target="#videoModal"> <span class="btn-video-play bg-white shadow-md rounded-circle m-auto"><i class="fas fa-play"></i></span> </a> </div>
            </div>
          </div>
          <div class="col-lg-6 mt-5 mt-lg-0">
            <div class="ml-4">
              <h2 class="text-9">Como es el proceso?</h2>
              <p class="text-4">Con unos simples pasos Podras reportar remesas.</p>
              <ul class="list-unstyled text-3 line-height-5">
                <li><i class="fas fa-check mr-2"></i>Registrate</li>
                <li><i class="fas fa-check mr-2"></i>Deposita en las cuentas disponibles, Reporta el pago y agrega la(s) Cuentas Destino</li>
                <li><i class="fas fa-check mr-2"></i></li>
              </ul>
              <a href="{{ url('/auth/crear-cuenta')}}" class="btn btn-outline-primary shadow-none mt-2">Registrate Gratis!!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- How work end -->

    <!-- Testimonial
    ============================================= -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-9 text-center">LA opinion de nuestros Clientes es Importante</h2>
        <p class="text-4 text-center mb-4">La mejor Experiencia de pagos</p>
        <div class="owl-carousel owl-theme" data-autoplay="true" data-nav="true" data-loop="true" data-margin="30" data-slideby="2" data-stagepadding="5" data-items-xs="1" data-items-sm="1" data-items-md="2" data-items-lg="2">
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-4">“De facil uso, responsabilidad y rapidez. Por eso VEneXpressDelpino es mi pagina de preferencia.”</p>
              <strong class="d-block font-weight-500">Jorge Asuage</strong> <span class="text-muted">Developer | Argentina!</span> </div>
          </div>
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-4">“Es reconfortante saber que tu dinero Llegara lo mas pronto posible a mi Familia. Gracias.”</p>
              <strong class="d-block font-weight-500">Alejandra Ferreira</strong> <span class="text-muted">Cheff | España</span> </div>
          </div>
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-4">“El proceso muy Fácil, con simples pasos logre reportar el pago y recibieron el dinero sin problemas.”</p>
              <strong class="d-block font-weight-500">Antonio Coronado</strong> <span class="text-muted">Vendedor | Chile</span> </div>
          </div>
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-4">“Las Mejores tasas y rapidez en las transacciones. Excelente.”</p>
              <strong class="d-block font-weight-500">Juliet Rengifo</strong> <span class="text-muted">Inglaterra</span> </div>
          </div>
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-4">“Muy seguro en cada Transacción !”</p>
              <strong class="d-block font-weight-500">Mauricio Lopéz</strong> <span class="text-muted">Freelancer from Australia</span> </div>
          </div>
          <div class="item">
            <div class="testimonial rounded text-center p-4">
              <p class="text-4">“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment.”</p>
              <strong class="d-block font-weight-500">Dennis Jacques</strong> <span class="text-muted">User from USA</span> </div>
          </div>
        </div>
        <div class="text-center mt-4"><a href="{{ url('/auth/crear-cuenta')}}" class="btn-link text-4">Registrate Gratis <i class="fas fa-chevron-right text-2 ml-2"></i></a></div>

      </div>
    </section>
    <!-- Testimonial end -->

    <!-- Customer Support
    ============================================= -->
    {{-- <section class="hero-wrap section shadow-md">
      <div class="hero-mask opacity-9 bg-primary"></div>
      <div class="hero-bg" style="background-image:url({{ asset(`img/bg/image-2.jpg`) }} );"></div>
      <div class="hero-content py-5">
        <div class="container text-center">
          <h2 class="text-9 text-white">Awesome Customer Support</h2>
          <p class="text-4 text-white mb-4">Have you any query? Don't worry. We have great people ready to help you whenever you need it.</p>
          <a href="#" class="btn btn-light">Find out more</a> </div>
      </div>
    </section> --}}
    <!-- Customer Support end -->

  </div>
  <!-- Content end -->



<!-- Video Modal
============================================= -->
<div class="modal fade" id="videoModal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content bg-transparent border-0">
      <button type="button" class="close text-white opacity-10 ml-auto mr-n3 font-weight-400" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <div class="modal-body p-0">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" id="video" allow="autoplay"></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Video Modal end -->

@endsection
