import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
  // do this to avoid conflict with mirage when going to /rentals
});
