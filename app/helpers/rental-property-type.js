import Ember from 'ember';

// determine if model is stand alone or part of a community

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]/*, hash*/) {
  if (communityPropertyTypes.includes(type)) {
    return 'Community';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
