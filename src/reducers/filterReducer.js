import { UPDATE_FILTER } from '../constants/index';

const initialState = {
  filters: {
    OW: { name: 'Oneworld', status: false },
    ST: { name: 'Sky Team', status: false },
    SA: { name: 'Star Alliance', status: false },
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.id]: {
            ...state.filters[action.payload.id],
            status: action.payload.status,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
