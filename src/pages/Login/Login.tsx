import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate
import InputField from "../../components/InputField/inputField";
import { Mail, Eye } from "lucide-react";
import Button from "../../components/Button/Button";
import "./login.scss";
import Icon from "../../components/Icons/Icon";
import { useAuth } from "../../context/AuthContext"; // Import hook
import { fakeLoginApi } from "../../services/authService"; // Giả sử bạn để fakeApi ở đây

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const { login } = useAuth(); // Lấy hàm login từ Context
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!form.email || !form.password) {
            setError("Vui lòng nhập đầy đủ email và mật khẩu");
            return;
        }

        setLoading(true);
        try {
            // Gọi API giả lập
            const response = await fakeLoginApi(form.email, form.password);

            // Cập nhật vào Context (bao gồm user và token)
            login(response);

            console.log("Login thành công:", response.user);

            // Chuyển hướng trang dùng navigate để không reload web
            navigate("/");
        } catch (err: any) {
            setError(err || "Email hoặc mật khẩu không đúng");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h2 className="title">Đăng nhập</h2>
                <p className="subtitle">Chào mừng trở lại. Vui lòng nhập thông tin của bạn.</p>

                <form className="inputGroup" onSubmit={handleSubmit}>
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        value={form.email}
                        onChange={handleChange}
                        icon={Mail}
                        error={!!error}
                    />

                    <InputField
                        label="Mật khẩu"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={form.password}
                        onChange={handleChange}
                        icon={Eye}
                        error={!!error}
                    />

                    {error && <p className="error-text" style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

                    <div className="options">
                        <label className="remember">
                            <input type="checkbox" /> Ghi nhớ tôi
                        </label>
                        <Button variant="text" href="/forgot-password">Quên mật khẩu</Button>
                    </div>

                    <Button
                        className="login-submit-btn"
                        variant="large"
                        size="small"
                        type="submit" // Đảm bảo button type là submit
                        disabled={loading}
                    >
                        Đăng nhập
                    </Button>
                </form>

                <div className="divider"><span>HOẶC TIẾP TỤC VỚI</span></div>
                <div className="social">
                    <Icon icon="google" className="icons" />
                    <Icon icon="facebook" className="icons" />
                </div>
                <p className="register">Chưa có tài khoản? <span>Đăng ký ngay</span></p>
            </div>
        </div>
    );
}