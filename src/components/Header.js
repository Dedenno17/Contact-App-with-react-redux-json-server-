import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>
                    <p>React Redux Contact App</p>
                </Link>
            </div>
        </header>
    );
}
 
export default Header;