import { useDispatch, useSelector } from "react-redux";

export default function BT05() {
  const random: any = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const handleRandom = () => {
    dispatch({ type: "random" });
  };
  return (
    <div>
      <h4>[{random.reducerRandom}]</h4>
      <button onClick={handleRandom}>Lucky Number</button>
    </div>
  );
}
