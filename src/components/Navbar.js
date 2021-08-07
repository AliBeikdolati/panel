import {Link} from 'react-router-dom';

// import styles
import '../assets/styles/Navbar.css'

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-right">
                <div className="navbar-brand">
                    <a href="https://www.parsdata.com/" target="_blank">
                        <img
                            src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/02/parsdata-logo.webp"
                            alt="parsdata"
                            className="navbar-brand__img"
                        />
                    </a>
                </div>
                <ul className="navbar-group">
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/">
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/admin">
                            صفحه ادمین
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-left">
                <ul className="navbar-group">
                    <li className="navbar-item" onClick={props.login}>
                        ورود
                    </li>
                    <li className="navbar-item" onClick={props.logout}>
                        خروج
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;