const initialState = "Rikkei Academy";

const reducerText = (state = initialState, action: any) => {
  switch (action.type) {
    case "change":
      return state === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy";
    default:
      return state;
  }
};

export default reducerText;
