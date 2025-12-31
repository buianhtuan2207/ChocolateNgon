import { createContext, useContext, useState } from "react";
import { PublicUser } from "../data/user";

interface AuthState {
    user: PublicUser | null;
    token: string | null;
}

interface AuthContextType extends AuthState {
    login: (data: AuthState) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState<AuthState>(() => {
        const saved = localStorage.getItem("auth");
        return saved ? JSON.parse(saved) : { user: null, token: null };
    });

    const login = (data: AuthState) => {
        setAuth(data);
        localStorage.setItem("auth", JSON.stringify(data));
    };

    const logout = () => {
        setAuth({ user: null, token: null });
        localStorage.removeItem("auth");
    };

    return (
        <AuthContext.Provider value={{ ...auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;
