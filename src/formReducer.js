import { UPDATE_FIELD, RESET_FORM } from './formActions';

// Initial State
const initialState = {
  name: '',
  email: '',
  password: '',
};

// Reducer
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

export default formReducer;
