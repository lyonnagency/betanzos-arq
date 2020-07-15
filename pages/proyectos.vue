<template>
  <div class="page-gallery">
    <SiteHeader></SiteHeader>
    <section class="hero hero-gallery">
      <div ref="myMenu" class="social-hero">
        <a href="https://wa.me/5214435434844" target="_blank">Whatsapp</a>
        <a href="https://www.linkedin.com/company/betanzos-arquitectura/" target="_blank">Linkedin</a>
        <a href="https://www.instagram.com/betanzosarquitectura/" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/arquitectomorelia/" target="_blank">Facebook</a>
      </div>
      <div class="content-hero container-3 full-h d-flex align-items-center position-relative">
        <div class="d-flex mb-5 col-12 align-items-center pl-0 position-relative">
          <div class="py-3 py-md-5 hero-extended pl-5">
            <h1 class="title-model-1 fs-40 model-white py-3 py-md-5">
              <span>Galería de</span> <br/>
              <span>Proyectos</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-md-5">
      <div class="container-5 container-gallery mt-md-5 px-0">
        <div class="col-12 d-flex flex-wrap">
          <div class="col-6 col-sm-3 px-0">
            <h3 class="titile-line-vertical title-gllery cursor-pointer category-selector active"
                @click="GetCurrentGallery($event,'id_1')">
              <p class="r1">Diseño Arquitectónico</p>
              <p>e Interiorismo</p>
            </h3>
          </div>
          <div class="col-6 col-sm-3 px-0">
            <h3 class="titile-line-vertical title-gllery cursor-pointer category-selector"
                @click="GetCurrentGallery($event, 'id_2')">
              <p class="r1">Obras</p>
              <p>Arquitectónicas</p>
            </h3>
          </div>
          <div class="col-6 col-sm-3 px-0">
            <h3 class="titile-line-vertical title-gllery cursor-pointer category-selector"
                @click="GetCurrentGallery($event,'id_3')">
              <p class="r1">Maquetas</p>
<!--              <p>Y construcción</p>-->
            </h3>
          </div>
          <div class="col-6 col-sm-3 px-0">
            <h3 class="titile-line-vertical title-gllery cursor-pointer category-selector"
                @click="GetCurrentGallery($event,'id_4')">
              <p class="r1">Detalles</p>
              <p>de Entrega</p>
            </h3>
          </div>
<!--          <div class="col-6 col-sm-2 px-0">-->
<!--            <h3 class="titile-line-vertical title-gllery cursor-pointer category-selector"-->
<!--                @click="GetCurrentGallery($event,'id_5')">-->
<!--              <p class="r1">Vídeos</p>-->
<!--              <p>de Obra</p>-->
<!--            </h3>-->
<!--          </div>-->
        </div>
      </div>

      <!--      <transition-group tag="div" class="d-flex flex-wrap" name="list-complete">-->
      <!--        <ColGallery-->
      <!--          :img="item"-->
      <!--          v-for="item in currentGallery"-->
      <!--          :key="item"-->
      <!--          class="anim-item"-->
      <!--          @click="modalHandler"-->
      <!--        >-->
      <!--        </ColGallery>-->
      <!--      </transition-group>-->
      <transition tag="div" class="d-flex flex-wrap" name="slide-fade">
        <div class="d-flex flex-wrap" v-if="showGallery">
          <ColGallery
            :img="item"
            :altText="item"
            v-for="(item) in currentGallery"
            :key="item"
            class="anim-item"
            @click="modalHandler">
          </ColGallery>
        </div>
      </transition>

    </section>
    <section class="space-section-top space-section-bottom">
      <div class="d-flex justify-content-center">
        <div
          class="col-10 col-md-8 col-lg-6 col-xl-4 d-flex justify-content-center flex-wrap"
        >
          <h2 class="ff-century-g traking-200 text-blue fs-25 text-center">
            ¿NECESITAS AYUDA CON TU PROYECTO?
          </h2>
          <nuxt-link to="/contacto" class="btn-base fw-bold fs-13 mt-5">
            Solicita tu consulta gratis
          </nuxt-link>
        </div>
      </div>
    </section>
    <SiteFooter ref="footer" v-scroll="handleScroll">
    </SiteFooter>
    <b-modal centered hide-footer size="xl" ref="modal-gallery">
      <img v-show="!modalIsVideo" class="img-fluid" :src="imageInModal" alt=""/>
      <video class="video-modal" v-show="modalIsVideo"  controls controlsList="nodownload">
        <source :src="imageInModal" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </b-modal>
  </div>
</template>

