<template>
  <div class="home-page overflow-hidden">
    <SiteHeader></SiteHeader>
    <section class="hero-slider">
      <ScrollDown anchor="postHero"></ScrollDown>
      <div ref="sliderContainer" class="hero-slider-container">
        <div ref="myMenu" class="social-hero">
          <a href="https://wa.me/5214435434844" target="_blank">Whatsapp</a>
          <a href="https://www.linkedin.com/company/betanzos-arquitectura/" target="_blank">Linkedin</a>
          <a href="https://www.instagram.com/betanzosarquitectura/" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/arquitectomorelia/" target="_blank">Facebook</a>
        </div>
        <div class="slider-item">
          <div class="hero">
            <div class="content-hero container-3 full-h d-flex align-items-center ">
              <div class="d-flex mb-5 pb-5 mb-sm-0 pb-sm-0">
                <div class="col-md-5 col-10">
                  <h1 class="ff-century-g fw-bold text-blue traking-200 fs-42 text-uppercase">
                    Arquitectura que trasciende
                  </h1>
                  <div class="d-flex align-items-center mt-4">
                    <nuxt-link to="/contacto#contacto" class="btn-base">Coticemos</nuxt-link>
                    <div class="slider-controls ml-4 d-none d-lg-flex">
                      <div id="prev" class="prev mx-3" @click="sliderRight"></div>
                      <div id="next" class="next mx-3" @click="sliderLeft"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeroItemSlider
          titleItem="Descubre el poder de los espacios"
          @click="clickHandler"
          ClassImg="hero-2"
          linkBtn="/proyectos"
          textBtn="ver proyectos"
        >
        </HeroItemSlider>
        <HeroItemSlider
          titleItem="Déjanos guiarte"
          @click="clickHandler"
          ClassImg="hero-3"
          linkBtn="/nosotros#nosotros-betanzos"
          textBtn="Conócenos"
        >
        </HeroItemSlider>
      </div>
    </section>
    <div id="postHero"></div>
    <section class="py-5 space-section-top">
      <div class="container-3">
        <div
          class="d-flex justify-content-sm-between justify-content-center col-12 pb-sm-5"
        >
          <h2 class="title-model-1">
            <span class="first">Nuestros</span> <br/>
            <span class="dash">Servicios</span>
          </h2>
          <nuxt-link
            to="/servicios"
            class="title-model-2 col-sm-3 col-xl-2 text-right d-none d-sm-block"
          >Ver todos los servicios
          </nuxt-link
          >
        </div>
      </div>
      <div class="container-5 container-gallery mt-5 px-0">
        <div class="col-12 d-flex flex-wrap px-0 pl-lg-3">
          <div class="col-12 col-sm-3  col-lg-3 px-0  py-1 py-sm-0">
            <h3 class="titile-line-vertical ">
              <nuxt-link to="/servicios#diseño" class="text-blue reset-hover-link">
                <p class="r1">Diseño Arquitectónico</p>
                <p>e Interiorismo</p>
              </nuxt-link>
            </h3>
            <nuxt-link to="/servicios#diseño">
              <div class="img-base-wrapper cursor-pointer">
                <img
                  class="img-home-services special-image-small"
                  src="~assets/img/images/foto-obra-banio-p-lourdes6.jpg"
                  alt="Betanzos Arquitectura en morelia - Diseño arquitectónico"/>
              </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-sm-3 col-lg-3 px-0 py-1 py-sm-0">
            <h3 class="titile-line-vertical ">
              <nuxt-link to="/servicios#proyectos" class="text-blue reset-hover-link">
                <p class="r1">Proyectos</p>
                <p>Arquitectónicos y Ejecutivos</p>
              </nuxt-link>
            </h3>
            <nuxt-link to="/servicios#proyectos">
              <div class="img-base-wrapper cursor-pointer" @click="showModal('p-arq-casa-r-pra-p1-2.jpg')">
                <img
                  class="img-home-services"
                  src="~assets/img/images/p-arq-casa-r-pra-p1-2.jpg"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-sm-3 col-lg-3 px-0 py-1 py-sm-0">
            <h3 class="titile-line-vertical ">
              <nuxt-link to="/servicios#ejecutivos" class="text-blue reset-hover-link">
                <p class="r1">Construcción</p>
              </nuxt-link>
            </h3>
            <nuxt-link to="/servicios#ejecutivos">
              <div class="img-base-wrapper cursor-pointer overflow-hidden" @click="showModal('foto-obra-c-h-san-jacinto8.jpg')">
                <img
                  class="img-home-services center-fachada"
                  src="~assets/img/images/foto-obra-c-h-san-jacinto8.jpg"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-sm-3 col-lg-3 px-0 py-1 py-sm-0">
            <h3 class="titile-line-vertical ">
              <nuxt-link to="/servicios#remodelaciones" class="text-blue reset-hover-link">
                <p class="r1">Remodelaciones</p>
                <p>y Mantenimiento</p>
              </nuxt-link>
            </h3>
            <nuxt-link to="/servicios#remodelaciones">
              <div class="img-base-wrapper cursor-pointer" @click="showModal('foto-obra-casa-h-lourdes2.jpg')">
                <img
                  class="img-home-services"
                  src="~assets/img/images/foto-obra-casa-h-lourdes2.jpg"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <a
            class="title-model-2 col-4 mr-5 text-right d-sm-none d-block"
            href="#">Ver todos los servicios</a>
        </div>
      </div>
    </section>
    <section class="py-5 space-section-top overflow-hidden">
      <div
        class="container-5 container-gallery d-flex align-items-center flex-wrap"
      >
        <div class="col-sm-5 col-md-5 col-lg-3 px-md-4 px-lg-3 px-4 pl-sm-5">
          <div class="card-text-simple">
            <h2 class="ff-century-g text-blue traking-200 fs-34">
              DE LOS MEJORES ARQUITECTOS EN MORELIA
            </h2>
            <p class="text-justify ff-ginora mt-sm-4 mt-md-5">
              En Betanzos Arquitectura Integral creamos proyectos arquitectónicos sustentables y adaptables a cualquier
              entorno, garantizando siempre el mejor diseño e innovación en arquitectura.
            </p>
            <p class="text-justify ff-ginora fw-light">
              Contamos con más de 10 años de sólida experiencia trabajando en una arquitectura práctica, estética y
              funcional, así como en proyectos estructurales inspirados en nuestros clientes.
            </p>
            <p class="text-justify ff-ginora fw-light">
              De los arquitectos, el mejor.
            </p>
            <nuxt-link to="/nosotros" class="title-model-2 text-right ff-ginora">Saber más de nosotros</nuxt-link>
            <div class="cards-buttons d-flex mt-5">
              <div class="col-4 px-1" v-b-tooltip.placement.left title="">
                <img src="~assets/img/svg/btn-card-1.svg" alt=""/>
              </div>
              <div class="col-4 px-1" v-b-tooltip.placement.top title="">
                <img src="~assets/img/svg/btn-card-2.svg" alt=""/>
              </div>
              <div class="col-4 px-1" v-b-tooltip.placement.right title="">
                <img src="~assets/img/svg/btn-card-3.svg" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div @click="showModal('foto-obra-casa-h-lourdes11.jpg')"
             class="col-sm-6 col-lg-7 col d-flex align-items-center offset-sm-1 offset-lg-2 px-0 mt-5 mt-md-0 pr-lg-0">
          <ImgRightSimple
            class="cursor-pointer"
            title="CASA HABITACIÓN LOURDES MORENO">
          </ImgRightSimple>
        </div>
      </div>
    </section>

    <section class="py-5 space-section-top">
      <div class="container-3 d-flex align-items-center flex-wrap mt-5 mt-sm-0">
        <div class="col-sm-5 col-lg-4 col-12 ">
          <h2
            class="ff-century-g text-blue traking-200 break-wor fs-42 text-vertical text-vertical-xs"
          >
            METODOLOGÍA ESTRUCTURADA Y FLEXIBLE
          </h2>
        </div>
        <div
          class="col-12 col-sm-6 col-md-5 col-lg-4 offset-md-1 offset-lg-3 offset-sm-1 mt-5 pt-5 mt-sm-0 pt-sm-0 mt-md-5 pt-md-5">
          <CardtextLineLeft content='
          Te acompañamos durante todo el proceso de diseño y construcción de tu obra arquitectónica y
          trabajamos para que siempre estés enterado del estatus en cada una de las etapas del proyecto.'
                            linkTo="/servicios#apasionados"
          >
          </CardtextLineLeft>
        </div>
      </div>
    </section>
    <section class="d-flex justify-content-center process-section mt-5">
      <div class="d-flex justify-content-start justify-content-lg-center flex-wrap col-md-10 col-lg-12 px-xl-5">
        <div
          class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center line-border-right px-0 mt-4 mt-lg-0"
        >
          <div class="col-8">
            <img src="~/assets/img/process/understanding.svg" alt="Entendimiento">
            <h2 class="fs-16 my-4">Entendimiento</h2>
            <p class="text-justify ff-ginora text-dark">
              Analizamos tu idea.
            </p>
          </div>
        </div>
        <div
          class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center line-border-right line-right-xs-none px-0 mt-4 mt-lg-0"
        >
          <div class="col-8">
            <img src="../assets/img/process/proposal.svg" alt="Entendimiento">
            <h2 class="fs-16 my-4">Propuesta</h2>
            <p class="text-justify ff-ginora text-dark">
              Diseñamos de acuerdo tus necesidades.
            </p>
          </div>
        </div>
        <div
          class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center line-border-right px-0 mt-4 mt-lg-0"
        >
          <div class="col-8">
            <img src="../assets/img/process/accept.svg" alt="Entendimiento">
            <h2 class="fs-16 my-4">Validación</h2>
            <p class="text-justify ff-ginora text-dark">
              Nos adaptamos a tus necesidades.
            </p>
          </div>
        </div>
        <div
          class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center line-border-right line-right-xs-none px-0 mt-4 mt-lg-0"
        >
          <div class="col-8">
            <img src="../assets/img/process/worker.svg" alt="Entendimiento">
            <h2 class="fs-16 my-4">Manos a la obra</h2>
            <p class="text-justify ff-ginora text-dark">
              Ejecutamos las ideas en tiempo y forma.
            </p>
          </div>
        </div>
        <div
          class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-0"
        >
          <div class="col-8">
            <img src="~/assets/img/process/delivery.svg" alt="Entendimiento">
            <h2 class="fs-16 my-4">Entrega</h2>
            <p class="text-justify ff-ginora text-dark">
              Materializamos tus sueños.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 space-section-top">
      <div class="container-4 d-flex align-items-center flex-wrap">
        <div
          class="col-sm-5 col-md-5 col-lg-5 px-0 cursor-pointer"
          @click="showModal('foto-obra-terraza-prof-luis-toro7.jpg')">
          <ImgLeftBorder img="foto-obra-terraza-prof-luis-toro7.jpg" title="TERRAZA JARDÍN PROFESOR LUIS TORO">
          </ImgLeftBorder>
        </div>
        <div
          class="col-sm-6 col-md-5 col-lg-3 offset-sm-1 offset-md-1 offset-lg-3 pl-sm-5 pl-lg-4 mt-5 pt-5 mt-sm-0 pt-sm-0 mt-md-5 pt-md-5 mt-xl-0 pt-xl-0">
          <h2 class="title-model-line-right mb-5">
            <p class="dash mb-0">PROYECTOS</p>
            <p>PERSONALIZADOS</p>
          </h2>
          <CardtextLineLeft class="card-with-titled" content='Inspirados por lo que nuestros clientes desean llevar a
          cabo, creamos diseños arquitectónicos EXCLUSIVOS. Nuestras soluciones integrales
          en el desarrollo de la arquitectura respetan en cada momento la normativa vigente, criterios arquitectónicos
          y estructurales propios de cada tipología de construcción.  Diseñamos el espacio ideal para ti.'
                            linkTo="/servicios#proyectos"
          >
          </CardtextLineLeft>
        </div>
      </div>
    </section>
    <section class="py-5 space-section-top">
      <div class="container-5 d-flex flex-wrap align-items-center">
        <div class="col-sm-5 col-lg-3 col-12">
          <h2 class="ff-century-g text-blue traking-200 break-wor fs-28 mb-5">
            PROYECCIÓN CON MODELOS EN 3D
          </h2>
          <CardtextLineLeft
            class="card-with-titled"
            content='Como arquitectos es de nuestro interés facilitar el diálogo con nuestros clientes,
            damos vida a sus ideas, utilizando tecnología basada en tercera dimensión virtual, así
            nuestros clientes pueden ver la imagen recreada de su proyecto arquitectónico desde un
            inicio y antes de llevarlo a cabo. Esto les brinda la certeza y confianza de obtener los
            resultados soñados.'
            linkTo="/contacto#contacto"
          >
          </CardtextLineLeft>
        </div>
        <div class="col-sm-6 offset-sm-1 offset-lg-3 px-md-0 cursor-pointer">
          <div class="img-card-right">
            <video width="100%" height="auto" controls>
              <source src="../assets/video/animacion1.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <div class="title-img ff-century-g fs-13 text-blue">
            </div>
          </div>
          <div class="img-card-right mt-5">
            <video width="100%" height="auto" controls>
              <source src="../assets/video/animacion2.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <div class="title-img ff-century-g fs-13 text-blue">
            </div>
          </div>
        </div>

      </div>
    </section>
    <section class="py-5 space-section-top call-to-action">
      <div class=" d-flex align-items-center justify-content-center">
        <div class="col-sm-10 col-md-6 col-lg-4 px-1 d-flex justify-content-center flex-wrap py-5">
          <h2 class="ff-century-g fw-bold text-uppercase text-white text-center traking-200 fs-25">
            ¿BUSCAS AYUDA CON TU PROYECTO ARQUITECTÓNICO?
          </h2>
          <nuxt-link to="/contacto" class="ff-century-g fw-bold btn-call-action mt-4 text-uppercase">
            Solicita tu consulta gratis
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="pb-5 space-section-top">
      <div class="container-3">
        <div
          class="d-flex justify-content-sm-between justify-content-center col-12"
        >
          <h2 class="title-model-1">
            <span class="first">Galería de</span>
            <span class="dash">proyectos</span>
          </h2>
          <nuxt-link
            to="/proyectos"
            class="title-model-2 col-3 col-xl-2 text-right d-none d-sm-flex">
            Ver todos los proyectos
          </nuxt-link>
        </div>
      </div>
      <Gallery class="mt-5" :galleryItems="galleryData">
      </Gallery>
    </section>
    <div class="container-3 space-section-top">
      <div
        class="d-flex justify-content-sm-between justify-content-center col-12"
      >
        <h2 class="title-model-1">
          <span class="first">ALIANZAS CON </span>
          <span class="dash">NUESTROS PROVEEDORES</span>
        </h2>
        <!--<nuxt-link
          to="/proyectos"
          class="title-model-2 col-3 col-xl-2 text-right d-none d-sm-flex">
          Ver todos los proyectos
        </nuxt-link>-->
      </div>
    </div>
    <section class="d-flex justify-content-center mt-5 proveedores-section">

      <div class="d-flex justify-content-center justify-content-lg-start flex-wrap col-md-10 col-lg-11">
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
            <img src="../assets/img/proveedores/tendenza.png" alt="Entendimiento" width="160">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center  px-0 mt-4 mt-lg-3">
          <img src="../assets/img/proveedores/pietra-bela.jpeg" alt="Entendimiento" width="100">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
          <img src="../assets/img/proveedores/prodelec.png" alt="Entendimiento" width="170" height="45">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center  px-0 mt-4 mt-lg-3">
            <img src="../assets/img/proveedores/bticino_logo.png" alt="Entendimiento" width="140">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
            <img src="../assets/img/proveedores/helvex-1.png" alt="Entendimiento " width="100">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center  px-0 mt-4 mt-lg-3">
            <img src="../assets/img/proveedores/remodela_logo.jpg" alt="Entendimiento" width="120">
        </div>
        <div id="interceramic" class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
            <img  src="../assets/img/proveedores/interceramic.png" alt="Entendimiento">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
          <img src="../assets/img/proveedores/ipsa-logox2-1.png" alt="Entendimiento" width="130">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
          <img src="../assets/img/proveedores/retex-cementos-logo.png" alt="Entendimiento" width="120">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
          <img src="../assets/img/proveedores/iluminacion-megamex.png" alt="Entendimiento" width="160">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
          <img src="../assets/img/proveedores/tecnolite.jpg" alt="Entendimiento" width="170">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
          <img src="../assets/img/proveedores/protexa-Logo.png" alt="Entendimiento" width="130">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
          <img src="../assets/img/proveedores/simon.svg" alt="Entendimiento" width="100">
        </div>
        <div class="col-12 col-sm-4 col-lg-2 ff-century-g text-blue d-flex justify-content-center px-0 mt-4 mt-lg-3">
          <img src="../assets/img/proveedores/magg.jpg" alt="Entendimiento" width="140">
        </div>
      </div>
    </section>
    <section class="my-5">
      <div class="container-3 d-flex align-items-center flex-wrap">
        <div class=" col-sm-5 col-md-3 justify-content-center justify-content-lg-end px-lg-5 d-flex">
          <h2 class="text-vertical ff-century-g text-blue traking-200 fs-45">
            BETANZOS —ARQUITECTOS
          </h2>
        </div>
        <div
          class=" col offset-sm-1 offset-md-0 space-section-top col-md-3 col-sm-6 pr-xl-0"
        >
          <CardModel2
            bodyText="Como arquitectos, creamos un proyecto de arquitectura a tu medida con diferentes planes de
            financiamiento para tu obra y proyecto arquitectónico.">
          </CardModel2>

          <CardModel2 titleFirst="Acompañamiento"
                      titleDash="24/7"
                      bodyText="Te acompañamos paso a paso definiendo y desglosando todos los elementos para materializar
                       la arquitectura de la obra.">
          </CardModel2>
          <CardModel2
            titleFirst="Metodología"
            titleDash="de diseño 3D"
            bodyText="Con nuestros proyectos arquitectónicos, visualiza el resultado final con la imagen virtual de la
            obra de nuestros diseño 3D.">
          </CardModel2>
        </div>
        <div class="col offset-sm-6 offset-md-2 offset-lg-1 col-md-3 col-sm-6 px-xl-0">
          <CardModel2
            titleFirst="Máxima calidad"
            titleDash="de entregables"
            bodyText="Proyectamos y diseñamos tus ideas con la impecable calidad que un profesional de arquitectura debe tener.">
          </CardModel2>
          <CardModel2
            titleFirst="Flexibilidad y"
            titleDash="Garantía"
            bodyText="Como uno de los arquitectos más profesionales, garantizamos nuestras obras y proyectos arquitectónicos.
             Brindamos la seguridad de que todos los materiales que empleamos en la construcción cuentan con garantía.">
          </CardModel2>
          <CardModel2
            titleFirst="Soluciones"
            titleDash="Integrales"
            bodyText="Cuidamos la armonía de nuestros espacios generando proyectos arquitectónicos funcionales,
            atemporales y estéticos en remodelación y diseño de interiores.">
          </CardModel2>
        </div>
      </div>
    </section>
    <SiteFooter ref="footer" v-scroll="handleScroll">
    </SiteFooter>

    <!--  MODAL   -->
    <b-modal class="modal-customized" centered size="xl" hide-footer ref="my-modal">
      <div class="text-center">
        <img class="img-fluid" :src="imageInModal" alt=""/>
      </div>
    </b-modal>
  </div>
