export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    fullName: string;
    phone: string;
    address: string;
}

export type PublicUser = Omit<User, "password">;

export const USERS: User[] = [
    {
        id: 1,
        name: "anhtuan",
        email: "tuan@gmail.com",
        password: "123456",
        fullName: "Bùi Anh Tuấn",
        phone: "0362 345 578",
        address: "Linh Trung, Thủ Đức, TP. Hồ Chí Minh",
    },
    {
        id: 2,
        name: "vanan",
        email: "an@gmail.com",
        password: "123456",
        fullName: "Nguyễn Văn An",
        phone: "0892 654 139",
        address: "Linh Xuân, Thủ Đức, TP. Hồ Chí Minh",
    },
    {
        id: 3,
        name: "nhattruong",
        email: "nhattruong@gmail.com",
        password: "123456",
        fullName: "Trần Nhật Trường",
        phone: "0987 123 578",
        address: "Linh Trung, Thủ Đức, TP. Hồ Chí Minh",
    }
];