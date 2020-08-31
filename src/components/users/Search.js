import React, {useState} from 'react'
import PropTypes from 'prop-types';

//destructored and passed in as props
const Search = ({searchUsers, showClear, clearUsers, setAlert }) =>{
    //destructure and take out text, setText for method from useState
    //text is our state
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            setAlert('Please Enter something', 'light');
        }else{
            /*Send data up to App.js*/
            searchUsers(text);    
            setText('');
        }
    }    
    //setting the state of e.target.name which handles the form field names
    const onChange = (e) => {
        setText(e.target.value);
    }
        return (
            <div>
                <form 
                onSubmit={onSubmit}
                className="form">
                    <input 
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={text}
                        onChange={onChange}
                    />

                    <input
                        type="submit"
                        value="Search"
                        className='btn btn-dark btn-block'
                    />
                </form>
                {showClear && (
                    <button
                    className="btn btn-light btn-block"
                    onClick={clearUsers}>
                    Clear
                    </button>
                )}
                
            </div>
        )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
