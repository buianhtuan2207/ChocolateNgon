import { USERS, PublicUser } from "../data/user";

export interface LoginResponse {
    user: PublicUser;
    token: string;
}

export const fakeLoginApi = (
    email: string,
    password: string
): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = USERS.find(
                (u) => u.email === email && u.password === password
            );

            if (!user) {
                reject("Email hoặc mật khẩu không đúng");
                return;
            }

            const { password: _, ...publicUser } = user;

            resolve({
                user: publicUser,
                token: "fake-jwt-token",
            });
        }, 700);
    });
};
