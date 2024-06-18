import { useDispatch, useSelector } from "react-redux";

export default function BT04() {
  const count: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({ type: "increase" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <div>
      Count: {count.reducerCount}
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button>
    </div>
  );
}
