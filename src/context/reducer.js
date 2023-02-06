export const initialState = {
  user: null,
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload?.email || null,
      };
    default:
      return state;
  }
};

export default reducer;
