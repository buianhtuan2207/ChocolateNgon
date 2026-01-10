import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Product } from '../data/products';
import { CartItemType } from '../data/cart';
import { useAuth } from './AuthContext';
import Toast, { ToastType } from '../components/Toast/Toast';

interface ToastState {
    show: boolean;
    message: string;
    type: ToastType;
}

interface CartContextType {
    cartItems: CartItemType[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    toggleItemSelection: (id: number) => void; // <--- 1. Thêm định nghĩa hàm này
    totalItems: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);
    const [toast, setToast] = useState<ToastState | null>(null);

    // Load giỏ hàng từ localStorage
    useEffect(() => {
        if (user) {
            const savedCart = localStorage.getItem(`cart_${user.id}`);
            if (savedCart) setCartItems(JSON.parse(savedCart));
            else setCartItems([]);
        } else {
            setCartItems([]);
        }
    }, [user]);

    // Lưu giỏ hàng
    useEffect(() => {
        if (user) {
            localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartItems));
        }
    }, [cartItems, user]);

    const showToast = (message: string, type: ToastType = 'success') => {
        setToast({ show: true, message, type });
    };

    const addToCart = (product: Product) => {
        if (!user) {
            showToast("Vui lòng đăng nhập để mua hàng!", "error");
            return;
        }

        setCartItems(prev => {
            const existingItem = prev.find(item => item.productId === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.productId === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                const newItem: CartItemType = {
                    id: Date.now(),
                    productId: product.id,
                    title: product.title,
                    subtitle: product.subtitle,
                    image: product.image,
                    price: product.discountPrice || product.price,
                    quantity: 1,
                    isSelected: true // Mặc định chọn khi mới thêm
                };
                return [...prev, newItem];
            }
        });
        showToast(`Đã thêm "${product.title}" vào giỏ hàng!`, 'success');
    };

    const removeFromCart = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    // 2. Implement hàm toggle selection
    const toggleItemSelection = (id: number) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, isSelected: !item.isSelected } : item
        ));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            toggleItemSelection, // <--- 3. Export hàm ra Provider
            totalItems
        }}>
            {children}
            {toast && toast.show && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};