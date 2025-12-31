// Định nghĩa kiểu dữ liệu User
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export type PublicUser = Omit<User, "password">;

// Danh sách user fake
export const USERS: User[] = [
    {
        id: 1,
        name: "anhtuan",
        email: "tuan@gmail.com",
        password: "123456",
    },
    {
        id: 2,
        name: "vanan",
        email: "an@gmail.com",
        password: "123456",
    },
    {
        id: 3,
        name: "nhattruong",
        email: "nhattruong@gmail.com",
        password: "123456"
    }
];
