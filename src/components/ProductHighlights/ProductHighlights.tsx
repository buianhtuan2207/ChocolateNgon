import React from 'react';
import './productHighlights.scss';

export default function ProductHighlights() {
    const items = [
        { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyoBJjxXnRCm3F1UnTev_Rbbgp3FIk0UHjcTvZ9M57Y0QhVrNE7crPoEojkSWDjUG9x3tpJBT4SJysMgLJVSzTHBo4d-1ydlyIR8jeed8ou43yM5Wh61vXxn4HyxuF5qg7Y2sUmxEub64S6GoV7-idRFnZh4aSFhR8EVnjTk3e1NAJDyAJQE_5qYAyILh_rSRzxlrupTRDov0WtkrmV6AEAn2mh8wD5rDh6i7uGYyfVT6vbWbaRg7dIHM9etZBvSUULvMJyfVpXzyi", title: "Nghệ thuật rang hạt", desc: "Hạt cacao tuyển chọn được rang chậm ở nhiệt độ thấp để đánh thức tinh túy." },
        { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-KkSNRSzqhrL5FAbKvnYw_Xa1F_qwd3LGoJ2ax74sae9Ob-Zs-oXLcqW7AUQKbgD3ZVLYdWS00-X4UJP_ZGhkZf7XcNIPdDj3QXaP3wlJ9BEEtpaSTAk06f3QPTTlli4nRkwWGjd-PsY5p9OPbich4YZ-RlawBSnyVbxsntKU1FvR3YNc-YqrYePpDV-bcwqW0simh8X6RV784EhMQ8TtncOty8PCc0wtxh5tQsrfEL_ula3doV90etjQKl2-B07acLsbUbgZuP3m", title: "Giao hưởng tầng vị", desc: "Sự kết hợp giữa vị đắng 70% và hậu vị chua thanh nhẹ trái cây nhiệt đới." },
        { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYN-r895RrkKAUkA4QHXu_OHEVxQpcmNQyNSnaQIgqQAQASRZIjdfYJyRQJBqRca17LjcnVBOjoyJ4wZwlBpkexXez89FEsl9RDfIDicdKm1mdzpNzCloBJTSrAemCZoP7KVQYNRSLCJJYiirvG0-E0dAtsL6p208RTTCArmA-KFKL3GXZKrjaERForq09xTpwBWy2P2p8qhrSZJKwzZ-smvmEu787MDo6CoTTz7gsHzuH3D4EctZCECzXZYf2SRoizjxEfcsG_6E", title: "Mượt mà như nhung", desc: "Cấu trúc siêu mịn cho phép socola tan chảy ngay lập tức." }
    ];

    return (
        <section className="product-highlights py-5 border-top border-bottom border-light">
            <div className="container">
                <div className="text-center mb-5 d-flex flex-column align-items-center">
                    <h2 className="section-title mb-0">Hương vị diệu kỳ</h2>
                    <div className="divider"></div>
                </div>
                <div className="row g-4 justify-content-center">
                    {items.map((item, i) => (
                        <div className="col-md-4 text-center highlight-item" key={i}>
                            <div className="img-circle">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3 className="highlight-title">{item.title}</h3>
                            <p className="highlight-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}