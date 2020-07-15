<template>
  <svg
    width="30"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35.6 9.44"
  >
    <title>menu</title>
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <rect class="cls-1 line-1" width="35.6" height="1" />
        <rect class="cls-1 line-2" y="8.44" width="17.8" height="1" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'menuIco'
}
</script>

<style scoped lang="scss">

  $screen-md-min: 768px;
  @mixin md {
    @media (min-width: #{$screen-md-min}) {
      @content;
    }
  }

  svg{
    width: 37px;
    @include md{
      margin-left: 20px;
      width: 50px;
    }
  }
.cls-1 {
  fill: #001d7e;
}
.close {
  .cls-1 {
    fill: #fff;
  }
  .line-1 {
    // transform: rotate(45deg) translate(-5%, -90%);
    transform: translate(-10%, 45%) rotate(45deg);
    transform-origin: center;
    width: 35px;

  }
  .line-2 {
    // transform: rotate(-45deg) translate(-25%, 90%);
    transform: translate(-10%, -25%) rotate(-45deg);
    transform-origin: center;
    width: 35px;

    // display: none;
  }
}
</style>
