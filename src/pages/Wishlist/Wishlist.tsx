import React from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import Button from "../../components/Button/Button";
import "./wishlist.scss"
import {useWishlist} from "../../context/WishlistContext";



const Wishlist: React.FC = () => {
    const { wishlist } = useWishlist();

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
            {wishlist.length > 0 ? (
                <CardProduct
                    data={wishlist}
                    buttonText="Mua ngay"
                    buttonLink="/cart"
                />
            ) : (
                <p>Bạn chưa có sản phẩm yêu thích nào.</p>
            )}
            <div className="wishlist-footer text-center">
                <Button
                    className="continue-btn"
                >
                     TIẾP TỤC MUA SẮM
                </Button>
            </div>
        </div>
    );
}
export default Wishlist;