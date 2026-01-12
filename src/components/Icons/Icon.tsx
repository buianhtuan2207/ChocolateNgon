import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// 1. Import các icon từ gói Solid (Nét đặc/đậm)
import {
    faUser,
    faShoppingCart,
    faSearch,
    faHeart,
    faStar,
    faTrash,
    faPlus,
    faMinus,
    faTimes,
    faBars,
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
    faTruck,
    faCreditCard,
    faCheck,
    faChevronDown,
    faChevronRight,
    faChevronLeft,
    faGift,
    faTag,
    faPercent,
    faArrowRight,
    faArrowLeft,
    faHome,
    faLeaf,
    faTools,
    faSpa,
    faFire,
    faBox,
    faLock,
} from '@fortawesome/free-solid-svg-icons';

// 2. Import các icon từ gói Brands (Logo thương hiệu)
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faTiktok,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';

// 3. Thêm tất cả vào thư viện
library.add(
    faUser,
    faShoppingCart,
    faSearch,
    faHeart,
    faStar,
    faTrash,
    faPlus,
    faMinus,
    faTimes,
    faBars,
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
    faTruck,
    faCreditCard,
    faCheck,
    faChevronDown,
    faChevronRight,
    faChevronLeft,
    faGift,
    faTag,
    faPercent,
    faArrowRight,
    faArrowLeft,
    faHome,
    faLeaf,
    faTools,
    faSpa,
    faFire,
    faBox,
    faLock,
    faFacebookF,
    faInstagram,
    faYoutube,
    faTiktok,
    faGoogle
);

// 4. Định nghĩa Props cho Component Icon
interface IconProps {
    icon: IconProp;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
    style?: React.CSSProperties;
}

// 5. Tạo Component Wrapper
const Icon: React.FC<IconProps> = ({ icon, className, onClick, style }) => {
    return (
        <FontAwesomeIcon
            icon={icon}
            className={className}
            onClick={onClick}
            style={style as any}
        />
    );
};

export default Icon;