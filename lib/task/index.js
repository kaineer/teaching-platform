// lib/task/index.js

export class Task {
  constructor() {
    this.parts = {};
  }

  have(name) {
    return this.parts.hasOwnProperty(name);
  }

  part(name) {
    return this.parts[name];
  }

  addPart(name, type, content) {
    this.parts[name] = content;
  }
}