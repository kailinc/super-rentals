import Ember from 'ember';
import MapUtil from '../utils/google-maps';

export default Ember.Service.extend({

  init() {
    // creats cachedMaps if it doesn't exist
    if (!this.get('cachedMaps')) {
      this.set('cachedMaps', Ember.Object.create());
    }
    // if mapUtil doesn't exist creates it
    if (!this.get('mapUtil')) {
      this.set('mapUtil', MapUtil.create());
    }
  },

  // defines the function to get the map
  getMapElement(location) {
    // makes it in camelCase
    let camelizedLocation = location.camelize();

    // somehow via Google API gets the map location
    let element = this.get(`cachedMaps.${camelizedLocation}`);
    if (!element) {
      element = this.createMapElement();
      this.get('mapUtil').createMap(element, location);
      this.set(`cachedMaps.${camelizedLocation}`, element);
    }
    // gives you the map
    return element;
  },
  // creates Map Element
  createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  }

});
