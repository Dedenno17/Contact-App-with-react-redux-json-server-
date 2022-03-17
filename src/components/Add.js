import { useState } from "react";

const Add = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const contact = { name: name, email: email, phone: phone };

        fetch('http://localhost:8000/contacts', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contact)
        }).then(() => alert('contact has been added!!') );
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