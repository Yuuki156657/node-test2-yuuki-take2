import { combineReducers } from 'redux';
// import todos from './todos';

import formData from './formData';


export default combineReducers({
  formDataReducer: formData,
});