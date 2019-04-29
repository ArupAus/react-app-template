/* eslint-disable import/prefer-default-export */
export const setText = text => dispatch => {
  dispatch({
    type: 'SET_TEXT',
    text,
  })
}
