import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useLoggedInUser = () => {
    const [user] = useAuthState(auth);  //This hook returns  the current user object (if logged in)
    const email = user?.email; // Access email directly from user object
    const [loggedInUser, setLoggedInUser] = useState({});  //loggedInUser: State variable to hold the data of the logged-in user fetched from the backend.

    useEffect(() => {
        if (email) { // Fetch only if email is available
            fetch(`http://localhost:5000/loggedInUser?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setLoggedInUser(data);
                })
                .catch(error => {
                    console.error('Error fetching logged-in user:', error);
                });
        }
    }, [email]); // Dependency array should include email

    return loggedInUser; // Return the logged-in user state
}

export default useLoggedInUser;



// import { useState ,useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init';

// const useLoggedInUser = () => {
//     const [user] = useAuthState(auth);
//     const email = user[0]?.email;
//     const [loggedInUser, setLoggedInUser] = useState({});

//     useEffect(() => {
//         fetch(`http://localhost:5000/loggedInUser?email=${email}`)
//         .then(res => res.json())
//         .then(data => {
//             setLoggedInUser(data)
//         })
//     },[loggedInUser, setLoggedInUser])
// }

// export default useLoggedInUser

// import { useState, useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init';

// const useLoggedInUser = () => {
//     const [user] = useAuthState(auth);
//     const email = user?.email; // Access email directly from user object
//     const [loggedInUser, setLoggedInUser] = useState({});

//     useEffect(() => {
//         if (email) { // Fetch only if email is available
//             fetch(`http://localhost:5000/loggedInUser?email=${email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setLoggedInUser(data);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching logged-in user:', error);
//                 });
//         }
//     }, [email]); // Dependency array should include email

//     return loggedInUser; // Return the logged-in user state
// }

// export default useLoggedInUser;