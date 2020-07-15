export const mix = {
  data() {
    return {
      footerElement: null,
      totalh: 0,
      heightFoot: 0,
      footerStart: 0,
      menuOnFooter: false,
      menuOnHero: true,
    }
  },
  methods: {
    handleScroll(evt, el) {
      // console.log(window.scrollY > 200);
      // console.log(window.scrollY <= this.menuLimit);
      // console.log(this.menuOnHero);
      if (window.scrollY >= this.menuLimit && this.menuOnFooter === false) { // if the scroll is on the footer
        // alert('case 2');
        this.menuOnFooter = true;
        this.menuOnHero = false;
        this.menuElement.classList.add('text-white');
        this.menuElement.classList.add('opacity-1');
      }
      // else if (window.scrollY < (this.menuLimit)) {

      else if (window.scrollY > 100 && window.scrollY <= this.menuLimit) {
        this.menuOnFooter = false;
        this.menuOnHero = false;
        this.menuElement.classList.remove('opacity-1');
        this.menuElement.classList.add('opacity-0');
      }
      else if (window.scrollY < 100 && this.menuOnHero!==true) {
        // alert('case 3');
        this.menuOnFooter = false;
        this.menuOnHero = true;
        this.menuElement.classList.remove('text-white');
        this.menuElement.classList.add('opacity-1');
      }
    }
  },
  mounted() {
    // wait 200 mil. secs till all the images are loaded in the gallery page
    setTimeout(()=>{
      let clientScreenSize= screen.height;
      this.footerElement = this.$refs.footer;
      // console.log(this.$refs);
      this.menuElement = this.$refs.myMenu;
      this.totalh = document.documentElement.getBoundingClientRect().height;
      // console.log(this.totalh);
      this.heightFoot = this.footerElement.$el.offsetHeight;
      // console.log(this.heightFoot);
      this.menuLimit = this.totalh - (this.heightFoot+ clientScreenSize - (this.$refs.myMenu.offsetHeight/1.5))
    },300);
  }
};
