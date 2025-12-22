import Banner from "../../components/Banner/Banner";
import FeatureHighlights from "../../components/Feature/Feature";
import FeaturedProducts from "../../components/FeatureProducts/FeaturedProducts";
import './style.scss';

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
                        buttonLink="/sale"
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
                            image="/assets/img/category/classic.png"
                        />
                        <Banner
                            type="small"
                            subtitle={false}
                            title="Hương vị <span>Mới</span>"
                            description={false}
                            buttonText="Xem ngay"
                            buttonLink="/category/dark"
                            image="/assets/img/category/classic.png"
                        />
                        <Banner
                            type="small"
                            subtitle={false}
                            title="Socola ngày Valentine"
                            description={false}
                            buttonText="Xem ngay"
                            buttonLink="/category/dark"
                            image="/assets/img/category/classic.png"
                        />
                    </div>
                </div>
            </div>

        </>
    );
}