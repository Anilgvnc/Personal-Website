import { Outlet, Link } from "react-router-dom";
import { HiMiniCommandLine } from "react-icons/hi2";
//NavBar
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <div className="navItems">
                            <Link to="/Accounts">Accounts</Link>
                        </div>
                        <div className="navItems">
                            <Link to="/Projects">Projects</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Router;