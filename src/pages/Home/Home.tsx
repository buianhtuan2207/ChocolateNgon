import Banner from "../../components/Banner/Banner";
import FeatureHighlights from "../../components/Feature/Feature";
import FeaturedProducts from "../../components/FeatureProducts/FeaturedProducts";
import './home.scss';

export default function Home() {
    return(
        <>
            <div className="home-container">
                <div className="home-content">
                    <Banner
                        type="hero"
                        subtitle="Ưu đãi đặc biệt giảm 30%"
                        title="Chocolate Handmade<br/><span>Từ hạt cacao thượng hạng</span>"
                        description="Mỗi thanh chocolate là một tác phẩm nghệ thuật – làm thủ công, nguyên chất 100%"
                        buttonText="Khám phá ngay"
                        buttonLink="/promotion"
                        image="https://royce.vn/wp-content/uploads/2019/12/H8-550x550.jpg"
                    />
                    <FeatureHighlights/>
                    <div className="feature col1">
                        <FeaturedProducts
                            limit={4}
                        />
                    </div>
                    <Banner
                        type="promo"
                        subtitle={false}
                        title="Giảm giá <span>30%</span> Socola"
                        description={false}
                        buttonText="Xem ưu đãi"
                        buttonLink="/promotion"
                        image="/assets/img/category/classic.png"
                    />
                    <div className="feature col2">
                        <FeaturedProducts
                            title="Sản phẩm mới"
                            limit={8}
                        />
                    </div>
                    <div className="form-banner">
                        <Banner
                            type="small"
                            subtitle={false}
                            title="Socola đen <span>Premium</span>"
                            description={false}
                            buttonText="Xem ngay"
                            buttonLink="/category/dark"
                            image="https://bariachocolate.com.vn/wp-content/uploads/2023/05/Socola-den-72-50g-01-1-600x600.jpg"
                        />
                        <Banner
                            type="small"
                            subtitle={false}
                            title="Hương vị <span>Mới</span>"
                            description={false}
                            buttonText="Xem ngay"
                            buttonLink="/category/dark"
                            image="https://kingfoodmart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsc_pcm_product%2Fprod%2F2025%2F7%2F23%2F629113-7622210816665.webp&w=1920&q=75"
                        />
                        <Banner
                            type="small"
                            subtitle={false}
                            title="Socola ngày Valentine"
                            description={false}
                            buttonText="Xem ngay"
                            buttonLink="/category/dark"
                            image="https://anh.quatructuyen.com/media/catalog/product/cache/1/image/480x480/9df78eab33525d08d6e5fb8d27136e95/s/o/socola_valentine_7_17.jpg"
                        />
                    </div>
                </div>
            </div>

        </>
    );
}