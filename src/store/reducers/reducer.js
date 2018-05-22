const initialState = {
  score: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SCORE':
      return {
        ...state,
        score: state.score + action.val
      };

    default:
      return state;
  }
};

export default reducer;
