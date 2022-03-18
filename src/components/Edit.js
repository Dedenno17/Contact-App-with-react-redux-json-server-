import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Edit = () => {

    const { id } = useParams();
    const [contact, setContact] = useState('');
    // const [ updateName, setUpdateName ] = useState('');
    // const [ updateEmail, setUpdateEmail ] = useState('');
    // const [ updatePhone, setUpdatePhone ] = useState('');


    useEffect(() => {

        fetch('http://localhost:8000/contacts/' + id)
            .then((res) => res.json())
            .then((res) => {
                setContact(res);
            })

    }, []);


    return (
        <div className="edit">
            <Link to='/'>Go Back</Link>
            <form>
                <input
                    type='text'
                    value={ contact.name }
                />
                <input
                    type='text'
                    value={contact.email}

                />
                <input
                    type='text'
                    value={contact.phone}
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