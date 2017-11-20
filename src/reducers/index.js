import { combineReducers } from 'redux';

// User Reducers //
import UserTheme from './reducer_usertheme';

export default combineReducers({
  user: combineReducers({
    theme: UserTheme
  })
});
