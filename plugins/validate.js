import es from 'vee-validate/dist/locale/es.json';
import { required, email, regex, alpha_spaces } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import Vue from 'vue';
import { ValidationProvider, ValidationObserver} from 'vee-validate';
// // loop over all rules
// for (let rule in rules) {
//   // add the rule
//   extend(rule,
//     {
//       ...rules[rule],
//       message: es.messages[rule]
//     }
//   );
// }


// Override the default message.
extend('email', {
  ...email,
  message: es.messages['email']
});
extend('required', {
  ...required,
  message: es.messages['required']
});
extend('regex', {
  ...regex,
  message: es.messages['regex']
});
extend('alpha_spaces', {
  ...alpha_spaces,
  message: es.messages['alpha_spaces']
});
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
