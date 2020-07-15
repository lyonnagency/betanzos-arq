export const modalMix = {
  data() {
    return {
      imageInModal:''
    }
  },
  methods: {
    showModal(imageName) {
      this.imageInModal = require('~/assets/img/images/' + imageName);
      this.$refs['my-modal'].show();
    },
  },
};
