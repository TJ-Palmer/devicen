export function updateTheme(color) {
 return (dispatch) => {
   dispatch({type: 'UPDATE_THEME:SUCCESS', payload: color})
 };
}
