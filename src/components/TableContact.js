const TableContact = ({ contacts }) => {

    const handleDelete = (id) => {
        return fetch('http://localhost:8000/contacts/' + id, {
            method: 'DELETE'
        }).then(() => {});
    }

    return (
        <table className="table-contact">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((item) => {
                    return <tr key={item.id}>
                                <td>{contacts.indexOf(item) + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button className="edit">Edit</button>
                                    <button className="delete" onClick={ () => handleDelete(item.id) }>Delete</button>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
    );
}
 
export default TableContact;