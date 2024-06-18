const listJob: any = [
  {
    id: 1,
    nameJob: "Xây dựng thanh Header",
    level: 1,
  },
  {
    id: 2,
    nameJob: "Xây dựng thanh Menu",
    level: 2,
  },
  {
    id: 3,
    nameJob: "Fix lỗi đăng nhập",
    level: 3,
  },
  {
    id: 4,
    nameJob: "ĐI chơi",
    level: 4,
  },
];

const reducerJobs = (state = listJob, action: any) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "Delete":
      return state.filter((item: any) => item.id !== action.payload);
    case "Edit":
      return state.map((item: any) =>
        item.id === action.payload.id
          ? { ...item, nameJob: action.payload.nameJob }
          : item
      );
    default:
      return state;
  }
};

export default reducerJobs;
