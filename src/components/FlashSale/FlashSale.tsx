import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import { Product } from "../../data/products";
import "./flashSale.scss";

interface FlashSaleProps {
    data: Product[];
}

export default function FlashSale({ data }: FlashSaleProps) {
    return (
        <section className="flash-sale-container p-4">
            <div className="d-flex justify-content-between align-items-center mb-4 header-wrapper">
                <div className="title-group">
                    <h2 className="text-white fw-bold mb-0">
                        Flash Sale
                    </h2>
                    <p className="text-white-50 mb-0 small">Ưu đãi chớp nhoáng, số lượng có hạn!</p>
                </div>

                <div className="countdown-timer d-flex gap-2">
                    <div className="time-box">05 <small>GIỜ</small></div>
                    <span className="separator">:</span>
                    <div className="time-box">45 <small>PHÚT</small></div>
                    <span className="separator">:</span>
                    <div className="time-box">12 <small>GIÂY</small></div>
                </div>
            </div>
            <CardProduct
                data={data}
                showSaleBadge={true}
                buttonText="Mua ngay"
            />
        </section>
    );
}