import {PublicUser, User} from "../data/user";

export interface LoginResponse {
    user: PublicUser;
    token: string;
}

export const loginApi = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    // Gọi tới json-server
    const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
    const users: User[] = await response.json();

    return new Promise((resolve, reject) => {
        // json-server trả về một mảng, nếu đúng email/pass thì mảng có 1 phần tử
        if (users.length > 0) {
            const user = users[0];
            const { password: _, ...publicUser } = user;

            resolve({
                user: publicUser,
                token: "real-fake-jwt-token-" + Math.random().toString(36).substr(2),
            });
        } else {
            reject("Email hoặc mật khẩu không đúng");
        }
    });
};
