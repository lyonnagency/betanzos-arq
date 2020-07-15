<template>
  <div class="col-gallery" @click="showModal">
    <div class="img-base-wrapper">
      <img :src="require('~/assets/img/images/'+img+'.jpg')" :alt="'Betanzos Arquitectos Morelia - Proyectos'+altText" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColGallery',
  props: {
    img: {
      type: String,
      default: 'gal-2-10'
    },
    altText: {
      type: String,
      default: ''
    }
  },
  methods:{
    showModal(){
      this.$emit('click',this.img)
    }
  }
}
</script>

<style></style>
