import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login() {
  const location = useLocation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (location.state) {
      setEmail(location.state.email);
      setPassword(location.state.password);
    }
  }, [location.state]);
  const navigate = useNavigate();
  return (
    <div>
      <div className="form-container">
        <h2>Đăng Nhập</h2>
        <form>
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Mật Khẩu:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Đăng Nhập</button>
        </form>
        <p>
          Chưa có tài khoản?{" "}
          <button onClick={() => navigate("/register")}>Đăng Ký</button>
        </p>
      </div>
    </div>
  );
}
