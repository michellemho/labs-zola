import EmberObject from '@ember/object';
import UpdateSelectionMixin from "labs-zola/src/utils/mixins/update-selection/mixin";
import { module, test } from 'qunit';

module('Unit | Mixin | update selection');

// Replace this with your real tests.
test('it works', function(assert) {
  let UpdateSelectionObject = EmberObject.extend(UpdateSelectionMixin);
  let subject = UpdateSelectionObject.create();
  assert.ok(subject);
});
