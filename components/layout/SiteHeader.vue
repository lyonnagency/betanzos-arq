<template>
  <div class="menu w-100" v-scroll="handleScroll" ref="menuHeaderRef">
    <div class="my-2">
      <b-navbar
        toggleable="false"
        type="dark"
        class="justify-content-sm-start container-3 px-0"
      >
        <b-navbar-brand to="/">
          <img
            width="215"
            src="~assets/img/svg/betanzos-logo.svg"
            alt="Betanzos logo"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse">
          <menuIco></menuIco>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <div class="conta my-2">
            <div
              class="container-3 d-flex justify-content-sm-start justify-content-between pt-2"
            >
              <b-navbar-brand to="/">
                <img
                  width="215"
                  src="~assets/img/svg/betanzos-logo-w.svg"
                  alt="Betanzos logo"
                />
              </b-navbar-brand>
              <b-navbar-toggle target="nav-collapse">
                <menuIco class="close"></menuIco>
              </b-navbar-toggle>
            </div>
          </div>
          <div class="d-flex h-fit">
            <div class="col-2 social-left d-none d-md-flex">
              <a target="_blank" href="https://wa.me/5214435434844">Whatsapp</a>
              <a target="_blank" href="https://www.linkedin.com/company/betanzos-arquitectura/">Linkedin</a>
              <a target="_blank" href="https://www.instagram.com/betanzosarquitectura/">Instagram</a>
              <a target="_blank" href="https://www.facebook.com/arquitectomorelia/">Facebook</a>
            </div>
            <div class="col-12 offset-1 mt-lg-5 pt-lg-5 mt-4 d-flex flex-wrap">
              <b-navbar-nav class="col-md-4 col-lg-2 col-12 col-sm-5 menu-links h-fit">
                <b-nav-item to="/">Inicio</b-nav-item>
                <b-nav-item to="/servicios">Servicios</b-nav-item>
                <b-nav-item to="/nosotros">Nosotros</b-nav-item>
                <b-nav-item to="/proyectos">Proyectos</b-nav-item>
                <b-nav-item href="/contacto">Contacto</b-nav-item>
              </b-navbar-nav>
              <div
                class="col-sm-5 col-10 col-md-12 px-0 d-flex mt-3 mt-lg-5 text-menu-bottom fs-13 flex-column flex-md-row h-fit ff-century-g"
              >
                <div
                  class="col-8 px-0 col-md-3 col-lg-2 py-2 py-lg-0 line-float-left line-full text-white d-flex flex-wrap"
                >
                  <p class="mb-0">Móvil 443 543 4844</p>
                </div>
                <div
                  class="col-8 px-0 col-md-3 col-lg-2 py-2 py-lg-0 line-float-left line-full text-white d-flex flex-wrap"
                >
                  <p class="mb-0">contacto@betanzosarquitecto.com</p>
                </div>
                <div
                  class="col-8 px-0 col-md-4 col-lg-3 py-2 py-lg-0 line-float-left line-full text-white"
                >
                  <p class="mb-0">Morelia, Michoacán.</p>
                  <p class="mb-0">México.</p>
                </div>

                <div
                  class="col-sm-10 social-icons d-flex d-md-none mt-5 justify-content-between col-8 px-0 h-fit"
                >
                  <a target="_blank" href="https://www.facebook.com/arquitectomorelia/">
                    <facebook id="facebook" ></facebook>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/betanzosarquitectura/">
                    <instagram id="instagram" ></instagram>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/company/betanzos-arquitectura/">
                    <linkedin id="linkedin" ></linkedin>
                  </a>
                  <a target="_blank" href="https://wa.me/5214435434844">
                    <whatsapp id="whatsapp" ></whatsapp>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import facebook from '~/components/icons/facebook'
import instagram from '~/components/icons/instagram'
import linkedin from '~/components/icons/linkedin'
import whatsapp from '~/components/icons/watsIco'
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
import menuIco from '~/components/icons/menuIco'
export default {
  name: 'SiteHeader',
  components: {
    menuIco,
    facebook,
    instagram,
    linkedin,
    whatsapp
  },
  data() {
    return {
      hederHeight: 80, // this data is setted manually
      headerElement: null
    }
  },
  mounted() {
    // this.hederHeight = this.$refs.menuHeaderRef;
    this.headerElement = this.$refs.menuHeaderRef
    this.$fb.enable();
    window.addEventListener('contextmenu', function(e) {
      ///e.preventDefault();
      // alert()
    }, false)
    document.onkeydown = function KeyPress(e) {
      //e.preventDefault()
      var evtobj = e;
      if (evtobj.ctrlKey) ;
    };
  },
  methods: {
    // TODO
    // Add an remove the active class using the state of the button navbar-toggle from bootstrap
    // menuClick() {
    //   if (this.headerElement.classList.contains('active-menu')) {
    //     setTimeout(() => {
    //       this.headerElement.classList.remove('active-menu')
    //     }, 300)
    //   } else {
    //     setTimeout(() => {
    //       this.headerElement.classList.add('active-menu')
    //     }, 100)
    //   }
    // },
    handleScroll(evt, el) {
      if (
        window.scrollY > this.hederHeight &&
        !this.headerElement.classList.contains('menu-white')
      ) {
        this.headerElement.classList.add('menu-white')
      } else if (
        window.scrollY < this.hederHeight &&
        this.headerElement.classList.contains('menu-white')
      ) {
        this.headerElement.classList.remove('menu-white')
      }
    }
  }
}
</script>

<style></style>
