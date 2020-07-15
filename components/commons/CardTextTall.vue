<template>
  <div class="">
    <h2 class="ff-century-g text-blue text-uppercase fs-32 mb-5 text-sm-justify traking-200 pr-5 pr-sm-0">
      {{title}}
    </h2>
    <div class="body-card-text-tall" v-html="bodyHtml">

    </div>
    <nuxt-link class="title-model-2 text-right" to="/contacto#contacto">Hablar de un proyecto</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'CardTextTall',
    data() {
      return {
        bodyTall: ''
      }
    },
    props: {
      title: {
        type: String,
        default: 'Diseño de Interiores'
      },
      bodyArray: {
        type: Array,
        default:[]

      }
    },
    computed: {
      bodyHtml() {
        let body = '';
        this.bodyArray.forEach(elem => {
          body += `<p>${elem}</p>`
        });
        // body += '<a class="title-model-2 text-right" href="#">Hablar de un proyecto</a>';
        return body;
      }

    }
  }
</script>

<style></style>
