import { ADD_COMPANIES } from '../constants/index';

const initialState = {
  companies: [],
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANIES: {
      return { ...state, companies: action.payload.companies };
    }
    default:
      return state;
  }
};

export default companiesReducer;
