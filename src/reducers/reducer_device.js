const defaultState = {
  state: {
    fetching: false,
    fetched: false,
    error: null,
  },
  info: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_DEVICE' : {
      return {
        ...state,
        state: {
          ...state.state,
          fetching: true,
          fetched: false
        }
      };
    }
    case 'FETCH_DEVICE:SUCCESS' : {
      return {
        ...state,
        info: action.payload,
        state: {
          ...state.state,
          fetching: false,
          fetched: true
        }
      };
    }
    case 'FETCH_DEVICE:FAILED' : {
      return {
        ...state,
        state: {
          ...state.state,
          fetching: false,
          fetched: false,
          error: action.payload
        }
      };
    }
    default : {
      return state;
    }
  }
}
