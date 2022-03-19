import AddContact from "./AddContact";
import TableContact from "./TableContact";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { setContacts } from "../features/contact";

const Home = () => {

    const contacts = useSelector(state => state.contact.contacts);
    const dispatch = useDispatch();

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch('http://localhost:8000/contacts', { signal: abortCont.signal })
                .then((response) => {
                    if( !response.ok ){
                        throw new Error('could not fetch the data for that resource!');
                    }else{
                        return response.json();
                    }
                })
                .then((res) => {
                    let newRes = [...res];
                    dispatch(setContacts(newRes));
                })
                .catch((err) => {
                    if( err.name === 'AbortError' ){
                        return;
                    }else{
                        alert(err.message);
                    }
                })
        }, 1000)

        return () => abortCont.abort();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return (
        <div className="home">
            <AddContact />
            { contacts && <TableContact contacts={ contacts } />}
        </div>
    );
}
 
export default Home;