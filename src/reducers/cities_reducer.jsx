import cities from '../cities';

export default function(state = null, action) {
  switch (action.type) {
    case 'CITY_SELECTED':
      return state;
    default:
      return cities;
  }
}
