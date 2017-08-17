import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('rentals');
    // when go to www.url.com/ it will reroute to go to www.url.com/rentals
  }
});
