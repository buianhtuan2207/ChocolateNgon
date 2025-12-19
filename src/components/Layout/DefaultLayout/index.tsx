import Header from './Header'
import './style.scss';
import Footer from "./Footer";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header/>
            <div className="header-container">
                <div className="content">{children}</div>
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout;