import "./top-nav.css";
import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <div className="wrapper-topnav">
            <nav className="container-topnav flex-row flex_justify-sb flex_align-middle">
                <div className="logoContainer">
                    <Link className="logo link-noDecoration" to='/'>
                        <h1>Scriblrr.</h1>
                    </Link>
                </div>
                <div className="container-social flex-row">
                    <a 
                        className="btn-icon link-noDecoration" 
                        href="https://twitter.com/RaieeGulhane" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-twitter social-icon"></i>
                    </a>
                    <a 
                        className="btn-icon link-noDecoration" 
                        href="https://github.com/raieegulhane" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github-alt social-icon"></i>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export { TopNav };