import React, { useState } from "react";
import InputField from "../../components/InputField/inputField"
import {Mail, Eye} from "lucide-react";
import Button from "../../components/Button/Button";
import "./style.scss"
import Icon from "../../components/Icons/Icon";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const buttonText = "Đăng Nhập";
    const buttonLink = "/";

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h2 className="title">Đăng nhập</h2>
                <p className="subtitle">
                    Chào mừng trở lại. Vui lòng nhập thông tin của bạn.
                </p>
                <form className="inputGroup">
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        value={form.email}
                        onChange={handleChange}
                        icon={Mail}
                        error={false}
                    />

                    <InputField
                        label="Mật khẩu"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={form.password}
                        onChange={handleChange}
                        icon={Eye}
                        error={false}
                    />
                    <div className="options">
                        <label className="remember">
                            <input type="checkbox" />
                            Ghi nhớ tôi
                        </label>
                        <Button
                            variant="text"
                            size={null}
                            icons
                            href={buttonLink}>
                            quên mật khẩu
                        </Button>
                    </div>
                    <Button
                        variant="primary"
                        size="small"
                        icons
                        href={buttonLink}>
                        {buttonText}
                    </Button>
                </form>

                <div className="divider">
                    <span>HOẶC TIẾP TỤC VỚI</span>
                </div>

                <div className="social">
                    <Icon icon="google" className="icons"/>
                    <Icon icon="facebook" className="icons"/>
                </div>

                <p className="register">
                    Chưa có tài khoản? <span>Đăng ký ngay</span>
                </p>
            </div>
        </div>
    );
}
