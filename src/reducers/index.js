import { combineReducers } from 'redux';
import companiesReducer from './companiesReducer';
import filterReducer from './filterReducer';

export default combineReducers({ companiesReducer, filterReducer });
