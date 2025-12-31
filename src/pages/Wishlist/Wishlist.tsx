import React from "react";
import {PRODUCTS} from "../../data/products";
import CardProduct from "../../components/CardProduct/CardProduct";
import Button from "../../components/Button/Button";
import "./wishlist.scss"


const Wishlist: React.FC = () => {
    // Lọc sản phẩm yêu thích
    const wishlistProducts = PRODUCTS.filter(p => p.isWish);

    return (
        <div className="container py-4">
            <div className="wishlist-header text-center">
                <span className="wishlist-subtitle">BỘ SƯU TẬP CÁ NHÂN</span>

                <h1 className="wishlist-title">
                    Danh sách yêu thích
                </h1>

                <p className="wishlist-desc">
                    Lưu giữ những hương vị tuyệt vời nhất mà bạn mong<br />
                    muốn thưởng thức.
                </p>
            </div>
            {wishlistProducts.length > 0 ? (
                <CardProduct
                    data={wishlistProducts}
                    buttonText="Mua ngay"
                    buttonLink="/cart"
                />
            ) : (
                <p>Bạn chưa có sản phẩm yêu thích nào.</p>
            )}
            <div className="wishlist-footer text-center">
                <Button
                    className="continue-btn"
                    href
                >
                     TIẾP TỤC MUA SẮM
                </Button>

                <p className="help-text">
                    Bạn cần giúp đỡ? <a href="/contact">Liên hệ với chúng tôi</a>
                </p>
            </div>
        </div>
    );
}
export default Wishlist;