</template>

<script>
  // Layout
  import SiteHeader from '~/components/layout/SiteHeader'
  import SiteFooter from '~/components/layout/SiteFooter'
  import HeroItemSlider from '~/components/pages/home/HeroItemSlider'
  import CardtextLineLeft from '~/components/commons/CardtextLineLeft'
  import Gallery from '~/components/commons/Gallery'
  import CardModel2 from '~/components/pages/home/CardModel2'
  import ImgRightSimple from '~/components/commons/ImgRightSimple'
  import ImgLeftBorder from '~/components/commons/ImgLeftBorder'
  import ImgRightBorder from '~/components/commons/ImgRightBorder'
  import ScrollDown from '~/components/commons/ScrollDown'

  // icons
  import mailIco from '~/components/icons/emailIco'
  import watsIco from '~/components/icons/watsIco'
  import lyonnIco from '~/components/icons/lyonnIco'
  import heartIco from '~/components/icons/heartIco'

  import Vue from 'vue'
  import { mix } from '../mixins/mixins.js'

  // MODAL MIXINS
  import { modalMix } from '../mixins/modal-mixin'
  import Nuxt from '../.nuxt/components/nuxt'

  Vue.directive('scroll', {
    inserted: function(el, binding) {
      let f = function(evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
  })
  export default {
    mixins: [mix, modalMix],
    components: {
      Nuxt,
      SiteHeader,
      SiteFooter,
      HeroItemSlider,
      CardtextLineLeft,
      Gallery,
      CardModel2,
      ScrollDown,
      watsIco,
      mailIco,
      lyonnIco,
      heartIco,
      ImgRightSimple,
      ImgLeftBorder,
      ImgRightBorder
    },
    data() {
      return {
        galleryData: [
          'foto-obra-banio-p-lourdes9.jpg',
          'p-arq-para-esc-p5.jpg',
          'p-arq-casa-r-parque-sur-altozano2.jpg',
          'foto-obra-c-h-san-jacinto3.jpg'
        ],
        sliderPosition: 0,
        sliderContainer: null,
        numberItems: 3 - 1,
        conter: 0,
        interval: null,
        imageInModal: ''
      }
    },
    methods: {
      // showModal(imageName) {
      //   this.imageInModal = require('~/assets/img/images/' + imageName);
      //   this.$refs['my-modal'].show();
      // },
      clickHandler(dataFromItemSlider) {
        this.reset()
        if (dataFromItemSlider === 'next') {
          this.sliderLeft()
        } else if (dataFromItemSlider === 'prev') {
          this.sliderRight()
        }
      },
      sliderLeft() {
        this.conter++
        if (this.conter <= this.numberItems) {
          this.sliderContainer.style.left = '-' + this.conter * 100 + '%'
        } else {
          this.conter = 0
          this.sliderContainer.style.left = '-' + this.conter * 100 + '%'
        }
      },
      sliderRight() {
        this.conter--
        if (this.conter < 0) {
          this.conter = this.numberItems
          this.sliderContainer.style.left = '-' + this.conter * 100 + '%'
        } else {
          this.sliderContainer.style.left = '-' + this.conter * 100 + '%'
        }
      },
      reset() {
        clearInterval(this.interval)
        this.interval = setInterval(() => {
          this.sliderLeft()
        }, 5000)
      }
    },
    mounted() {
      this.sliderContainer = this.$refs.sliderContainer
      this.interval = setInterval(() => {
        this.sliderLeft()
      }, 5000)
    },
    head() {
      return {
        title: 'Inicio - Arquitectos en Morelia',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Betanzos Arquitecto es el despacho de arquitectos en Morelia Michoacán con más de 10 años de experiencia, entregando siempre la mejor calidad a sus clientes.'
          },
          {
            property: 'og:description',
            content:
              'Betanzos Arquitecto es el despacho de arquitectos en Morelia Michoacán con más de 10 años de experiencia, entregando siempre la mejor calidad a sus clientes.',
            vmid: 'og:description'
          },
          {
            property: 'og:url',
            content: 'http://betanzosarquitecto.com/',
            vmid: 'og:url'
          },
          {
            property: 'og:image',
            'content': 'http://betanzosarquitecto.com/betanzos-logo.jpg',
            // content: this.socialImg,
            vmid: 'og:image'
          },
          {
            property: 'og:type',
            'content': 'website',
            vmid: 'og:type'
          },
          {
            property: 'og:site_name',
            'content': 'Betanzos Arquitecto',
            vmid: 'og:site_name'
          },
          {
            property: 'og:title',
            content: 'Betanzos Arquitecto | Inicio - Arquitectos en Morelia',
            vmid: 'og:title'
          }
        ]
      }
    }
  }
</script>

<style lang="scss"></style>
