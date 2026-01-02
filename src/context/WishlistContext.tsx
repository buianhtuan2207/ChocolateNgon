import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import {Product} from "../data/products";

interface WishlistContextType {
    wishlist: Product[];
    toggleWishlist: (product: Product) => void;
    isInWishlist: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();
    const [wishlist, setWishlist] = useState<Product[]>([]);

    // Load wishlist theo user
    useEffect(() => {
        if (!user) {
            setWishlist([]);
            return;
        }

        const saved = localStorage.getItem(`wishlist_${user.id}`);
        setWishlist(saved ? JSON.parse(saved) : []);
    }, [user]);

    const toggleWishlist = (product: Product) => {
        if (!user) {
            alert("Vui lòng đăng nhập");
            return;
        }

        const exists = wishlist.some(p => p.id === product.id);

        const updated = exists
            ? wishlist.filter(p => p.id !== product.id)
            : [...wishlist, product];

        setWishlist(updated);
        localStorage.setItem(
            `wishlist_${user.id}`,
            JSON.stringify(updated)
        );
    };


    const isInWishlist = (id: number) => {
        return wishlist.some(p => p.id === id);
    };

    return (
        <WishlistContext.Provider
            value={{ wishlist, toggleWishlist, isInWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext)!;
