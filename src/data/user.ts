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
