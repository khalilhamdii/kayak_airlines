import { ADD_COMPANIES, UPDATE_FILTER } from '../constants';

export const addCompanies = (companies) => ({
  type: ADD_COMPANIES,
  payload: { companies },
});

export const updateFilter = (filter) => ({
  type: UPDATE_FILTER,
  payload: filter,
});
