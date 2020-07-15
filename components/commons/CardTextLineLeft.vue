<template>
  <div class="card-text-line-left" >
<!--    v-html="content"-->
    <p class="text-justify ff-ginora fw-light">
      {{content}}
    </p>
    <nuxt-link :to="linkTo" class="title-model-2 text-right ff-century-g">Saber más</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'CardtextLineLeft',
    props: {
      content: {
        type: String,
        default: `
          <p class="text-justify ff-ginora fw-light">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
            wisi . Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi
          </p>

          >
      `
      },
      linkTo:{
        type: String,
        default: '/servicios'
      }
    }
  }
</script>

<style></style>
