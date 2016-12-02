import * as Vue from 'vue';

const App = require('./app.component.vue');

new Vue({
  el: 'app',
  components: { App },
  render: createElement => createElement('app')
});
