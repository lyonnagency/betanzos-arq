<template>
  <div class="img-card-left ">
    <img
      class="img-fluid"
      :src="require('~/assets/img/images/' + img)"
      alt=""
    />
    <div class="title-img ff-century-g fs-13 text-blue">
      {{title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImgLeftBorder',
    props: {
      img: {
        type: String,
        default: 'proy-1-10.jpg'
      },
      title: {
        type: String,
        default: 'Cassa Brissew'
      }
    }
  }
</script>

<style></style>
