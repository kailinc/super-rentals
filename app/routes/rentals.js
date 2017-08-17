import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('rental');
    // sends get request to get all rentals in the Ember Store
  }
});
