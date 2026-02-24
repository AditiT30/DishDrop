import {useEffect,useState} from "react";

//useful in chat app
const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    //check if online

    //since we want to add event listener only once:- useEffect with empty dep. array
    useEffect(()=>{
        window.addEventListener('offline', ()=>{
            setOnlineStatus(false);
        })
        window.addEventListener('online', ()=>{
            setOnlineStatus(false);
        })

    },[])

    //returns boolean value
    return onlineStatus;
}

export default useOnlineStatus;

/*
Contract:-
i/p required -> no special info. req. from the component where it is being called
o/p required -> boolean value
*/