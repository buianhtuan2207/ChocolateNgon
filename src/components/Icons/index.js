// src/components/Icons.tsx  (hoặc src/common/Icons.tsx)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Solid icons – miễn phí
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
    faGift,
    faTag,
    faPercent,
    faArrowRight,
    faHome,
} from '@fortawesome/free-solid-svg-icons';

// Brand icons – mạng xã hội & thanh toán
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';

// Thêm tất cả icon vào library một lần duy nhất
library.add(
    // Solid
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
    faGift,
    faTag,
    faPercent,
    faArrowRight,
    faHome,

    // Brands
    faFacebookF,
    faInstagram,
    faYoutube,
    faTiktok,
);

// Export default chính là FontAwesomeIcon đã được config sẵn
export default FontAwesomeIcon;