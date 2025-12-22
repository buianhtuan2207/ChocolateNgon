import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import { PRODUCTS } from "../../data/products";
import "./style.scss";

const FeaturedProducts = ({
                              title = "Sản phẩm nổi bật",
                              limit = 8,
                              centerTitle = true
                          }) => {
    const featuredList = PRODUCTS.slice(0, limit);

    return (
        <section className="featured-products py-5">
            {title && (
                <h2 className="text">
                    {title}
                </h2>
            )}

            <CardProduct data={featuredList} />
        </section>
    );
};

export default FeaturedProducts;
