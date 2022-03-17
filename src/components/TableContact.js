const TableContact = () => {
    return (
        <table className="table-contact">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
            </tr>
            <tr>
                <td>1</td>
                <td>Roman</td>
                <td>roman@gmail.com</td>
                <td>1234567899</td>
                <td>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Britney</td>
                <td>britney@gmail.com</td>
                <td>09876543</td>
                <td>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </td>
            </tr>
        </table>
    );
}
 
export default TableContact;