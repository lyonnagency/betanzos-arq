<template>
  <div class="slider-item">
    <div class="hero" :class=ClassImg>
      <div class="content-hero container-3 full-h d-flex align-items-center ">
        <div class="d-flex mb-5 pb-5 mb-sm-0 pb-sm-0">
          <div class="col-md-5 col-10">
            <h2 class="ff-century-g fw-bold text-blue traking-200 fs-42 text-uppercase">
              {{titleItem}}
            </h2>
            <div class="d-flex align-items-center mt-4">
              <nuxt-link :to="linkBtn" class="btn-base px-4">{{textBtn}}</nuxt-link>
              <div class="slider-controls ml-4 d-none d-lg-flex">
                <div id="prev" class="prev mx-3" @click="eventHandler"></div>
                <div id="next" class="next mx-3" @click="eventHandler"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'HeroItemSlider',
  props:{
    titleItem:{
      type:String,
      default:'ARQUITECTURA INSPIRADA EN TÍ.'
    },
    ClassImg:{
      type:String,
      default:''
    },
    linkBtn:{
      type: String,
      default: '/contacto'
    },
    textBtn:{
      type: String,
      default: ''
    }
  },
  methods:{
    eventHandler(e){
      console.log(e);
      let Id = e.target.id;
      this.$emit('click', Id)
    },
  }
}
</script>

<style></style>
