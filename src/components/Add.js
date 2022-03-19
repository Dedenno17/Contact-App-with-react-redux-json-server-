import { useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { setExistence } from "../features/modalExistence";
import { setStatus } from "../features/modalStatus";
import { setMessage } from "../features/modalMessage";

const Add = () => {
    


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
            dispatch(setExistence(true));
            dispatch(setMessage('SuccesFully!!'));
            
            setTimeout(() => {
                history.push('/');
            }, 1500);
        });
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
                <button>Add Student</button>
            </form>
        </div>
    );
}
 
export default Add;