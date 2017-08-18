import Ember from 'ember';

const google = window.google;
// gest google

export default Ember.Object.extend({

  init() {
    // makes a geocoder for map location
    this.set('geocoder', new google.maps.Geocoder());
  },

  // function to createMap
  createMap(element, location) {
    // makes map object with zoom settings
    let map = new google.maps.Map(element, { scrollwheel: false, zoom: 10 });
    this.pinLocation(location, map);
    return map;
  },

  pinLocation(location, map) {
    this.get('geocoder').geocode({address: location}, (result, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        let geometry = result[0].geometry.location;
        let position = { lat: geometry.lat(), lng: geometry.lng() };
        map.setCenter(position);
        new google.maps.Marker({ position, map, title: location });
      }
    });
  }

});
