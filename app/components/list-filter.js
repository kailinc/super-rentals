import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('')
      .then((results) => this.set('results', results));
  },

  actions: {
    // function to render the results
    handleFilterEntry() {
      // values of input search bar
      let filterInputValue = this.get('value');

      // gets the function to use for filtering
      // filter by city
      let filterAction = this.get('filter');

      // filters data based off filter value
      filterAction(filterInputValue)
        // sets results property in list to be the filtered results
        .then((filterResults) => this.set('results', filterResults));
    }
  }

});
