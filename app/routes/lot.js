import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import bblDemux from '../utils/bbl-demux';
import notifyAfterLoad from '../utils/notify-after-load';
import { computed } from 'ember-decorators/object'; // eslint-disable-line
import updateSelectionMixin from '../mixins/update-selection';

// convert 'R6A' to 'r6'
const getPrimaryZone = zonedist => zonedist.match(/\w\d*/)[0].toLowerCase();

export default Route.extend(updateSelectionMixin, {
  mainMap: service(),

  model(params) {
    const id = bblDemux(params);
    return notifyAfterLoad({
      taskInstance: this.store.findRecord('lot', id),
    }, () => {
      this.set('mainMap.shouldFitBounds', true);
    });
  },

  setupController(controller, { taskInstance }) {
    this._super(controller, taskInstance);

    controller
      .setProperties({
        model: taskInstance,
        @computed('model.value') lot() { return taskInstance.get('value'); },
        @computed('lot.zonedist1') primaryzone1(zonedist) { return getPrimaryZone(zonedist); },
        @computed('lot.zonedist2') primaryzone2(zonedist) { return getPrimaryZone(zonedist); },
        @computed('lot.zonedist3') primaryzone3(zonedist) { return getPrimaryZone(zonedist); },
        @computed('lot.zonedist4') primaryzone4(zonedist) { return getPrimaryZone(zonedist); },
      });
  },
});
