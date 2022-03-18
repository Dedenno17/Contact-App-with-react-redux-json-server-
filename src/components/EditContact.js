import { Link } from "react-router-dom";

const EditContact = () => {
    return (
        <>
            <Link to='/add'>
                <button className="edit">Edit</button>
            </Link>
        </>
    );
}
 
export default EditContact;