<template>
  <div class="img-big-right">
    <img class="img-fluid" :src="require('~/assets/img/'+source)" alt=""/>
    <div class="title-img ff-century-g fs-13 text-blue">
      {{title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImgRightSimple',
    props: {
      source: {
        type: String,
        default: 'images/foto-obra-casa-h-lourdes11.jpg'
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style></style>
