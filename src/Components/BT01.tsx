import { useDispatch, useSelector } from "react-redux";

export default function BT01() {
  const profile: any = useSelector((state) => {
    return state;
  });
  return (
    <div>
      <h4>Thông tin cá nhân</h4>
      <ul style={{ listStyle: "none" }}>
        <li>ID: {profile.reducerProfile[0].id}</li>
        <li>Họ và tên: {profile.reducerProfile[0].name}</li>
        <li>
          Giới tính:{" "}
          {profile.reducerProfile[0].gender === "Male" ? "Nam" : "Nữ"}
        </li>
        <li>Ngày sinh: {profile.reducerProfile[0].age}</li>
        <li>Địa chỉ: {profile.reducerProfile[0].address}</li>
      </ul>
    </div>
  );
}
