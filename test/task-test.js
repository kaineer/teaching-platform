// test/task-test.js

import {expect} from 'chai';
import {Task} from '..';

console.log('typeof Task: ' + typeof Task);

describe('Task', () => {
  let task;

  beforeEach(function() {
    task = new Task();

    task.addPart('form', 'foo', 'abcdef');
    task.addPart('ast-check', 'bar', 'defghij');
  });

  it('should have form part', () => {
    expect(task.part('form')).to.be.ok;
  });
});