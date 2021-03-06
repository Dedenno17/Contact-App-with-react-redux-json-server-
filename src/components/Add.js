import { useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { setExistence } from "../features/modalExistence";
import { setStatus } from "../features/modalStatus";
import { setMessage } from "../features/modalMessage";
import useFetch from "../hooks/useFetch";

const Add = () => {

    const dispatch = useDispatch();


    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    const history = useHistory();

    const sendData = (contains) => {
        fetch('http://localhost:8000/contacts', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contains)
        }).then(() => {
            dispatch(setStatus('succes'));
            dispatch(setExistence(true));
            dispatch(setMessage('Contact added succesfully!!'));
            
            setTimeout(() => {
                history.push('/');
            }, 1500);
        });
    }

    const { contacts } = useFetch('http://localhost:8000/contacts', 'GET');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if( name === '' || email === '' || phone === '' ) {
            dispatch(setStatus('warn'));
            dispatch(setExistence(true));
            dispatch(setMessage('Please fill the field!!'));
        }else{
            for( let i = 0; i < contacts.length; i++ ){
                if( contacts[i].name === name ){
                    dispatch(setStatus('danger'));
                    dispatch(setExistence(true));
                    dispatch(setMessage(`This name already exists!!`));
                    return;
                } else if( contacts[i].email === email ){
                    dispatch(setStatus('danger'));
                    dispatch(setExistence(true));
                    dispatch(setMessage(`This email already exists!!`));
                    return;
                } else if( contacts[i].phone === phone ){
                    dispatch(setStatus('danger'));
                    dispatch(setExistence(true));
                    dispatch(setMessage(`This phone already exists!!`));
                    return;
                }
            }

            const contact = { name: name, email: email, phone: phone };
            sendData(contact);

        }

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
                />
                <input
                    type='email'
                    placeholder="Email"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <input
                    type='text'
                    placeholder="Phone"
                    value={ phone }
                    onChange={ (e) => setPhone(e.target.value) }
                />
                <button>Add Student</button>
            </form>
        </div>
    );
}
 
export default Add;