import { resolve } from 'rsvp';
import { module } from 'qunit';
import startApp from "./start-app";
import destroyApp from "./destroy-app";

export const helpers = function (name, options = {}) {
  module(name, {
    beforeEach(...args) {
      this.application = startApp();
      if (options.beforeEach) {
        return options.beforeEach.apply(this, args);
      }
      return null;
    },

    afterEach(...args) {
      const afterEach = options.afterEach && options.afterEach.apply(this, args);
      return resolve(afterEach).then(() => destroyApp(this.application));
    },
  });
}
