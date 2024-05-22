import React from 'react';
import '../Page.css';
import MainPage from './MainPage/MainPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className='profilePage'>
      <MainPage user={user}/>
      {/* <p>Hello this is profile</p> */}
    </div>
  )
}

export default Profile


