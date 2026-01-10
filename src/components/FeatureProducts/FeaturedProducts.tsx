import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./featureProducts.scss";
import { Product } from "../../data/products";
import Data from "../../data/db.json";

const FeaturedProducts = ({ title = "Sản phẩm nổi bật", limit = 8, centerTitle = true }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Giả lập loading
        const timer = setTimeout(() => {
            const allProducts = Data.products as unknown as Product[];
            // Cắt lấy số lượng sản phẩm theo limit
            setProducts(allProducts.slice(0, limit));
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [limit]);

    return (
        <section className="featured-products py-5">
            <h2 className={centerTitle ? "text-center" : ""}>{title}</h2>
            {loading ? (
                <div className="text-center">Đang tải sản phẩm...</div>
            ) : (
                <CardProduct data={products} />
            )}
        </section>
    );
};
export default FeaturedProducts;