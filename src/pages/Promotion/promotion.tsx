import {PRODUCTS} from "../../data/products";
import FlashSale from "../../components/FlashSale/FlashSale";
import Banner from "../../components/Banner/Banner";
import "./promotion.scss"


export default function Promotion() {

    const saleItems = PRODUCTS.filter(p => p.discountPrice).slice(0, 4);
    return (
        <div className="promotion-page">
            <Banner
                type="promotion"
                subtitle="CHƯƠNG TRÌNH ĐẶC BIỆT"
                title="Ngọt ngào mùa lễ hội"
                description="Giảm tới 30% cho bộ sưu tập Signature Dark Chocolate. Hương vị tinh tế cho những khoảnh khắc đáng nhớ."
                buttonText="Khám phá ngay"
                buttonLink="/product"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDadsy0aROr3mIXk7__fqfsxDMelUGeAZ-B0XY5x397hpG07UolPrRECS7JkojYQvrW3_br9S1uQKrT-y4_tap0ppGtrRzGGPuXYXdQsmeQ93sR65FwAX0A9pXpfvgAlfzdic3WW1rBVgPla5XhN3X4F2EInRirntPEqp9zisqGAUKYfEvbpbDlwHQCx4reBNqPFIMdTBRrWlgfiDpuVLaKNUG2eSVT8ZMDd8E1Z7jhnWPDrY-3BKN-YM3foPhG2akQVSAXqFAml_iq"
            />
            <div className="container mt-5">
                <FlashSale data={saleItems} />
            </div>
        </div>
    )
}