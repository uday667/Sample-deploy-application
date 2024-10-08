import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaBars } from "react-icons/fa"; // Import hamburger menu icon
import "./NavbarStyles.css";

function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <header>
            <Link to="/">
                <div className="logo-container"></div>
            </Link>
            <nav className={isNavActive ? "active" : ""}>
                <Link to="/services">Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/leadership">Leadership</Link>
                <Link to="/contactUs">Contact Us</Link>
            </nav>
            {/* Hamburger menu icon */}
            <button className="nav-btn" onClick={toggleNav}>
                <FaBars />
            </button>
            {/* Table with buttons */}
            {isNavActive && (
                <div className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="/services">Services</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/about">About Us</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/leadership">Leadership</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/contactUs">Contact Us</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </header>
    );
}

export default Navbar;
