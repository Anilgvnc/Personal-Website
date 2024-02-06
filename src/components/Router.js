import { Outlet, Link } from "react-router-dom";
import { HiMiniCommandLine } from "react-icons/hi2";
//NavBar

import './Router.css';

const Router = () => {
    return (
        <>
            <nav>
                <div className="navContainer">
                    <div className="navBar">
                        <div className="navHeader">
                            <Link to="/"><HiMiniCommandLine /> Kemal Anıl Güvenç</Link>
                        </div>
                        <div className="navList">
                            <div className="navItems">
                                <Link to="/AboutMe">About Me</Link>
                            </div>
                            <div className="navItems">
                                <Link to="/Accounts">Accounts</Link>
                            </div>
                            <div className="navItems">
                                <Link to="/Projects">Projects</Link>
                            </div>
                            <div className="navItems">
                                <Link to="/Contact">Contact me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Router;