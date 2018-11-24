export const postComment = comment => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'POST_COMMENT', comment });
  };
};
