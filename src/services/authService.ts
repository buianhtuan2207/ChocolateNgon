import { PublicUser, User } from "../data/user";
import Data from "../data/db.json";

export interface LoginResponse {
    user: PublicUser;
    token: string;
}

export const loginApi = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    // Giả lập độ trễ server 1 giây
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Lấy danh sách users từ file json
            const users = Data.users as User[];

            // Tìm user có email và password khớp
            const foundUser = users.find(u => u.email === email && u.password === password);

            if (foundUser) {
                // Tách password ra khỏi object trả về để bảo mật
                const { password: _, ...publicUser } = foundUser;

                resolve({
                    user: publicUser,
                    token: "real-fake-jwt-token-" + Math.random().toString(36).substr(2),
                });
            } else {
                reject("Email hoặc mật khẩu không đúng");
            }
        }, 1000);
    });
};