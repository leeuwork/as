import './Nav.css'
import { useState } from "react";
import { Link } from "react-router-dom"

function Nav() {
    const [show, setShow] = useState(false)

    function links() {
        return (
            <div className="links-container">
                <a href=""><h5>About</h5></a>
                <a href="#"><h5>Projects</h5></a>
                <Link to="/resume"><h5>Resume</h5></Link>
                <a href="#"><h5>Contact</h5></a>
            </div>
        )
    }

    return (
        <div className="nav-container">
            <div id="name">
                <Link to="/" id="nDec"><h1>Aslan Shaken</h1></Link>
            </div>
            <div className="hamburger-container">
                <div id="humberger-menu">
                    <img
                        onClick={() => setShow(!show)}
                        id="hamburger-img"
                        src={show
                            ? "https://icons-for-free.com/iconfiles/png/512/x-1321215629555778185.png"
                            : "https://img.icons8.com/carbon-copy/2x/menu.png"}
                    />
                    {show && links()}
                </div>
            </div>
        </div>
    )
}

export default Nav