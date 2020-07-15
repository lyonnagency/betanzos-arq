<template>
  <div class="img-card-right">
    <img
      class="img-fluid"
      :src="require('~/assets/img/images/' + img)"
      alt=""
    />
    <div class="title-img ff-century-g fs-13 text-blue">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgRightBorder',
  props: {
    img: {
      type: String,
      default: 'proy-2-11.jpg'
    },
    title: {
      type: String,
      default: 'Cassa Brisse 2'
    }
  },
}
</script>

<style></style>
