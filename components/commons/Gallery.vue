<template>
  <div class="gallery-wrap">
    <div class="d-flex flex-wrap">
      <div
        class="gallery-item"
        v-for="(item, index) in galleryItems"
        v-bind:key="index"
        @click="showModal(item)"
      >
        <img
          class="img-fluid"
          :src="require('~/assets/img/images/' + item)"
          alt=""
        />
      </div>
    </div>
    <b-modal class="modal-customized" centered size="xl" hide-footer ref="my-modal">
      <div class="text-center">
        <img class="img-fluid" :src="imageInModal" alt="" />
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data(){
    return{
      imageInModal:''
    }
  },
  props: {
    galleryItems: {
      type: Array,
      default: ['1', '2', '3', '4']
    }
  },
  methods: {
    showModal(item) {
      this.$refs['my-modal'].show();
      this.imageInModal=require('~/assets/img/images/' + item)
    }
    // },
    // ItemImage(item) {
    //   console.log(item)
    //   return require('~/assets/img/bg-1-09.jpg')
    // }
  },
  computed: {

  }
}
</script>

<style></style>
