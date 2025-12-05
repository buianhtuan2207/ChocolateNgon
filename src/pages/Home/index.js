import Header from "../../components/Header";
import Banner from "../../components/Banner";
import FeatureHighlights from "../../components/Feature";
import CardProduct from "../../components/CardProduct";



export default function Home() {
    return(
        <>
            <Header />
            <Banner
                type="hero"
                subtitle="Ưu đãi đặc biệt giảm 30%"
                title="Chocolate Handmade<br/><span>Từ hạt cacao thượng hạng</span>"
                description="Mỗi thanh chocolate là một tác phẩm nghệ thuật – làm thủ công, nguyên chất 100%"
                buttonText="Khám phá ngay"
                buttonLink="/promotion"
                image="https://royce.vn/wp-content/uploads/2019/12/H8-550x550.jpg"
            />
            <FeatureHighlights />
            <br/>
            <CardProduct/>
        </>
    );
}