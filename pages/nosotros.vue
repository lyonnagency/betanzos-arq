<template>
  <div class="about-page">
    <SiteHeader></SiteHeader>
    <section class="hero hero-about">
      <div ref="myMenu" class="social-hero">
        <a href="https://wa.me/5214435434844" target="_blank">Whatsapp</a>
        <a href="https://www.linkedin.com/company/betanzos-arquitectura/" target="_blank">Linkedin</a>
        <a href="https://www.instagram.com/betanzosarquitectura/" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/arquitectomorelia/" target="_blank">Facebook</a>
      </div>
      <div class="content-hero container-3 full-h d-flex align-items-start align-items-sm-center">
        <div class="d-flex mt-5 mb-sm-5">
          <div class="col-12 mt-5 pt-5 mb-sm-5 pb-sm-5">
            <h1 class="title-model-1 fs-40">
              <span class="first">Acerca de</span> <br/>
              <span>nosotros</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div id="nosotros-betanzos"></div>
    <section class="py-5">
      <div class="d-flex justify-content-center">

        <div
          class="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-4 d-flex justify-content-center flex-wrap px-4 px-sm-3"
        >
          <h2
            class="ff-century-g traking-200 text-blue fs-30 text-center text-uppercase"
          >
            Diseño arquitectónico
          </h2>
          <p class="comun-text text-center text-blue my-4">
            Nuestros diseños son planeados para construir espacios que tengan un gran impacto personal y social, donde
            se vivan los mejores
            momentos. Con nosotros encontrarás la confianza, el compromiso y la honestidad para brindarte el mejor
            servicio de proyectos arquitectónicos. Cada uno de nuestros proyectos son
            desarrollados con altos estándares de calidad en cada parte del proceso y de manera personalizada.
          </p>
          <h3 class="text-blue ff-philomena-script fs-48 mb-5">
            Ismael Vázquez Betanzos
          </h3>
        </div>
      </div>
    </section>
    <Counter class="space-section-top space-section-bottom"></Counter>
    <section class="d-flex justify-content-center">
      <div
        class="col-12 col-sm-11 col-md-12 col-lg-9 d-flex justify-content-center flex-wrap"
      >
        <h2 class="title-model-1 fs-40 pb-5 col-8 col-md-12 ml-0 ml-md-5">
          <div class="d-none d-md-block">
            <div class="first ">EQUIPO BETANZOS</div>
          </div>
          <div class="d-block d-sm-none">
            <div class="first ">EQUIPO</div>
            BETANZOS
          </div>
        </h2>
        <div class="d-flex justify-content-lg-center flex-wrap col-12">
          <div
            class="col-lg-4 col-12 col-sm-6 col-md-4 team-item mt-md-0 reset-hover-link">
            <div class="wrapper-img-team">
              <!-- <img src="~/assets/img/faceTeam-1.jpg" alt="Team-1" /> -->
            </div>
            <a href="https://www.linkedin.com/in/ismael-v%C3%A1zquez-betanzos-a966a5146/"
               target="_blank"
               title="Linkedin Arq. Ismael Vázquez Betanzos">
              <h3 class="name">M.D.A. Arq. Ismael Vázquez Betanzos</h3>
            </a>
            <h4 class="position">Director General</h4>
          </div>
          <div
            class="col-lg-4 col-12 col-sm-6 col-md-4 team-item blue-item t3 mt-sm-4 mt-md-0"
          >
            <div class="wrapper-img-team">
              <!-- <img src="~/assets/img/faceTeam-1.jpg" alt="Team-1" /> -->
            </div>
            <h3 class="name">Marcos Cruz Delgado</h3>
            <h4 class="position">Equipo de construcción</h4>
          </div>
        </div>
      </div>
    </section>
    <section class="container-6 pt-5 space-section-top">
      <div class="d-flex flex-wrap align-items-center">
        <div
          class="col-12 col-sm-5 offset-sm-1 col-lg-3 px-lg-0 pl-sm-3 px-4 pr-5"
        >
          <div class="title-over bg-blue-b">
            <h2
              class="traking-200 col-6 ff-century-g text-uppercase fs-32 mb-5"
            >
              <span class="traking-400">Nuestra</span>
              misión
            </h2>
          </div>
          <div class="mb-5 mb-sm-0">
            <p class="comun-text pt-5">
              Somos un despacho enfocado en la elaboración y creación de proyectos arquitectónicos y ejecutivos, así
              como la materialización de los mismos por medio de la construcción, proponiendo la exclusividad e
              innovación en cada proyecto realizado, cubriendo las necesidades y gustos de nuestros clientes a través de
              soluciones integrales.
            </p>
          </div>
        </div>
        <div
          class="col-lg-7 col-12 col-sm-6 pr-0 d-flex offset-lg-1 pl-0 pr-3 pr-sm-0 flex-wrap pl-md-5 pl-lg-3"
        >
          <!-- TODO -->
          <!-- OPTIMIZAR ESTA PARTE DEL CÓDIGO -->
          <div class="col-lg-6 px-0 left-border fix-img">
            <div class="img-wrapper cursor-pointer" @click="showModal('foto-obra-banio-p-lourdes11.jpg')"
            >
              <img
                class="img-flud"
                src="~/assets/img/images/foto-obra-banio-p-lourdes11.jpg"
                alt="Proyectos de arquitectura"
              />
              <div class="title-img ff-century-g fs-13 text-blue">
                BAÑO PRINCIPAL LOURDES MORENO
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 px-0 img-tall-slim fix-img overflow-hidden mt-2 mt-lg-0"
          >
            <div class="img-wrapper overflow-hidden ml-lg-2 cursor-pointer"
                 @click="showModal('foto-obra-casa-h-lourdes4.jpg')">
              <img
                class="img-flud"
                src="~/assets/img/images/foto-obra-casa-h-lourdes4.jpg"
                alt="Proyectos de arquitectura"
              />
              <div class="title-img ff-century-g fs-13 text-blue">
                CASA HABITACIÓN LOURDES MORENO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="d-flex align-items-center flex-wrap-reverse pt-5 pt-xl-0">
        <div
          class="col-12 col-sm-6 col-lg-6 pl-0 pr-0 d-flex flex-wrap pl-4 pl-sm-0 pr-md-5 pr-lg-3"
        >
          <!-- TODO -->
          <!-- OPTIMIZAR ESTA PARTE DEL CÓDIGO -->
          <div class="col-12 col-lg-6 px-0 left-border fix-img">
            <div class="img-wrapper cursor-pointer"
                 @click="showModal('p-arq-casa-r-guz-villa-comedor-i.jpg')">
              <img
                class="img-flud"
                src="~/assets/img/images/p-arq-casa-r-guz-villa-comedor-i.jpg"
                alt="Proyectos de arquitectura"
              />
              <div class="title-img ff-century-g fs-13 text-blue">
                PROYECTO CASA RESIDENCIAL GUZMÁN VILLA
              </div>
            </div>
          </div>
          <div
            class="col-12 col-lg-6 px-0 img-tall-slim fix-img overflow-hidden mt-2 mt-lg-0"
          >
            <div class="img-wrapper overflow-hidden ml-lg-2 cursor-pointer"
                 @click="showModal('p-arq-casa-r-guz-villa-cocina.jpg')">
              <img
                class="img-flud"
                src="~/assets/img/images/p-arq-casa-r-guz-villa-cocina.jpg"
                alt="Proyectos de arquitectura"
              />
              <div class="title-img ff-century-g fs-13 text-blue">
                PROYECTO CASA RESIDENCIAL GUZMÁN VILLA
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-sm-5 offset-lg-1 col-lg-3 pl-sm-5 pl-md-5 pl-lg-3 pl-5"
        >
          <div class="title-over reverse-over-title bg-orange-b ">
            <h2
              class="traking-200 col-6 ff-century-g text-uppercase fs-32 mb-5"
            >
              <span class="traking-400">Nuestra</span>
              Visión
            </h2>
          </div>
          <div class="mb-5 mb-sm-0">
            <p class="comun-text pt-5 ">
              Nos guiamos por la convicción de posicionarnos como el despacho de arquitectura y construcción más
              innovador en la ciudad de morelia.
            </p>
          </div>
        </div>
      </div>
    </section>
    <SiteFooter class="space-section-top" ref="footer" v-scroll="handleScroll"></SiteFooter>
    <!--  MODAL   -->
    <b-modal class="modal-customized" centered size="xl" hide-footer ref="my-modal">
      <div class="text-center">
        <img class="img-fluid" :src="imageInModal" alt=""/>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import SiteHeader from '~/components/layout/SiteHeader'
  import SiteFooter from '~/components/layout/SiteFooter'
  import Counter from '~/components/pages/AboutUs/Counter'

  import { mix } from '../mixins/mixins.js'
  import { modalMix } from '../mixins/modal-mixin'


  export default {
    name: 'AboutUs',
    mixins: [mix, modalMix],
    components: {
      SiteHeader,
      SiteFooter,
      Counter
    },
    head() {
      return {
        title: 'Acerca de Nosotros',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Nosotros somos un despacho de arquitectos 100% mexicano, enfocado en la elaboración de proyectos arquitectónicos y ejecutivos en Morelia Michoacán.'
          },
          {
            property: 'og:description',
            content:
              'Nosotros somos un despacho de arquitectos 100% mexicano, enfocado en la elaboración de proyectos arquitectónicos y ejecutivos en Morelia Michoacán.',
            vmid: 'og:description'
          },
          {
            property: 'og:url',
            content: 'http://betanzosarquitecto.com/nosotros',
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
            content: 'Betanzos Arquitecto | Acerca de Nosotros',
            vmid: 'og:title'
          }
        ]
      }
    }
  }
</script>

<style></style>
