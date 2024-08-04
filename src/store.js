import { createStore, combineReducers } from 'redux';
import formReducer from './formReducer';

// Combine reducers (for future scalability)
const rootReducer = combineReducers({
  form: formReducer,
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
