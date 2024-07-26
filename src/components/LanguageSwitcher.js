// frontend/src/components/LanguageSwitcher.js
// import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import axios from 'axios';
// import "../index.css";

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [theme, setTheme] = useState('light'); // Default theme

//   useEffect(() => {
//     // Apply theme based on selected language
//     switch (selectedLanguage) {
//       case 'es':
//         setTheme('dark'); // Example theme for Spanish
//         break;
//       case 'hi':
//         setTheme('light'); // Example theme for Hindi
//         break;
//       case 'pt':
//         setTheme('dark'); // Example theme for Portuguese
//         break;
//       case 'ta':
//         setTheme('light'); // Example theme for Tamil
//         break;
//       case 'bn':
//         setTheme('dark'); // Example theme for Bengali
//         break;
//       case 'fr':
//         setTheme('light'); // Example theme for French
//         break;
//       case 'en':
//       default:
//         setTheme('light'); // Default theme
//         break;
//     }
//   }, [selectedLanguage]);

//   const changeLanguage = (lng) => {
//     setSelectedLanguage(lng);
//   };

//   const handleSendOtp = () => {
//     axios.post('http://localhost:5000/api/otp/sendOtp', { email })
//       .then(response => {
//         alert('OTP sent to your email.');
//         setIsOtpSent(true);
//       })
//       .catch(error => {
//         console.error('Error sending OTP:', error);
//       });
//   };

//   const handleVerifyOtp = () => {
//     axios.post('http://localhost:5000/api/otp/verifyOtp', { email, otp })
//       .then(response => {
//         i18n.changeLanguage(selectedLanguage);
//         alert('Language changed successfully!');
//       })
//       .catch(error => {
//         console.error('Error verifying OTP:', error);
//         alert('Invalid OTP');
//       });
//   };

//   return (
//     <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
//       <div>
//         <button onClick={() => changeLanguage('en')}>English</button>
//         <button onClick={() => changeLanguage('es')}>Spanish</button>
//         <button onClick={() => changeLanguage('hi')}>Hindi</button>
//         <button onClick={() => changeLanguage('pt')}>Portuguese</button>
//         <button onClick={() => changeLanguage('ta')}>Tamil</button>
//         <button onClick={() => changeLanguage('bn')}>Bengali</button>
//         <button onClick={() => changeLanguage('fr')}>French</button>
//       </div>
//       <div>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button onClick={handleSendOtp} disabled={isOtpSent}>Send OTP</button>
//       </div>
//       {isOtpSent && (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button onClick={handleVerifyOtp}>Verify OTP and Change Language</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageSwitcher;

//second version
// import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import axios from 'axios';
// import './LanguageSwitcher.css'; // Import the new CSS file

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [theme, setTheme] = useState('light'); // Default theme

//   useEffect(() => {
//     switch (selectedLanguage) {
//       case 'es':
//         setTheme('dark');
//         break;
//       case 'hi':
//         setTheme('light');
//         break;
//       case 'pt':
//         setTheme('dark');
//         break;
//       case 'ta':
//         setTheme('light');
//         break;
//       case 'bn':
//         setTheme('dark');
//         break;
//       case 'fr':
//         setTheme('light');
//         break;
//       case 'en':
//       default:
//         setTheme('light');
//         break;
//     }
//   }, [selectedLanguage]);

//   const changeLanguage = (lng) => {
//     setSelectedLanguage(lng);
//   };

//   // const handleSendOtp = () => {
//   //   axios.post('http://localhost:5000/api/otp/sendOtp', { email })
//   //     .then(response => {
//   //       alert('OTP sent to your email.');
//   //       setIsOtpSent(true);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error sending OTP:', error);
//   //     });
//   // };

//   const handleSendOtp = () => {
//     axios.post('http://localhost:5000/api/otp/sendOtp', { email }, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => {
//       alert('OTP sent to your email.');
//       setIsOtpSent(true);
//     })
//     .catch(error => {
//       console.error('Error sending OTP:', error);
//     });
//   };
  

//   const handleVerifyOtp = () => {
//     axios.post('http://localhost:5000/api/otp/verifyOtp', { email, otp })
//       .then(response => {
//         i18n.changeLanguage(selectedLanguage);
//         alert('Language changed successfully!');
//       })
//       .catch(error => {
//         console.error('Error verifying OTP:', error);
//         alert('Invalid OTP');
//       });
//   };

//   return (
//     <div className={`language-switcher-container ${theme}-theme`}>
//       <div>
//         <button onClick={() => changeLanguage('en')}>English</button>
//         <button onClick={() => changeLanguage('es')}>Spanish</button>
//         <button onClick={() => changeLanguage('hi')}>Hindi</button>
//         <button onClick={() => changeLanguage('pt')}>Portuguese</button>
//         <button onClick={() => changeLanguage('ta')}>Tamil</button>
//         <button onClick={() => changeLanguage('bn')}>Bengali</button>
//         <button onClick={() => changeLanguage('fr')}>French</button>
//       </div>
//       <div>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button onClick={handleSendOtp} disabled={isOtpSent}>Send OTP</button>
//       </div>
//       {isOtpSent && (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button onClick={handleVerifyOtp}>Verify OTP and Change Language</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageSwitcher;



//third version:
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './LanguageSwitcher.css'; // Import the CSS file

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    // Apply theme based on selected language
    switch (selectedLanguage) {
      case 'es':
      case 'pt':
      case 'bn':
        setTheme('dark');
        break;
      case 'hi':
      case 'ta':
      case 'fr':
      case 'en':
      default:
        setTheme('light');
        break;
    }
  }, [selectedLanguage]);

  const changeLanguage = (lng) => {
    setSelectedLanguage(lng);
  };

  const handleSendOtp = () => {
    axios.post('http://localhost:5000/api/otp/generateOtp', { email }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      alert('OTP sent to your email.');
      setIsOtpSent(true);
    })
    .catch(error => {
      console.error('Error sending OTP:', error);
    });
  };

  const handleVerifyOtp = () => {
    axios.post('http://localhost:5000/api/otp/validateOtp', { email, otp })
      .then(response => {
        i18n.changeLanguage(selectedLanguage);
        alert('Language changed successfully!');
      })
      .catch(error => {
        console.error('Error verifying OTP:', error);
        alert('Invalid OTP');
      });
  };

  return (
    <div className={`language-switcher-container ${theme}-theme`}>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Spanish</button>
        <button onClick={() => changeLanguage('hi')}>Hindi</button>
        <button onClick={() => changeLanguage('pt')}>Portuguese</button>
        <button onClick={() => changeLanguage('ta')}>Tamil</button>
        <button onClick={() => changeLanguage('bn')}>Bengali</button>
        <button onClick={() => changeLanguage('fr')}>French</button>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSendOtp} disabled={isOtpSent}>Send OTP</button>
      </div>
      {isOtpSent && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP and Change Language</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
