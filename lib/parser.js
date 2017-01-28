// lib

import { Task } from './task';

const nl = '\n';

export const parser = {
  parse: function(content) {
    const task = new Task();

    const lines = content.split(nl);

    let name;
    let partContent;

    const addNewPart = () => {
      if(name) {
        task.addPart(
          name,
          'unknown',
          partContent || ''
        );

        partContent = null;
      }
    };

    lines.forEach((line) => {
      const md = /^-{3,}\s+([-\w]+)/.exec(line);

      if(md) {
        addNewPart();

        name = md[1];
        partContent = null;
      } else {
        if(partContent === null) {
          partContent = line;
        } else {
          partContent = partContent + nl + line;
        }
      }
    });

    addNewPart();

    return task;
  }
};
