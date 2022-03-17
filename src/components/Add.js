const Add = () => {
    return (
        <div className="add">
            <p>Add Post</p>
            <form >
                <input
                    type='text'
                    placeholder="Full name"
                />
                <input
                    type='email'
                    placeholder="Email"
                />
                <input
                    type='text'
                    placeholder="Phone"
                />
                <button 
                    type="submit"
                >Add Student</button>
            </form>
        </div>
    );
}
 
export default Add;