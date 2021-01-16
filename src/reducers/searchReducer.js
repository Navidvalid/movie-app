const initialState = {
  search: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_MOVIES':
      return {
        ...state,
        search: action.payload.search,
      };

    case 'GET_SEARCH_CLEAR':
      return {
        ...state,
        search: [],
      };

    default:
      return { ...state };
  }
};

export default searchReducer;
