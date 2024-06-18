import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BT07() {
  const color = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "changeStatus" });
  };

  return (
    <>
      <div>Chế độ: {color.reducerStatus ? "tối" : "sáng"}</div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color.reducerStatus ? "black" : "white",
          color: color.reducerStatus ? "white" : "black",
          border: "1px solid black",
        }}
      >
        <input onChange={handleClick} type="checkbox" />
        {color.reducerStatus ? "tối" : "sáng"}
      </div>
    </>
  );
}
