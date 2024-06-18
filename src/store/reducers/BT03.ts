const fruit = [
  {
    id: 1,
    name: "cam sành",
    quantity: 10,
    price: 20,
  },
  {
    id: 2,
    name: "Táo",
    quantity: 20,
    price: 10,
  },
  {
    id: 3,
    name: "Lê",
    quantity: 15,
    price: 15,
  },
];
const reducerFruit = (state = fruit, action: any) => {
  return state;
};
export default reducerFruit;
