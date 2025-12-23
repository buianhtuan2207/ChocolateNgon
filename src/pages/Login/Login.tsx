import React, { useState } from "react";
import InputField from "../../components/InputField/inputField";
import { Mail, Eye } from "lucide-react";
import Button from "../../components/Button/Button";
import "./login.scss";
import Icon from "../../components/Icons/Icon";
import { USERS } from "../../data/user";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            setError("Vui lòng nhập đầy đủ email và mật khẩu");
            return;
        }

        const user = USERS.find(
            (u) => u.email === form.email && u.password === form.password
        );

        if (!user) {
            setError("Email hoặc mật khẩu không đúng");
            return;
        }

        //  Không lưu password
        const { password, ...safeUser } = user;

        localStorage.setItem("user", JSON.stringify(safeUser));
        console.log("Login thành công:", safeUser);

        // Redirect sau khi login thành công
        window.location.href = "/";
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h2 className="title">Đăng nhập</h2>
                <p className="subtitle">
                    Chào mừng trở lại. Vui lòng nhập thông tin của bạn.
                </p>

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

                    {error && <p className="error-text">{error}</p>}

                    <div className="options">
                        <label className="remember">
                            <input type="checkbox" />
                            Ghi nhớ tôi
                        </label>

                        <Button variant="text" href="/forgot-password">
                            quên mật khẩu
                        </Button>
                    </div>

                    <Button
                        className="login-submit-btn"
                        variant="large"
                        size="small"
                        onClick={handleSubmit}
                        href
                    >
                        Đăng Nhập
                    </Button>
                </form>

                <div className="divider">
                    <span>HOẶC TIẾP TỤC VỚI</span>
                </div>

                <div className="social">
                    <Icon icon="google" className="icons" />
                    <Icon icon="facebook" className="icons" />
                </div>

                <p className="register">
                    Chưa có tài khoản? <span>Đăng ký ngay</span>
                </p>
            </div>
        </div>
    );
}
