
// 1. Kiểu dữ liệu đầy đủ cho User Profile (dùng cho trang Profile)
export interface UserProfile {
    id: number;
    username: string;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    gender: 'male' | 'female' | 'other';
    birthDay: number;
    birthMonth: number;
    birthYear: number;
    avatar: string;
    rank: string;
}

// 2. Kiểu dữ liệu đơn giản cho Login (dùng để check đăng nhập)
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export type PublicUser = Omit<User, "password">;

// 3. Dữ liệu User mẫu (MOCK_USER) - Dùng để test khi login thành công
export const MOCK_USER: UserProfile = {
    id: 1,
    username: "nhattruong257",
    fullName: "Trần Nhật Trường",
    email: "nhattruong@gmail.com",
    phone: "0912 345 678",
    address: "12 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
    gender: "female",
    birthDay: 15,
    birthMonth: 8,
    birthYear: 1995,
    avatar: "",
    rank: "Thành viên vàng"
};

// 4. Danh sách tài khoản mẫu (dùng để check username/pass ở trang Login)
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