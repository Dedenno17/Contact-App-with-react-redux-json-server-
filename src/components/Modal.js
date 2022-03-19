const Modal = ({ show, message, status, handleRefuse}) => {
    return (
        <div className={`modal ${show}`} style={{backgroundColor: 'white'}}>
            <div className="message-close" style={{ backgroundColor: status }}>
                <p>{ message }</p>
                <button onClick={ handleRefuse } >X</button>
            </div>
            <span className="loading" >
                <span style={{backgroundColor: status}}></span>
            </span>
        </div>
    );
}
 
export default Modal;