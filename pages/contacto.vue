<template>
  <div class="contact-page">
    <SiteHeader></SiteHeader>
    <section class="hero hero-contact">
      <div ref="myMenu" class="social-hero">
        <a href="https://wa.me/5214435434844" target="_blank">Whatsapp</a>
        <a href="https://www.linkedin.com/company/betanzos-arquitectura/" target="_blank">Linkedin</a>
        <a href="https://www.instagram.com/betanzosarquitectura/" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/arquitectomorelia/" target="_blank">Facebook</a>
      </div>
      <div
        class="content-hero container full-h d-flex align-items-start align-items-lg-center"
      >
        <div class="d-flex mt-5 pt-5 mt-sm-5 pt-sm-5">
          <div class="col-sm-5 col-md-5 col-lg-3 mt-md-5">
            <h1 class="title-model-1 fs-40 page-title mt-5">
              <span class="first">Contacto</span>
            </h1>
            <p class="comun-text mt-4">
              Si tienes dudas sobre los servicios de arquitectura que ofrece Betanzos arquitecto y de cómo podemos
              ayudarte, ponte en contacto con nosotros, ya sea por teléfono o mediante correo electrónico y con gusto te
              daremos toda la información que necesitas.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container-5 d-flex position-relative flex-wrap">
        <div
          class="col-11 col-sm-7 col-md-6 col-lg-4 mx-3 col-lg-5 py-5 bg-blue card-contact d-flex align-items-center flex-wrap pl-sm-0"
        >
          <div>
            <div class="col-10 py-4 px-0">
              <div class="title-card-contact">
                <h2 class="text-whit">
                  <PhoneIco></PhoneIco>
                  Teléfono
                </h2>
                <div class="col-12 px-0">
                  <p>Movil. (443) 543 4844</p>
                </div>
              </div>
            </div>
            <div class="col-10 py-4 px-0">
              <div class="title-card-contact">
                <h2 class="text-whit">
                  <MailIco class="ico-orange"></MailIco>
                  Mail
                </h2>
                <div class="col-12 px-0">
                  <p>contacto@betanzosarquitecto.com</p>
                  <p>operaciones@betanzosarquitecto.com</p>
                  <p>facturas@betanzosarquitecto.com</p>
                </div>
              </div>
            </div>
            <div class="col-10 py-4 px-0">
              <div class="title-card-contact">
                <h2 class="text-whit">
                  <HouseIco width="15"></HouseIco>
                  Dirección
                </h2>
                <div class="col-12 px-0">
                  <p>Morelia, Mich. México.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-10 col-lg-11 offset-sm-2 offset-lg-1 px-md-0">
          <MapVue></MapVue>
        </div>
      </div>
    </section>
    <div id="contacto"></div>
    <section
      class="bg-orange py-5 d-flex flex-wrap justify-content-center space-section-top"
    >
      <div class="d-flex container py-5 flex-wrap">
        <div class="col-lg-4 col-12 col-sm-6">
          <h1 class="title-model-1 fs-40 mt-2 white-title ml-xl-0">
            <span class="first">Iniciemos un proyecto</span>
          </h1>
          <p class="comun-text mt-4 text-white pr-5">
            Cuéntanos más sobre el proyecto arquitectónico que tienes en mente, y a la brevedad nos pondremos en
            contacto contigo para brindarte la información que necesitas. Recuerda que también puedes contactarnos a
            través de correo electrónico, mediante teléfono o el WhatsApp de Betanzos Arquitecto.
          </p>

        </div>

        <div class="col-lg-7 col-12 col-sm-6 offset-lg-1 d-flex">

          <ValidationObserver v-slot="{ handleSubmit }" ref="form">
            <form @submit.prevent="handleSubmit(sendMail)" ref="contactForm">
              <div
                class="d-flex justify-content-center align-items-center flex-wrap "
              >
                <ValidationProvider
                  name="nombre"
                  rules="required|alpha_spaces"
                  v-slot="{ errors }"
                  class="col-12 ol-1lg-2 d-flex position-relative flex-wrap px-0 px-sm-3"
                >
                  <div class="position-relative w-100">
                    <nameIco width="18" class="ico-input"></nameIco>
                    <input
                      type="text"
                      class="input-betanzos"
                      placeholder="Escribe tu nombre"
                      v-model="name"
                      id="name"
                    />
                  </div>
                  <span
                    class="col-12 ol-1lg-2 px-0 text-white comun-text px-0"
                  >{{ errors[0] }}</span
                  >
                </ValidationProvider>

                <ValidationProvider
                  name="E-mail"
                  rules="required|email"
                  v-slot="{ errors }"
                  class="col-12 col-lg-6 d-flex position-relative flex-wrap px-0 px-sm-3"
                >
                  <div class="position-relative w-100">
                    <MailIco width="23" class="ico-input"></MailIco>
                    <input
                      type="text"
                      class="input-betanzos"
                      placeholder="Escribe tu correo"
                      v-model="mail"
                      id="mail"
                    />
                  </div>
                  <span class="col-12 px-0 text-white comun-text">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>

                <ValidationProvider
                  name="teléfono"
                  :rules="{
                    regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                    required: true
                  }"
                  v-slot="{ errors }"
                  class="col-12 col-lg-6 d-flex position-relative flex-wrap px-0 px-sm-3"
                >
                  <div class="position-relative w-100">
                    <PhoneIco width="20" class="ico-input ico-white"></PhoneIco>
                    <input
                      type="text"
                      class="input-betanzos"
                      placeholder="Escribe tu teléfono"
                      v-model="phone"
                      id="phone"
                    />
                  </div>
                  <span class="col-12 px-0 text-white comun-text">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>

                <ValidationProvider
                  name="cuéntanos"
                  rules="required"
                  v-slot="{ errors }"
                  class="col-12 d-flex position-relative mt-4 flex-wrap px-0 px-sm-3"
                >
                  <div class="position-relative w-100">
                    <iIco width="18" class="ico-input ico-white"></iIco>
                    <textarea
                      type="text"
                      class="input-betanzos"
                      placeholder="Cuéntanos sobre tu proyecto"
                      v-model="message"
                      id="message"
                      rows="1"
                    />
                  </div>
                  <span class="col-12 px-0 text-white comun-text">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
              <div class="col-12 mt-4">
                <button type="submit" class="btn-base btn-on-orange">
                  {{ msgButton }}
                </button>
              </div>
              <span
                v-show="mailStatus"
                class="col-12 comun-text text-white mt-2"
              >
                Gracias por ponerte en contacto, nos comunicaremos a la brevedad
              </span>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </section>
    <SiteFooter ref="footer" v-scroll="handleScroll"></SiteFooter>
  </div>
