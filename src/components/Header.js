import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setExistence } from "../features/modalExistence";

const Header = () => {

    const modalStatus = useSelector((state) => state.modalStatus.status); 
    const modalExistence = useSelector((state) => state.modalExistence.existence); 
    const modalMessage = useSelector((state) => state.modalMessage.message);

    const dispatch = useDispatch();

    setTimeout(() => {
        dispatch(setExistence(false));
    }, 3000);

    const handleRefuse = () => {
        dispatch(setExistence(false));
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>
                    <p>React Redux Contact App</p>
                </Link>
            </div>
            <Modal show={ modalExistence } status={ modalStatus } message={ modalMessage } handleRefuse={ handleRefuse }/>
        </header>
    );
}
 
export default Header;