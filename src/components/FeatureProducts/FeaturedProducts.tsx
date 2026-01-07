import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./featureProducts.scss";
import { Product } from "../../data/products"; // Chỉ giữ lại interface

const FeaturedProducts = ({ title = "Sản phẩm nổi bật", limit = 8, centerTitle = true }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/products?_limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [limit]);

    return (
        <section className="featured-products py-5">
            <h2 className={centerTitle ? "text-center" : ""}>{title}</h2>
            {loading ? <div>Đang tải...</div> : <CardProduct data={products} />}
        </section>
    );
};
export default FeaturedProducts;