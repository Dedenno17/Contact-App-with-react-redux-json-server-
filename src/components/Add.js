import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
import { setExistence } from "../features/modalExistence";
import { setStatus } from "../features/modalStatus";
import { setMessage } from "../features/modalMessage";

const Add = () => {
    
    const modalStatus = useSelector((state) => state.modalStatus.status); 
    const modalExistence = useSelector((state) => state.modalExistence.existence); 
    const modalMessage = useSelector((state) => state.modalMessage.message);

    const dispatch = useDispatch();


    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const contact = { name: name, email: email, phone: phone };

        fetch('http://localhost:8000/contacts', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contact)
        }).then(() => {
            dispatch(setStatus('succes'));
            dispatch(setExistence('true'));
            dispatch(setMessage('SuccesFully!!'));
            
            setTimeout(() => {
                history.push('/');
            }, 2000);
        });
    }

    const handleRefuse = () => {
        dispatch(setExistence(''));
    }

    return (
        <div className="add">
            <p>Add Post</p>
            <form onSubmit={ handleSubmit }>
                <input
                    type='text'
                    placeholder="Full name"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                    required
                />
                <input
                    type='email'
                    placeholder="Email"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    required
                />
                <input
                    type='text'
                    placeholder="Phone"
                    value={ phone }
                    onChange={ (e) => setPhone(e.target.value) }
                    required
                />
                <button onClick={ handleRefuse }>Add Student</button>
            </form>
            <Modal show={ modalExistence } status={ modalStatus } message={ modalMessage }/>
        </div>
    );
}
 
export default Add;