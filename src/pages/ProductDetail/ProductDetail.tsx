import React from 'react';

import ProductImage from '../../components/ProductImage/ProductImage';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductHighlights from '../../components/ProductHighlights/ProductHighlights';
import ProductSpecs from '../../components/ProductSpecs/ProductSpecs';
import FeaturedProducts from '../../components/FeatureProducts/FeaturedProducts';
import { useCart } from '../../context/CartContext';

import './productDetail.scss';

export default function ProductDetail() {
    const { addToCart } = useCart();

    const product = {
        id: 1,
        title: "Socola Đen Nghệ Thuật - 70% Cacao",
        price: 450000,
        oldPrice: 650000,
        description: "Trải nghiệm hương vị tinh tế từ những hạt cacao Việt Nam chất lượng nhất. Socola đắng 70% mang đến sự cân bằng hoàn hảo giữa vị đắng nhẹ và hậu vị ngọt thanh.",
        reviewCount: 156,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCMUZOA0hEFpCjQDmfRsFsHiWvCTih0zSHJWIpoJ8tw4Lfin9jat8ee0EoOt159RLyQQJ85KH1a3jPWpcH46uU_cVJ1y4M8N7Y2LDIaZfWXBqwbWqelqtpCs3U7YvBTFuxVklcjw_GWX8Eq-WzCVIlv_yF4bnHpZj5vJxZFuGaFt8bqlJYkU8zQ2pIA_y6JUPoTovHe0ioU90Q8MpJM6Cvz9ivLFPy8I6FNUiMEiy6iv5fvT3ISXIYQ4voNsfHtMUF9YNkP1GRRimYQ",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD-KkSNRSzqhrL5FAbKvnYw_Xa1F_qwd3LGoJ2ax74sae9Ob-Zs-oXLcqW7AUQKbgD3ZVLYdWS00-X4UJP_ZGhkZf7XcNIPdDj3QXaP3wlJ9BEEtpaSTAk06f3QPTTlli4nRkwWGjd-PsY5p9OPbich4YZ-RlawBSnyVbxsntKU1FvR3YNc-YqrYePpDV-bcwqW0simh8X6RV784EhMQ8TtncOty8PCc0wtxh5tQsrfEL_ula3doV90etjQKl2-B07acLsbUbgZuP3m",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYN-r895RrkKAUkA4QHXu_OHEVxQpcmNQyNSnaQIgqQAQASRZIjdfYJyRQJBqRca17LjcnVBOjoyJ4wZwlBpkexXez89FEsl9RDfIDicdKm1mdzpNzCloBJTSrAemCZoP7KVQYNRSLCJJYiirvG0-E0dAtsL6p208RTTCArmA-KFKL3GXZKrjaERForq09xTpwBWy2P2p8qhrSZJKwzZ-smvmEu787MDo6CoTTz7gsHzuH3D4EctZCECzXZYf2SRoizjxEfcsG_6E",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA08q2oMdp5R9OG10VegV-E488-h-MBEY5-FRI2zjhp9-r9kuI6sVsVlosPgRazuz5Z8lRJd0iKIDQjJUPdrCvx9_EKgs7kSKvZ3mM3ahGhvnexdofE9bYIU9n51oJPKYsuW2jBagJXAw-Pm3DCGygYvQ4KCNXp4QyA5ACxHPT7N6l0igF5bCDvWHUxeABFZu1jS8cmrRNwnbilrnwJygHtSIxeZZeB9N77S41RFDLqNFzhl8UYVMXleeiHEUT8DEq2oJcsUC1faaGM",
        ]
    };

    return (
        <div className="product-detail-page bg-cream">
            <div className="container py-4">

                {/* Top Section */}
                <div className="row g-5 mb-5 align-items-stretch top-section" >
                    <div className="col-lg-6">
                        <ProductImage images={product.images} />
                    </div>
                    <div className="col-lg-6">
                        <ProductInfo
                            product={product}
                            onAddToCart={(qty) => addToCart({ ...product, quantity: qty } as any)}
                        />
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <ProductHighlights />
            <ProductSpecs />

            {/* Related Products */}
            <div className="bg-white py-5">
                <div className="container">
                    <h2 className="text-center mb-4" style={{fontFamily: 'Playfair Display, serif', color: '#5d4037', fontSize: '1.5rem'}}>
                        Có thể bạn sẽ thích
                    </h2>
                    <FeaturedProducts limit={4} centerTitle={false} title="" />
                </div>
            </div>
        </div>
    );
}