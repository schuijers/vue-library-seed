import { Component, Vue } from 'av-ts';

import Greeting from '../../../src/components/greeting/greeting.component';

describe('The Greeting component', () => {
  let vm: Greeting;

  beforeEach(() => {
    vm = new Greeting();
  });

  it('sets the correct default data', () => {
    const defaultName = vm.name;
    chai.assert.equal(defaultName, 'world');
  });

  it('returns an English greeting', () => {
    chai.assert.equal(vm.englishGreeting, 'Hello world');
  });

  it('returns a Spanish greeting', () => {
    chai.assert.equal(vm.spanishGreeting, 'Hola world');
  });
});
