const Modal = ({ show, message, status}) => {
    return (
        <div className={`modal ${show}`} style={{backgroundColor: 'white'}}>
            <div className="message-close" style={{ backgroundColor: status }}>
                <p>{ message }</p>
                <button>X</button>
            </div>
            <span className="loading" >
                <span style={{backgroundColor: status}}></span>
            </span>
        </div>
    );
}
 
export default Modal;