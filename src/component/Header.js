import { LOGO_URL } from "../Utils/constants";
// Header Component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Company</li>
                    <li>Career</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;