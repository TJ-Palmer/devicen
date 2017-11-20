import { combineReducers } from 'redux';

// User Reducers //
import UserTheme from './reducer_usertheme';

// Devices Reducers //
import Device from './reducer_device';

export default combineReducers({
  user: combineReducers({
    theme: UserTheme,
    device: Device
  })
});
