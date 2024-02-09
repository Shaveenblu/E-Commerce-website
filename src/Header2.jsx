import { NavLink } from "react-router-dom";

const navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <div className="nav-elements">
                    <ul className="nav-menu">
                        <li>
                            Home
                        </li>
                        <li>Blog</li>
                        <li>
                            Project
                        </li>
                        <li>
                            About
                        </li>
                        <li className="nav-contact">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default navbar