<script>
  import SiteHeader from '~/components/layout/SiteHeader'
  import SiteFooter from '~/components/layout/SiteFooter'

  import ColGallery from '~/components/pages/Gallery/ColGallery'

  import {mix} from '../mixins/mixins.js'

  export default {
    mixins: [mix],
    name: 'Gallery',
    components: {
      SiteHeader,
      SiteFooter,
      ColGallery
    },
    data() {
      return {
        imageInModal: '',
        showGallery: true,
        currentGallery: [],
        categorySelectorGallery: null,
        currentClicked: null,
        currentId:'',
        modalIsVideo:false,
        fullGallery: {
          id_1: [
            'p-arq-casa-r-pra-p1-1',
            'p-arq-casa-r-pra-p1-2',
            'p-arq-casa-r-pra-p1-3',
            'p-arq-casa-r-pra-p1-5',
            'p-arq-casa-r-pra-p2-1',
            'p-arq-casa-r-pra-p2-3',
            'p-arq-casa-r-guz-villa-cocina',
            'p-arq-casa-r-guz-villa-comedor-i',
            'p-arq-casa-r-guz-villa-fachada1',
            'p-arq-casa-r-guz-villa-fachada2',
            'p-arq-casa-r-guz-villa-fachada-i1',
            'p-arq-para-esc-p1',
            'p-arq-para-esc-p2',
            'p-arq-para-esc-p4',
            'p-arq-para-esc-p5',
            'p-arq-para-esc-p6',
            'p-arq-para-esc-p67',

            'p-arq-casa-h-alejandra-p1',
            'p-arq-casa-h-alejandra-p2',
            'p-arq-casa-h-las-flo-ext-1',
            'p-arq-casa-h-las-flo-int-1',
            'p-arq-casa-h-las-flo-int-2',
            'p-arq-casa-h-san-jacinto-sal1',
            'p-arq-casa-h-san-jacinto-sal2',
            'p-arq-casa-r-coral2-cocina-i',
            'p-arq-casa-r-coral2-escal-i',
            'p-arq-casa-r-coral2-exterior1',
            'p-arq-casa-r-coral2-exterior2',
            'p-arq-casa-r-coral2-recamara-i',
            'p-arq-casa-r-coral2-sala-i',
            'p-arq-casa-r-parque-sur-altozano1',
            'p-arq-casa-r-parque-sur-altozano2',
            'p-arq-casa-r-parque-sur-altozano4',

            'p-arq-depa-carreon-i1',
            'p-arq-depa-carreon-i2',
            'p-arq-depa-carreon-r1',
            'p-arq-depa-carreon-r2',
            'p-arq-depa-carreon-r4',
            'p-arq-igles-fachada',
            'p-arq-igles-i1',
            'p-arq-igles-tech-policarb',
            'p-arq-igles-tech-policarb2',
            'p-arq-igles-torres',
            'p-arq-loma-c-p1',
            'p-arq-loma-c-p2',
            'p-arq-loma-c-p3',
            'p-arq-loma-c-p4',
            'p-arq-loma-c-p5',
            'p-arq-parr-s-mateo-cocina',
            'p-arq-parr-s-mateo-despach',
            'p-arq-parr-s-mateo-recamar',
            'p-arq-parr-s-mateo-sala',
            'p-arq-terraza',
          ],
          id_2: [
            'foto-obra-c-h-san-jacinto3',
            'foto-obra-c-h-san-jacinto4',
            'foto-obra-c-h-san-jacinto5',
            'foto-obra-c-h-san-jacinto6',
            'foto-obra-c-h-san-jacinto7',
            'foto-obra-c-h-san-jacinto8',
            'foto-obra-casa-h-lourdes1',
            'foto-obra-casa-h-lourdes2',
            'foto-obra-casa-h-lourdes3',
            'foto-obra-casa-h-lourdes4',
            'foto-obra-casa-h-lourdes5',
            'foto-obra-casa-h-lourdes6',
            'foto-obra-casa-h-lourdes7',
            'foto-obra-casa-h-lourdes8',
            'foto-obra-casa-h-lourdes9',
            'foto-obra-casa-h-lourdes10',
            'foto-obra-casa-h-lourdes11',
            // se supone que es hasta aquí
            'foto-obra-casa-h-lourdes12',

            'foto-obra-banio-p-lourdes1',
            'foto-obra-banio-p-lourdes2',
            'foto-obra-banio-p-lourdes3',
            'foto-obra-banio-p-lourdes4',
            'foto-obra-banio-p-lourdes5',
            'foto-obra-banio-p-lourdes6',
            'foto-obra-banio-p-lourdes7',
            'foto-obra-banio-p-lourdes8',
            'foto-obra-banio-p-lourdes9',
            'foto-obra-banio-p-lourdes10',

            'foto-obra-amp-ch-lomas-santiaguito1',
            'foto-obra-amp-ch-lomas-santiaguito2',
            'foto-obra-amp-ch-lomas-santiaguito3',
            'foto-obra-amp-ch-lomas-santiaguito4',
            'foto-obra-amp-ch-lomas-santiaguito5',
            'foto-obra-amp-ch-lomas-santiaguito6',
            'foto-obra-amp-seg-plan-santa-m1',
            'foto-obra-amp-seg-plan-santa-m2',
            'foto-obra-amp-seg-plan-santa-m3',
            'foto-obra-amp-seg-plan-santa-m4',
            'foto-obra-amp-seg-plan-santa-m5',
            'foto-obra-amp-seg-plan-santa-m6',
            'foto-obra-amp-seg-plan-santa-m7',
            'foto-obra-amp-seg-plan-santa-m8',
            'foto-obra-amp-seg-plan-santa-m9',

          // sobró esta imagen
            'foto-obra-banio-p-lourdes11',

            'foto-obra-c-h-san-jacinto',
            'foto-obra-c-h-san-jacinto2',
            'foto-obra-depa-est-lomas-tecnologico1',
            'foto-obra-depa-est-lomas-tecnologico2',
            'foto-obra-depa-est-lomas-tecnologico3',
            'foto-obra-depa-est-lomas-tecnologico4',
            'foto-obra-depa-est-lomas-tecnologico5',
            'foto-obra-depa-est-lomas-tecnologico6',
            'foto-obra-depa-est-lomas-tecnologico7',
            'foto-obra-depa-est-lomas-tecnologico8',
            'foto-obra-obra-trab-ob-pub-464-1',
            'foto-obra-obra-trab-ob-pub-464-2',
            'foto-obra-obra-trab-ob-pub-464-3',
            'foto-obra-obra-trab-ob-pub-464-4',
            'foto-obra-remod-c-h-toms-de-la-huerta1',
            'foto-obra-remod-c-h-toms-de-la-huerta2',
            'foto-obra-remod-c-h-toms-de-la-huerta3',
            'foto-obra-remod-c-h-toms-de-la-huerta4',
            'foto-obra-remod-c-h-toms-de-la-huerta5',
            'foto-obra-remod-c-h-toms-de-la-huerta6',
            'foto-obra-terraza-prof-luis-toro1',
            'foto-obra-terraza-prof-luis-toro2',
            'foto-obra-terraza-prof-luis-toro3',
            'foto-obra-terraza-prof-luis-toro4',
            'foto-obra-terraza-prof-luis-toro5',
            'foto-obra-terraza-prof-luis-toro6',
            'foto-obra-terraza-prof-luis-toro7',
          ],
          id_3: [
            'maqu-dirka-depa-residen-san-fernando',
            'maqu-cat-moreia-fachada-oriente',
            'maqu-ces-casa-h-mod-recife1',
            'maqu-ces-casa-h-mod-recife2',
            'maqu-ces-casa-h-mod-recife3',
            'maqu-ces-casa-h-mod-recife4',
            'maqu-ces-casa-h-mod-recife5',
          ],
          id_4: [
            'IMG_1834',
            'IMG_3859',
            'IMG_4472',
            'IMG_8637',
            'IMG_9698',
          ],
          // videos array
          id_5:[
            'obra1',
            'obra2',
          ]
        }
      }
    },
    methods: {
      modalHandler(data) {
        this.$refs['modal-gallery'].show();
        this.imageInModal = require('~/assets/img/images/' + data+'.jpg')

        console.log(this.currentId);
        this.modalIsVideo=false;
        if (this.currentId==='id_5'){
          this.modalIsVideo=true;
          this.imageInModal = require('~/assets/video/' + data+'.mp4')
        }
      },
      GetCurrentGallery(el, id) {

        if (id !== this.currentClicked) {
          this.currentId=id;

          this.categorySelectorGallery = document.querySelectorAll('.active');
          // Clean the active class
          this.categorySelectorGallery.forEach(element => {
            // console.log(element);
            element.classList.remove('active')
          });
          // Set the active class
          el.target.parentElement.classList.add('active');
          //
          this.showGallery = false;
          this.currentGallery = this.fullGallery[id];
          setTimeout(() => {
            this.showGallery = true
          }, 700);

          this.currentClicked = id;
        }
      }
    },
    computed: {},
    mounted() {
      this.currentGallery = this.fullGallery.id_1;

    },
    head() {
      return {
        title: 'Galería de proyectos',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Revisa la galería con nuestros mejores proyectos de arquitectura y mira nuestra calidad. Casi todos los proyectos fueron elaborados para la zona de Morelia.'
          },
          {
            property: 'og:description',
            content:
              'Revisa la galería con nuestros mejores proyectos de arquitectura y mira nuestra calidad. Casi todos los proyectos fueron elaborados para la zona de Morelia.',
            vmid: 'og:description'
          },
          {
            property: 'og:url',
            content: 'http://betanzosarquitecto.com/proyectos',
            vmid: 'og:url'
          },
          {
            property: 'og:image',
            'content': 'http://betanzosarquitecto.com/betanzos-logo',
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
            content: 'Betanzos Arquitecto | Galería de proyectos',
            vmid: 'og:title'
          }
        ]
      }
    }
  }
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }

</style>
