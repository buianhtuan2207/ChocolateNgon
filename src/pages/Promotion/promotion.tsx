
import {PRODUCTS} from "../../data/products";
import FlashSale from "../../components/FlashSale/FlashSale";


export default function Promotion() {

    const saleItems = PRODUCTS.filter(p => p.discountPrice).slice(0, 4);
    return (
        <div className="container">
            <FlashSale data={saleItems} />
        </div>
    )
}