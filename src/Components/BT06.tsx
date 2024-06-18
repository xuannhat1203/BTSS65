import { useDispatch, useSelector } from "react-redux";

export default function BT06() {
  const text: any = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch({ type: "change" });
  };
  return (
    <div>
      <h4>{text.reducerText}</h4>
      <button onClick={handleChange}>Change State</button>
    </div>
  );
}
