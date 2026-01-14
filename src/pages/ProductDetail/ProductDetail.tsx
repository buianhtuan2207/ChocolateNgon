import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Thêm useLocation

import ProductImage from '../../components/ProductImage/ProductImage';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductHighlights from '../../components/ProductHighlights/ProductHighlights';
import ProductSpecs from '../../components/ProductSpecs/ProductSpecs';
import FeaturedProducts from '../../components/FeatureProducts/FeaturedProducts';
import { useCart } from '../../context/CartContext';
import Data from '../../data/db.json';
import { Product } from '../../data/products';

import './productDetail.scss';

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const { pathname } = useLocation(); // Lấy đường dẫn hiện tại
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product | null>(null);

    // FIX: Effect riêng chuyên để Scroll lên đầu trang mỗi khi đường dẫn thay đổi
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Effect để lấy dữ liệu sản phẩm
    useEffect(() => {
        if (id) {
            const foundProduct = (Data.products as unknown as Product[]).find(p => p.id === Number(id));
            if (foundProduct) {
                setProduct(foundProduct);
            }
        }
    }, [id]);

    if (!product) return <div className="text-center py-5">Đang tải dữ liệu...</div>;

    return (
        <div className="product-detail-page bg-cream">
            <div className="container py-4">
                <div className="row g-5 mb-5 align-items-stretch top-section">
                    <div className="col-lg-6">
                        {/* Truyền mảng images, fallback về mảng chứa 1 ảnh nếu không có */}
                        <ProductImage images={product.images || [product.image]} />
                    </div>
                    <div className="col-lg-6">
                        <ProductInfo
                            product={product}
                            onAddToCart={(qty) => addToCart({ ...product, quantity: qty } as any)}
                        />
                    </div>
                </div>
            </div>

            <ProductHighlights highlights={product.highlights} />
            <ProductSpecs features={product.features} />

            <div className="bg-white py-5">
                <div className="container">
                    <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#5d4037', fontSize: '1.5rem' }}>
                        Có thể bạn sẽ thích
                    </h2>
                    {/* Component này sẽ hiển thị các sản phẩm khác, khi click vào CardProduct trong này, URL sẽ đổi và trang sẽ reload lại data + scroll lên đầu */}
                    <FeaturedProducts limit={4} centerTitle={false} />
                </div>
            </div>
        </div>
    );
}