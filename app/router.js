import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


// this route will map the about route handler
// loads the about.hbs template
Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals');
});

export default Router;
// makes router defined in other parts of application
