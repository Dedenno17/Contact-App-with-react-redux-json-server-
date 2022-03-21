import AddContact from "./AddContact";
import TableContact from "./TableContact";
import useFetch from "../hooks/useFetch";

const Home = () => {

    const { contacts } = useFetch('http://localhost:8000/contacts', 'GET');

    return (
        <div className="home">
            <h1>Student's Contact</h1>
            <AddContact />
            { contacts && <TableContact contacts={ contacts } />}
        </div>
    );
}
 
export default Home;