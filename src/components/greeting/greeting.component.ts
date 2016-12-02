import { Component, Vue } from 'av-ts';

@Component
export default class Greeting extends Vue {
  name: string = 'world';

  get englishGreeting(): string {
    return `Hello ${this.name}`;
  }

  get spanishGreeting(): string {
    return `Hola ${this.name}`;
  }
};
