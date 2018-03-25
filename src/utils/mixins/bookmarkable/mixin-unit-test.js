import EmberObject from '@ember/object';
import BookmarkableMixin from "labs-zola/src/utils/mixins/bookmarkable/mixin";
import { module, test } from 'qunit';

module('Unit | Mixin | bookmarkable');

// Replace this with your real tests.
test('it works', function(assert) {
  let BookmarkableObject = EmberObject.extend(BookmarkableMixin);
  let subject = BookmarkableObject.create();
  assert.ok(subject);
});
