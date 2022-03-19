import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { setExistence } from "../features/modalExistence";
import { setStatus } from "../features/modalStatus";
import { setMessage } from "../features/modalMessage";

const Edit = () => {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();
    

    useEffect(() => {

        fetch('http://localhost:8000/contacts/' + id)
            .then((res) => res.json())
            .then((res) => {
                setName(res.name);
                setEmail(res.email);
                setPhone(res.phone);
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();

        const newContact = { name: name, email: email, phone: phone }

        fetch('http://localhost:8000/contacts/' + id, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newContact)
        }).then(() => {
            dispatch(setStatus('succes'));
            dispatch(setExistence(true));
            dispatch(setMessage('Contact updated succesfully!!'));

            setTimeout(() => {
                history.push('/');
            }, 1500);
        })

    }

    const handleCancel = () => {
        history.push('/');
    }


    return (
        <div className="edit">
            <p>Edit Contact</p>
            <Link to='/'>Go Back</Link>
            <form onSubmit={ handleUpdate }>
                <input
                    type='text'
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                />
                <input
                    type='text'
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <input
                    type='text'
                    value={phone}
                    onChange={ (e) => setPhone(e.target.value) }
                />
                <div className="btn">
                    <button className="update">Update Contact</button>
                    <button className="cancel" onClick={ handleCancel }>Cancel</button>
                </div>
            </form>
        </div>        
    );
}
 
export default Edit;