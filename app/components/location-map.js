import Ember from 'ember';

export default Ember.Component.extend({
  maps: Ember.inject.service(),

  didInsertElement() {
    this._super(...arguments);
    // gets location from data base rental.location
    let location = this.get('location');

    // sets the mapElement
    // gets it by calling getMapElement with the location
    let mapElement = this.get('maps').getMapElement(location);

    // adds it to the div
    this.$('.map-container').append(mapElement);
  }
});
