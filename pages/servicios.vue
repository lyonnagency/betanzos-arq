<template>
  <div class="services-page">
    <SiteHeader></SiteHeader>
    <section class="hero hero-services">
      <div ref="myMenu" class="social-hero">
        <a href="https://wa.me/5214435434844" target="_blank">Whatsapp</a>
        <a href="https://www.linkedin.com/company/betanzos-arquitectura/" target="_blank">Linkedin</a>
        <a href="https://www.instagram.com/betanzosarquitectura/" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/arquitectomorelia/" target="_blank">Facebook</a>
      </div>
      <div class="content-hero container-3 full-h d-flex align-items-center">
        <div class="d-flex  mb-5 pb-5 mb-sm-0 pb-sm-0">
          <div class="col-5">
            <h1 class="title-model-1 fs-40">
              <span class="first">Nuestros</span> <br/>
              <span>Servicios</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div id="diseño"></div>
    <section class="space-section-top">

      <div class="d-flex justify-content-center">

        <div
          class="col-md-8 col-lg-5 col-12 d-flex flex-wrap justify-content-center px-4 px-sm-5 px-md-0"
        >

          <h2 class="ff-century-g fs-30 text-blue text-uppercase text-center">
            Diseño arquitectónico
          </h2>
          <p class="comun-text mt-4 text-center">
            Una de nuestras especialidades es el diseño de espacios, usamos como inspiración a cada uno de nuestros
            clientes, creamos espacios que reflejen su esencia, dando
            soluciones de innovación arquitectónica a través
            de un proceso creativo especializado en diseñar entornos cuidando el equilibrio en función y diseño creando
            así espacios que trascienden.
          </p>
        </div>
      </div>
    </section>
    <div id="proyectos"></div>
    <section class="space-section-top">
      <div class="container-6 py-lg-5">
        <div class="d-flex align-items-center flex-wrap">
          <div class="col-12 col-sm-6 col-md-4 col-lg-2 px-5 px-md-0">
            <CardTextTall title="Proyectos Arquitectónicos"
                          :bodyArray='[`Cada proyecto es único, es una oportunidad que merece soluciones creativas e innovadoras.`,
                           `Desarrollamos todos los elementos necesarios para plasmar el diseño arquitectónico y llevar a cabo una ejecución impecable de la construcción.`
                          ]'>
            </CardTextTall>
          </div>
          <div
            class="col-12 col-sm-6 col-md-6 col-lg-8 px-0 pr-lg-0 d-flex flex-wrap offset-sm-0 offset-md-2 mt-5 mt-lg-0"
          >
            <!-- TODO -->
            <!-- OPTIMIZAR ESTA PARTE DEL CÓDIGO -->
            <div
              class="col-12 col-lg-6 px-sm-0 pr-0 left-border fix-img border-img-left"
            >
              <div class="img-wrapper cursor-pointer"
                   @click="showModal('p-arq-para-esc-p4.jpg')">
                <img
                  class="img-flud"
                  src="~/assets/img/images/p-arq-para-esc-p4.jpg"
                  alt="Proyectos de arquitectura"
                />
                <div class="title-img ff-century-g fs-13 text-blue">
                  PROYECTO CASA DE DESCANSO PARAÍSO ESCONDIDO
                </div>
              </div>
            </div>
            <div
              class="col-12 col-lg-6 pl-3 px-sm-0 pr-0 img-tall-slim fix-img overflow-hidden mt-3 mt-lg-0"
            >
              <div class="img-wrapper overflow-hidden ml-lg-2 cursor-pointer"
                   @click="showModal('foto-obra-amp-ch-lomas-santiaguito3.jpg')">
                <img
                  class="img-flud"
                  src="~/assets/img/images/foto-obra-amp-ch-lomas-santiaguito3.jpg"
                  alt="Proyectos de arquitectura"
                />
                <div class="title-img ff-century-g fs-13 text-blue">
                  AMPLIACIÓN CASA HABITACIÓN LOMAS DE SANTIAGUITO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- SECTION EXTRA -->
      <div class="extra-section space-section-top">
        <div class="bg-extra">
        </div>
        <div id="apasionados"></div>
        <div class="extra-section-card-text mx-3 py-5">

          <div class="d-flex flex-wrap px-5 px-sm-3 py-sm-4 py-md-5">
            <div class="col-12 col-sm-5 col-md-4 offset-lg-1 col-lg-2 px-0">
              <h2 class="ff-century-g fs-30 text-white text-uppercase traking-200 line-over-left mt-sm-4">
                Apasionados con el objetivo de producir lo mejor
              </h2>
            </div>
            <div class="col-12 col-sm-6 col-lg-6 offset-sm-1 offset-lg-2 px-0 mt-4 mt-sm-0 ">
              <p class="comun-text text-white">
                La calidad es algo que no ponemos en juego, nuestra filosofía es entregar siempre lo mejor superando
                siempre las expectativas de todos nuestros clientes. Nos gusta la idea de siempre estar mejorando e
                innovando manteniéndonos en un constante aprendizaje ante las nuevas tendencias en la arquitectura
                contemporánea con nuestras propuestas de diseño en cada proyecto y ser altamente reconocidos por eso,
                como uno de los mejores arquitectos con identidad y trayectoria en la zona de Morelia y sus
                alrededores. Por lo que, Betanzos arquitecto les ofrece a sus clientes:
              </p>
              <ul class="list-services comun-text text-white">
                <li>
                  Calidad de diseño arquitectónico.
                </li>
                <li>
                  Asesoría personalizada para cada proyecto de arquitectura.
                </li>
                <li>
                  Diseños arquitectónicos únicos y personalizados.
                </li>
                <li>
                  Nuestros más de 10 años de experiencia realizando una gran variedad de proyectos de arquitectura en
                  Morelia.
                </li>
                <li>
                  Nuestra calidad como profesionales que estarán acompañandote durante todo el
                  proceso.
                </li>
              </ul>
              <nuxt-link to="/contacto#contacto" class="title-model-2 text-right ff-ginora model-white"
              >Hablar de un proyecto
              </nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="container-4 space-section-top">
        <div class="d-flex flex-wrap-reverse align-items-center">
          <div
            class="col-12 col-sm-6 col-md-7 col-lg-8 pl-0 d-flex flex-wrap mt-5 mt-sm-0"
          >
            <div class="cursor-pointer"
                 @click="showModal('foto-obra-terraza-prof-luis-toro2.jpg')">
              <ImgLeftBorder
                title="AMPLIACIÓN CASA HABITACIÓN LOMAS DE SANTIAGUITO"
                class="full-border-top w-100"
                img="foto-obra-terraza-prof-luis-toro2.jpg">
              </ImgLeftBorder>
            </div>
            <div class="cursor-pointer"
                 @click="showModal('foto-obra-terraza-prof-luis-toro6.jpg')">
              <ImgLeftBorder
                title="CASA HABITACIÓN LOURDES MORENO"
                class="no-border w-100 mt-4"
                img="foto-obra-terraza-prof-luis-toro6.jpg">
              </ImgLeftBorder>
            </div>
          </div>
          <div
            class="col-12 col-sm-5 col-md-4 col-lg-2 offset-sm-1 px-5 pl-sm-0 px-lg-0 "
          >
            <CardTextTall
              :bodyArray="[`Creemos que cada espacio debe ser un punto de encuentro y convivencia humana para pasar esos
              momentos únicos, con el mejor diseño y características agradables para la estancia. Para la realización de
              tus ideas contamos con proveedores especializados en el ramo de acabados y decoración para materializar el
              diseño con un sentido de equilibrio entre la eficiencia y la estética. `]">
            </CardTextTall>
          </div>
        </div>
      </div>
    </section>
    <div id="ejecutivos"></div>
    <section class="space-section-top">
      <div class="container-6 d-flex flex-wrap align-items-center">
        <div class="col-sm-5 col-md-4 col-lg-2 col-12 px-5 pr-sm-0 px-md-0">

          <CardTextTall title="Proyectos Ejecutivos"
                        :bodyArray="[`Todos nuestros planos son entregados con la información clara y precisa haciendo
                        un adecuado uso de técnicas, herramientas y materiales para la construcción y tramitología de
                        los proyectos, para así lograr un proyecto arquitectónicamente
                        perfectamente llevada a cabo.`]">
          </CardTextTall>
        </div>
        <div
          class="col-sm-6 col-lg-8  col-12 offset-sm-1 offset-md-2 pr-0 mt-5 mt-sm-0"
        >
          <div
            class="px-0 left-border fix-img border-img-left height-img tall-image"
          >
            <div class="img-wrapper cursor-pointer" @click="showModal('BOCETO-PLANO-01.jpg')">
              <img
                class="img-flud"
                src="~/assets/img/images/BOCETO-PLANO-01.jpg"
                alt="Proyectos de arquitectura"
              />
              <div class="title-img ff-century-g fs-13 text-blue">
                NUEVA SEDE SNTSA XXI EN MORELIA MICHOACÁN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="space-section-top">
      <div class="container-4 d-flex flex-wrap-reverse align-items-center">
        <div class="col-sm-6 col-md-7 col-lg-8 pl-0 mt-5 mt-sm-0 cursor-pointer"
             @click="showModal('foto-obra-c-h-san-jacinto7.jpg')">
          <ImgLeftBorder
            title="AMPLIACIÓN SEGUNDA PLANTA SANTA MARÍA"
            class="full-border-top w-100"
            img="foto-obra-c-h-san-jacinto7.jpg">
          </ImgLeftBorder>
        </div>
        <div
          class="col-sm-5 col-md-4 col-lg-2 offset-sm-1 px-5 pl-sm-0 px-lg-0"
        >
          <CardTextTall title="CONSTRUCCIÓN GENERAL"
                        :bodyArray="[`Nos gusta hacer realidad los sueños de nuestros clientes y contribuir a su bienestar,
                        ya que contamos con la experiencia, los conocimientos y las
                        herramientas para llevar a cabo obras de construcción de primer nivel, aportando en cada obra
                        arquitectónica la estética y el buen gusto en funcionamiento del entorno, siempre listos para
                        cumplir con los tiempos de entrega, y garantizar que la calidad sea la esperada.`]">
          </CardTextTall>
        </div>
      </div>
    </section>
    <section class="space-section-top">
      <div class="container-6 d-flex flex-wrap align-items-center">
        <div class="col-sm-5 col-md-4 col-lg-2 px-5 pr-sm-0 px-md-0">
          <CardTextTall title="Ampliaciones de espacios"
                        :bodyArray="[`Somos agentes de cambio, por lo cual diseñamos la distribución de los espacios
                        aprovechando al máximo cada metro cuadrado, con la misión de diseñar espacios que transmitan
                        emociones y cuenten historias en sí mismos.`,`Buscamos mejorar nuestro entorno social y urbano
                        a través de nuestra labor como arquitectos, entregando siempre lo mejor en cada obra arquitectónica.`]">
          </CardTextTall>
        </div>
        <div class="col-sm-6 col-lg-8 offset-sm-1 offset-md-2 pr-0">
          <div class="cursor-pointer" @click="showModal('foto-obra-amp-ch-lomas-santiaguito4.jpg')">
            <ImgRightBorder
              img="foto-obra-amp-ch-lomas-santiaguito4.jpg"
              class="full-border-top"
              title="AMPLIACIÓN CASA HABITACIÓN LOMAS DE SANTIAGUITO">
            </ImgRightBorder>
          </div>
          <div class="cursor-pointer" @click="showModal('foto-obra-amp-ch-lomas-santiaguito1.jpg')">
            <ImgRightBorder
              title="AMPLIACIÓN CASA HABITACIÓN LOMAS DE SANTIAGUITO"
              img="foto-obra-amp-ch-lomas-santiaguito1.jpg"
              class="no-border mt-4">
            </ImgRightBorder>
          </div>
        </div>
      </div>
    </section>
    <section>

      <div class="container-4 space-section-top">

        <div class="d-flex align-items-center flex-wrap-reverse">

          <div
            class="col-sm-6 col-md-7 col-lg-8 pl-0 d-flex flex-wrap mt-5 mt-sm-0">

            <div class="cursor-pointer" @click="showModal('foto-obra-remod-c-h-toms-de-la-huerta6.jpg')">
              <ImgLeftBorder
                title="REMODELACIÓN CASA HABITACIÓN TOMÁS DE LA HUERTA"
                class="full-border-top w-100"
                img="foto-obra-remod-c-h-toms-de-la-huerta6.jpg">
              </ImgLeftBorder>
            </div>
            <div class="cursor-pointer" @click="showModal('foto-obra-terraza-prof-luis-toro4.jpg')">
              <ImgLeftBorder
                title="TERRAZA DECK PROFESOR LUIS TORO"
                class="no-border w-100 mt-2"
                img="foto-obra-terraza-prof-luis-toro4.jpg">
              </ImgLeftBorder>
            </div>
          </div>

          <div class="col-sm-5 col-md-4 col-lg-2 offset-sm-1 px-5 pl-sm-0 px-lg-0">
            <div id="remodelaciones"></div>
            <CardTextTall
              title="Remodelaciones"
              :bodyArray="[`Buscamos contribuir a elevar la calidad de vida de nuestros clientes a través de la
              innovación en el ejercicio de la arquitectura, generando propuestas de valor, con el objetivo de aumentar
              la plusvalía de su patrimonio.`]">
            </CardTextTall>
          </div>
        </div>
      </div>
    </section>
    <section class="space-section-top">
      <div class="container-6 d-flex flex-wrap align-items-center">
        <div class="col-sm-5 col-md-4 col-lg-2 px-5 pr-sm-0 px-md-0">
          <CardTextTall
            title="Mantenimiento"
            :bodyArray="[`Controlamos y supervisamos cada fase de nuestras obras con una calidad impecable, ya que
            contamos con uno de los mejores arquitectos certificado y calificado en el mantenimiento de cualquier tipo de
            espacio, a fin de garantizar la estabilidad de los inmuebles y uso de las instalaciones.`]">
          </CardTextTall>
        </div>
        <div class="col-sm-6 col-lg-8 offset-sm-1 offset-md-2 pr-0">
          <div class="cursor-pointer" @click="showModal('foto-obra-depa-est-lomas-tecnologico6.jpg')">
            <ImgRightBorder
              title="DEPARTAMENTOS DE ESTUDIANTES LOMAS DEL TECNOLÓGICO"
              img="foto-obra-depa-est-lomas-tecnologico6.jpg"
              class="full-border-top">
            </ImgRightBorder>
          </div>
          <div class="cursor-pointer" @click="showModal('foto-obra-casa-h-lourdes3.jpg')">
            <ImgRightBorder
              title="CASA HABITACIÓN LOURDES MORENO"
              img="foto-obra-casa-h-lourdes3.jpg"
              class="no-border mt-4">
            </ImgRightBorder>
          </div>
        </div>
      </div>
    </section>
    <SiteFooter
      class="space-section-top"
      ref="footer"
      v-scroll="handleScroll">
    </SiteFooter>
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

  import ImgLeftBorder from '~/components/commons/ImgLeftBorder'
  import ImgRightBorder from '~/components/commons/ImgRightBorder'
  import CardTextTall from '~/components/commons/CardTextTall'

  // Mixin
  import {mix} from '../mixins/mixins.js'
  import {modalMix} from "../mixins/modal-mixin";

  export default {
    mixins: [mix, modalMix],
    name: 'Services',

    components: {
      SiteHeader,
      SiteFooter,
      ImgLeftBorder,
      ImgRightBorder,
      CardTextTall
    },
    head() {
      return {
        title: 'Servicios - Arquitectos en Morelia',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Betanzos Arquitecto ofrece sus servicios profesionales de arquitectura en Morelia Mich. Servicios de diseño, construcción, ampliación, remodelaciones, etc.'
          },
          {
            property: 'og:description',
            content:
              'Betanzos Arquitecto ofrece sus servicios profesionales de arquitectura en Morelia Mich. Servicios de diseño, construcción, ampliación, remodelaciones, etc.',
            vmid: 'og:description'
          },
          {
            property: 'og:url',
            content: 'http://betanzosarquitecto.com/servicios',
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
            content: 'Betanzos Arquitecto | Servicios - Arquitectos en Morelia',
            vmid: 'og:title'
          }
        ]
      }
    }
  }
</script>

<style></style>
