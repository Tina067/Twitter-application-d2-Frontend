// import React from 'react'
// import auth from '../firebase.init';
// import Sidebar from './Sidebar/Sidebar';
// import Feed from './Feed/Feed';
// import Widgets from './Widgets/Widgets';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { signOut } from 'firebase/auth';
// import { Outlet } from 'react-router-dom';
// import '../App.css';
// import useLoggedInUser from '../hooks/useLoggedInUser';

// const Home = () => {
//   const user = useAuthState(auth);
//   // console.log(user[0]?.email);
//   const [loggedInUser] = useLoggedInUser();
//   console.log(loggedInUser);

//   const handleLogout = () =>{
//     signOut(auth)
//   }


//   return (
//     <div className='app'>
//       <Sidebar  handleLogout={handleLogout} user={user}/>
//       <Outlet />
//       <Widgets />
//     </div>
//   )
// }

// export default Home;


import React from 'react';
import auth from '../firebase.init';
import Sidebar from './Sidebar/Sidebar';
// import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Outlet } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../App.css';


const Home = () => {
  const [user] = useAuthState(auth);
  

  const handleLogout = () => {
    signOut(auth);
  }

  return (
    <div className='app'>
      <Sidebar handleLogout={handleLogout} user={user} />
      <LanguageSwitcher />
      <Outlet />
      <Widgets />
    </div>
  );
}

export default Home;
