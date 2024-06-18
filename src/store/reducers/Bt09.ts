const initialState = {
  users: [],
};

const reducerEmail = (state = initialState, action: any) => {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default reducerEmail;
