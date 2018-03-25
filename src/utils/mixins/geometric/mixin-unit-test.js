import EmberObject from '@ember/object';
import GeometricMixin from "labs-zola/src/utils/mixins/geometric/mixin";
import { module, test } from 'qunit';

module('Unit | Mixin | geometric');

// Replace this with your real tests.
test('it works', function(assert) {
  let GeometricObject = EmberObject.extend(GeometricMixin);
  let subject = GeometricObject.create();
  assert.ok(subject);
});