</template>

<script>
  import SiteHeader from '~/components/layout/SiteHeader'
  import SiteFooter from '~/components/layout/SiteFooter'
  import MapVue from '~/components/pages/contact/map'

  // ICOS
  import PhoneIco from '~/components/icons/phoneIco'
  import MailIco from '~/components/icons/emailIco'
  import HouseIco from '~/components/icons/houseIco'
  import nameIco from '~/components/icons/nameIco'
  import iIco from '~/components/icons/iIco'
  import {mix} from '../mixins/mixins.js'

  export default {
    mixins: [mix],
    name: 'Contact',
    components: {
      SiteHeader,
      SiteFooter,
      MapVue,
      PhoneIco,
      MailIco,
      HouseIco,
      nameIco,
      iIco
    },
    data: () => ({
      name: '',
      mail: '',
      phone: '',
      message: '',
      msgButton: 'Enviar mensaje',
      mailStatus: false
    }),
    methods: {
      async sendMail() {
        let mailData = {}
        this.mailStatus = false
        mailData = {mail: this.mail}
        let formD = new FormData()
        let myForm = this.$refs.contactForm
        let formValidator = this.$refs.form
        for (const i in myForm) {
          if (myForm.hasOwnProperty(i)) {
            formD.append(myForm[i].id, myForm[i].value)
          }
        }
        this.msgButton = 'Enviando...'
        // It has to be modifided to the betanzos domain
        await this.$axios
          .$post('https://betanzosarquitecto.com/mailer_betanzos.php', formD)
          .then(response => {
            // console.log(response)
            if (response.code == 200) {
              this.mailStatus = true
              this.name = ''
              this.mail = ''
              this.phone = ''
              this.message = ''
              formValidator.reset()
              this.msgButton = 'Enviar mensaje'
            }
          })
      }
    },
    head() {
      return {
        title: 'Contáctanos en Morelia',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Ponte en contacto con Betanzos Arquitecto al teléfono o WhatsApp: (443) 543 4844 o al correo: contacto@betanzosarquitecto.com y resolveremos tus dudas.'
          },
          {
            property: 'og:description',
            content:
              'Ponte en contacto con Betanzos Arquitecto al teléfono o WhatsApp: (443) 543 4844 o al correo: contacto@betanzosarquitecto.com y resolveremos tus dudas.',
            vmid: 'og:description'
          },
          {
            property: 'og:url',
            content: 'http://betanzosarquitecto.com/contacto/',
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
            content: 'Betanzos Arquitecto | Contáctanos en Morelia',
            vmid: 'og:title'
          }
        ]
      }
    }
  }
</script>

<style></style>
