// test/utils/parser-test.js

const content = {
  emptyLesson: `
--- form

--- ast-check

  `,
  nonEmptyLesson: `
--- form
hello
--- ast-check
check that
  `
};

import { parser } from '../..';
import { expect } from 'chai';

describe('parser', () => {
  it('should be an object', () => {
    expect(parser).to.be.an('object');
  });

  context('when empty content is parsed', () => {
    let task;

    beforeEach(function() {
      task = parser.parse(content.emptyLesson);
    });

    it('should have form content', function() {
      expect(task.have('form')).to.be.ok;
      expect(typeof (task.part('form'))).to.eq('string');
      expect(task.part('form').trim()).to.eq('');
    });

    it('should not have fuel content', function() {
      expect(task.have('fuel')).to.not.be.ok;
    });
  });

  context('when some content included', () => {
    let task;

    beforeEach(() => {
      task = parser.parse(content.nonEmptyLesson);
    });

    it('should have form and ast-check content', () => {
      expect(task.have('form')).to.be.ok;
      expect(task.have('ast-check')).to.be.ok;
    });

    it('should have content from file', () => {
      expect(task.part('form')).to.include('hello');
      expect(task.part('ast-check')).to.include('check that');
    });
  });
});