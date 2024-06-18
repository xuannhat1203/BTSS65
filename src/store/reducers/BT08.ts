const initialState = false;

const reducerStatus = (state = initialState, action: any) => {
  switch (action.type) {
    case "changeStatus":
      return !state;
    default:
      return state;
  }
};

export default reducerStatus;
