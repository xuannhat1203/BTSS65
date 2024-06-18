import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const value = { email, password };
    dispatch({ type: "submit", payload: value });
    navigate("/login", { state: value });
  };

  return (
    <div>
      <div className="form-container">
        <h2>Đăng kí</h2>
        <form onSubmit={handleRegister}>
          <label>Email:</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Mật Khẩu:</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Đăng kí</button>
        </form>
        <p>
          Đã có tài khoản?{" "}
          <button onClick={() => navigate("/login")}>Đăng Nhập</button>
        </p>
      </div>
    </div>
  );
}
