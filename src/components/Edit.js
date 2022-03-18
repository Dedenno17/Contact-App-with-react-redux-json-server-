import { Link } from "react-router-dom";

const Edit = () => {
    return (
        <div className="edit">
            <Link to='/'>Go Back</Link>
            <form>
                <input
                    type='text'
                />
                <input
                    type='text'
                />
                <input
                    type='text'
                />
                <div className="btn">
                    <button className="update">Update Contact</button>
                    <button className="cancel">Cancel</button>
                </div>
            </form>
        </div>        
    );
}
 
export default Edit;