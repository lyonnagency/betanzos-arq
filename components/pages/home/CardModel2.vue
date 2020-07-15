<template>
  <div class="card-text-model-2 mt-5">
    <h3 class="title-model-1 fs-20">
      <span class="first">{{ titleFirst }}</span>
      <span class="dash">{{ titleDash }}</span>
    </h3>
    <p class="ff-ginora fw-200 fs-14 mt-5">
      {{ bodyText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardModel2',
  props: {
    titleFirst: {
      type: String,
      default: 'Presupuestos'
    },
    titleDash: {
      type: String,
      default: 'Personalizados'
    },
    bodyText: {
      type: String,
      default:
         `Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
         sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi `
    }
  }
}
</script>

<style></style>
