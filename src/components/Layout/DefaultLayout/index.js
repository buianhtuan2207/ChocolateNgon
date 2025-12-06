import Header from './Header'
import './style.scss';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header/>
            <div className="header-container">
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout;