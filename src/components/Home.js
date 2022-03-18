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
                let newRes = [...res];
                if( newRes[0].name[0] < newRes[1].name[0] ){
                    [newRes[0], newRes[1]] = [ newRes[1], newRes[0] ];    
                };

                dispatch(setContacts(newRes));

                console.log(res);
            })
    },[]);


    return (
        <div className="home">
            <AddContact />
            { contacts && <TableContact contacts={ contacts } />}
        </div>
    );
}
 
export default Home;