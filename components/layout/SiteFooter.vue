<template>
  <footer class="py-5 bg-blue">
    <div class="container-3 pr-lg-5">
      <div class="py-lg-5 py-4 d-flex flex-wrap px-4 px-lg-0">
        <div class="col-md-8 col-xl-4 px-3">
          <h2 class="ff-century-g text-white traking-200 fs-25">
            PLATIQUEMOS SIN — COMPROMISO
          </h2>
        </div>
        <div
          class="px-0 col-sm-12 col-xl-7 offset-xl-1 d-flex justify-content-xl-end justify-content-center justify-content-sm-start pr-lg-5 flex-wrap mt-4 mt-xl-0">
          <a
            target="_blank"
            href="mailto:contacto@betanzosarquitecto.com"
            class="mx-sm-2 my-2 my-lg-0 btn-base btn-transparent btn-default-size d-flex align-items-center justify-content-center btn-footer"
          >
            <mailIco width="17" class="mr-2"></mailIco>
            Enviar email
          </a>
          <a
            href="https://wa.me/5214435434844"
            target="_blank"
            class="ml-sm-2 my-2 my-lg-0 btn-base btn-wats btn-default-size d-flex align-items-center justify-content-center"
          >
            <watsIco width="17" class="mr-2"></watsIco>
            Hablar por Whatsapp
          </a>
        </div>
      </div>
      <div class="py-lg-5 py-sm-3 spacer"></div>

      <div class="py-lg-5 py-3 content-footer">
        <div class="col-sm-6 col-md-5 col-lg-4 px-4 pl-lg-3">
          <img
            class="img-fluid"
            src="~assets/img/svg/logo-betanzos-footer.svg"
            alt="Betanzos Arquitectos"
          />
        </div>
      </div>
      <div class="py-lg-5 py-3 d-flex content-footer flex-wrap">
        <div class="col-lg-4 col-sm-4 col-md-5 px-4 py-2 py-lg-0 pl-lg-3">
          <div class="model-footer card-text-line-left">
            <p class="text-justify ff-ginora fw-light">
              Betanzos Arquitecto te ofrece el mejor servicio de diseño arquitectónico. Aseguramos la mejor calidad en
              todos nuestros servicios gracias a nuestra amplia experiencia. Creamos diseños para
              construir espacios que generen un gran impacto personal y social, en donde se vivan los mejores momentos
              en ambientes únicos. Elige a los profesionales adecuados para tu proyecto de construcción. Estamos
              ubicados en la ciudad de Morelia Michoacán.
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-sm-4 px-4 px-xl-5 py-2 py-lg-0">
          <div class="model-footer card-text-line-left">
            <p>Móvil 443 543 4844 </p>
            <p>contacto@betanzosarquitecto.com</p>
            <p>operaciones@betanzosarquitecto.com</p>
            <p>facturas@betanzosarquitecto.com</p>
            <p> Morelia, Mich. México</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4 col-md-3 px-4 px-lg-5 py-2 py-lg-0">
          <div class="card-text-line-left model-footer">
            <ul class="menu-footer">
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/servicios">Servicios</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/nosotros">Nosotros</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/proyectos">Proyectos</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contacto">Contacto</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container-3">
      <div class="pt-5 bottom-footer">
        <div
          class=" d-flex justify-content-between align-items-center text-white opacity-08 col-12 flex-wrap"
        >
          <span class="col-sm-auto col-12 text-center">
            Betanzos Arquitectura Integral © 2020.
            <nuxt-link class="ml-sm-3 ml-1" to="/aviso-privacidad">Aviso de privacidad</nuxt-link>
          </span>
          <a href="https://lyonn.co" target="_blank"
             class="ff-century-g fw-light col-sm-auto col-12 text-center mt-3 mt-sm-0"
          >
            <lyonnIco width="20"></lyonnIco>
            from lyonn with
            <heartIco width="20"></heartIco
            >
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

  import CardtextLineLeft from '~/components/commons/CardtextLineLeft'
  import mailIco from '~/components/icons/emailIco'
  import watsIco from '~/components/icons/watsIco'
  import lyonnIco from '~/components/icons/lyonnIco'
  import heartIco from '~/components/icons/heartIco'

  export default {
    name: 'SiteFooter',
    components: {
      CardtextLineLeft,
      watsIco,
      mailIco,
      lyonnIco,
      heartIco
    },
    data() {
      return {
        footerElement: null
      }
    },
    mounted() {
      this.footerElement = this.$refs.footer;
    },
    methods: {
      handleScroll(evt, el) {
        // if (
        //   window.scrollY > this.hederHeight &&
        //   !this.headerElement.classList.contains('menu-white')
        // ) {
        //   this.headerElement.classList.add('menu-white')
        // } else if (
        //   window.scrollY < this.hederHeight &&
        //   this.headerElement.classList.contains('menu-white')
        // ) {
        //   this.headerElement.classList.remove('menu-white')
        // }
        console.log(this.$refs)
      }
    }
  }
</script>

<style></style>
