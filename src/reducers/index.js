import { combineReducers } from 'redux';
import CitiesReducer from './cities_reducer';
import ActiveCityReducer from './active_city_reducer';

// State and reducers
const rootReducer = combineReducers({
  cities: CitiesReducer,
  activeCity: ActiveCityReducer
});


export default rootReducer;
