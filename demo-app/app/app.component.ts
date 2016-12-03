import { Component, Vue } from 'av-ts';

const Greeting = require('../../src/components/greeting/index.vue');

@Component({
  components: {
    Greeting
  }
})
export default class App extends Vue {
};
