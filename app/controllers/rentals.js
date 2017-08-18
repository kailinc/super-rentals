import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    // function to filter by city
    filterByCity(param) {
      if (param !== '') {
        // finds the rental by city: param
        // param is input value
        return this.get('store').query('rental', { city: param });
      } else {
        // return all if nothing is passed in
        return this.get('store').findAll('rental');
      }
    }
  }
});
