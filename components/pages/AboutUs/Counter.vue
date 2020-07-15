<template>
  <section class="d-flex justify-content-center" v-scroll="ScrollCounter">
    <div class="d-flex justify-content-start justify-content-lg-center flex-wrap col-md-10 col-lg-12 px-xl-5">
      <div
        class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue line-border-righ d-flex justify-content-center line-border-right px-0 mt-4 mt-lg-0"
      >
        <div class="col-8">
          <p class="text-orange fs-55">+{{counters['clients']}}</p>
          <h2 class="fs-16">Clientes satisfechos</h2>
        </div>
      </div>
      <div
        class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue line-border-righ d-flex justify-content-center line-border-right px-0 mt-4 mt-lg-0"
      >
        <div class="col-8">
          <p class="fs-55">{{counters['proyects']}}</p>
          <h2 class="fs-16">Proyectos realizados</h2>
        </div>
      </div>
      <div
        class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue line-border-righ d-flex justify-content-center line-border-right px-0 mt-4 mt-lg-0"
      >
        <div class="col-8">
          <p class="fs-55">{{counters['obras']}}</p>
          <h2 class="fs-16">Obras ejecutadas</h2>
        </div>
      </div>
      <div
        class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue line-border-righ d-flex justify-content-center line-border-right px-0 mt-4 mt-lg-0"
      >
        <div class="col-8">
          <p class="fs-55">{{counters['maintenance']}}</p>
          <h2 class="fs-16">Mantenimientos intervenidos</h2>
        </div>
      </div>
      <div
        class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue line-border-righ d-flex justify-content-center line-border-right px-0 mt-4 mt-lg-0"
      >
        <div class="col-8">
          <p class="fs-55">{{counters['models']}}</p>
          <h2 class="fs-16">Maquetas elaboradas</h2>
        </div>
      </div>
      <div
        class="col-6 col-sm-4 col-lg-2 ff-century-g text-blue line-border-righ d-flex justify-content-center px-0 mt-4 mt-lg-0"
      >
        <div class="col-8">
          <p class="fs-55">{{counters['designs']}}</p>
          <h2 class="fs-16">Diseños en proceso</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
export default {
  created() {
    Vue.directive('scroll', {
      inserted: function(el, binding) {
        let f = function(evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
            //alert('acabo')
          }
        }
        window.addEventListener('scroll', f)
      }
    })
  },
  methods: {
    ScrollCounter: function(evt, el) {
      //console.log(el.getBoundingClientRect().top)
      if (el.getBoundingClientRect().top < 450) {
        this.upgradeNumber()
        return true
      }
      //return window.scrollY > 100
    },
    upgradeNumber() {
      // Increaces the numbers

      // iterates over the object
      for (const key in this.counters) {
        let interval = false
        interval = window.setInterval(() => {
          // if the iteretor is greater than the seted on the countersTop object, clear the interval
          if (this.counters[key] + 1 >= this.countersTop[key]) {
            clearInterval(interval)
          }
          this.counters[key] += 1
        }, 100)
      }
    }
  },
  data() {
    return {
      counters: {
        clients: 0,
        proyects: 0,
        obras: 0,
        maintenance: 0,
        models: 0,
        designs:0
      },
      countersTop: {
        clients: 58,
        proyects: 61,
        obras: 14,
        maintenance: 18,
        models: 4,
        designs:7
      },
      NumCounter: [1, 2, 3, 4, 5]
      // 434 343 33 26
    }
  }
}
</script>

<style></style>
