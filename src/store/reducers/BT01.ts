const user: any = [
  {
    id: 1,
    name: "Nguyễn Xuân Nhất",
    gender: "Male",
    age: "12/03/2005",
    address: "Hải Dương",
  },
];
const reducerProfile = (state = user, action: any) => {
  switch (action.type) {
    case "scan":
      return [...state];
    default:
      return state;
  }
};
export default reducerProfile;
