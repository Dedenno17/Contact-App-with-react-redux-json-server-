import AddContact from "./AddContact";
import TableContact from "./TableContact";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { setContacts } from "../features/contact";

const Home = () => {

    const contacts = useSelector(state => state.contact.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:8000/contacts')
            .then((res) => res.json())
            .then((res) => {
                dispatch(setContacts(res));
            })
    });


    return (
        <div className="home">
            <AddContact />
            { contacts && <TableContact contacts={ contacts } />}
        </div>
    );
}
 
export default Home;