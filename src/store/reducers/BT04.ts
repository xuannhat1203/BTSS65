const initialCount: number = 0;
const reducerCount = (state = initialCount, action: any) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};
export default reducerCount;
