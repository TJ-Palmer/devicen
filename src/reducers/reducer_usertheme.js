const defaultState = {
  color: '#222',
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_THEME:SUCCESS' : {
      return {
        ...state,
        color: action.payload,
      };
    }
    default : {
      return state;
    }
  }
}
