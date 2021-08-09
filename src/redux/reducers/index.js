import { combineReducers } from 'redux';
import toDoListReducer from './toDoList.reducer'

export default combineReducers({
  toDoListReducer: toDoListReducer
})