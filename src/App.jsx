// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/home';
// import Login from './pages/Login/Login';
// import Signup from './pages/Login/Signup';
// import ProtectedRoute from './pages/ProtectedRoute';
// import Explore from './pages/Explore/Explore';
// import Notifications from './pages/Notifications/Notification';
// import Messages from './pages/Messages/Messages';
// import Bookmarks from './pages/More/More';
// import Lists from './pages/Lists/Lists';
// import Profile from './pages/Profile/Profile';
// import More from './pages/More/More';
// import Feed from './pages/Feed/Feed';
// // import PageLoading from './pages/PageLoading';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} >
//             <Route index element={<Feed />} />
//           </Route>
//           <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}>
//             <Route path="feed" element={<Feed />} />
//             <Route path="explore" element={<Explore />} />
//             <Route path="notifications" element={<Notifications />} />
//             <Route path="messages" element={<Messages />} />
//             <Route path="bookmarks" element={<Bookmarks />} />
//             <Route path="lists" element={<Lists />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="more" element={<More />} />
//           </Route>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import Home from './pages/home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ProtectedRoute from './pages/ProtectedRoute';
import Explore from './pages/Explore/Explore';
import Notifications from './pages/Notifications/Notification';
import Messages from './pages/Messages/Messages';
import Bookmarks from './pages/More/More';
import Lists from './pages/Lists/Lists';
import Profile from './pages/Profile/Profile';
import More from './pages/More/More';
import Feed from './pages/Feed/Feed';
import LanguageSwitcher from './components/LanguageSwitcher'; // Import the LanguageSwitcher component

function App() {
  // const { t } = useTranslation(); // Use the useTranslation hook

  return (
    <div className="App">
      <LanguageSwitcher /> {/* Add the LanguageSwitcher component */}
      {/* <h1>{t('welcome')}</h1> Use translation */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} >
            <Route index element={<Feed />} />
          </Route>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}>
            <Route path="feed" element={<Feed />} />
            <Route path="explore" element={<Explore />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="messages" element={<Messages />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="lists" element={<Lists />} />
            <Route path="profile" element={<Profile />} />
            <Route path="more" element={<More />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
