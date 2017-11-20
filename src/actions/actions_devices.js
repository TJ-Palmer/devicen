import axios from 'axios';

export function fetchDevice(id) {
  return (dispatch) => {
    dispatch({type: 'FETCH_DEVICE'});

    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => {
        dispatch({type: 'FETCH_DEVICE:SUCCESS', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_DEVICE:FAILED', payload: err})
      });
  };
}
