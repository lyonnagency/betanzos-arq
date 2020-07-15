import Vue from 'vue';

const MyPlugin={};

MyPlugin.install = function (Vue, options) {
// 1. add global method or property
  Vue.myGlobalMethod = function(){
    alert();
  }
// 2. add a global asset
  Vue.directive('my-directive', {})
// 3. add an instance method
  Vue.prototype.$myMethod =  function() {
    alert();
  }
}

Vue.use(MyPlugin);


