import { moduleFor, test } from 'ember-qunit';

moduleFor('route:zoning-district', 'Unit | Route | zoning-district', {
  // Specify the other units that are required for this test.
  needs: ['service:main-map', 'service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
