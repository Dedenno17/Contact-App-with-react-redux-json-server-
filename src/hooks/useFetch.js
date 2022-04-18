import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../features/contact';


const useFetch = (url) => {
    
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contact.contacts);

    const compare = (a, b) => {
        const studentNameA = a.name.toUpperCase();
        const studentNameB = b.name.toUpperCase();

        let comparison = 0;
        if( studentNameA > studentNameB ) {
            comparison = 1;
        } else if( studentNameB > studentNameA ) {
            comparison = -1;
        }

        return comparison;
    }

    useEffect(() => {
    
        const abortCont = new AbortController();
        
        setTimeout(() => {
                fetch(url, { signal: abortCont.signal})
                    .then((response) => {
                        if( !response.ok ){
                            throw new Error('could not fetch the data for that resource!');
                        }else{
                            return response.json();
                        }
                    })
                    .then((res) => {
                        let newRes = [...res];
                        newRes.sort(compare);
        
                        dispatch(setContacts(newRes));
                    })
                    .catch((err) => {
                        if( err.name === 'AbortError' ){
                            return;
                        }else{
                            alert(err.message);
                        }
                    })

        }, 2000)
    
        return () => abortCont.abort();
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [url]); 

    return { contacts };
}

export default useFetch;