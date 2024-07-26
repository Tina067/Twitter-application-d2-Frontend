// import React,{useState} from 'react';
// import {Avatar, Button} from "@mui/material";
// // import AddPhotoAlternateIcon from "@mui/material/AddPhotoAlternateIcon";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import "./TweetBox.css";
// import axios from 'axios';
// // import useLoggedInUser from '../hooks/useLoggedInUser';
// import useLoggedInUser from '../../../hooks/useLoggedInUser';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';

//  const TweetBox = () => {
//     const [post, setPost] = useState('');
//     const [imageURL, setImageURL] = useState('');
//     const [isLoading, setIsLoading] = useState('');
//     const [name, setName] = useState('');
//     const [username, setUsername] = useState('');
//     const loggedInUser = useLoggedInUser(); // Call the custom hook without destructuring
//     // console.log(loggedInUser);
//     const [user] = useAuthState(auth);
//     const email = user?.email;

//     const userProfilePic = loggedInUser[0]?.profileImage?loggedInUser[0]?.profileImage:
//     "https://cdn.pixabay.com/2016/08/09/17/avatar-1577909_960_720.png"

//     const handleUploadImage = (e) => {
//       setIsLoading(true);
//       const image = e.target.files[0];
//       const formData = new FormData();
//       formData.set('image', image);

//       axios.post("https://api.imgbb.com/1/upload?key=138f6c7e7edf0ddef110944c4e606c6a", formData)
//       .then(res=>{
//         setImageURL(res.data.data.display_url);
//         console.log(res.data.data.display_url);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setIsLoading(false);
//       })
//     }

//     const handleTweet = (e) => {
//       e.preventDefault();
//       if(user.providerData[0].providerId ==='password'){
//         fetch(`https://twitter-application-d2.onrender.com/loggedInUser?email=${email}`)
//         .then(res => res.json())
//         .then(data => {
//             setName(data[0]?.name)
//             setUsername(data[0]?.username)
//         })
//         .catch(error => {
//             console.error('Error fetching logged-in user:', error);
//         });
//       }else{
//         setName(user?.displayName)
//         setUsername(email?.split('@')[0])
//       }
//       if(name) {
//         console.log("Hii1");
//         const userPost = {
//           profilePhoto:userProfilePic,
//           post: post,
//           photo: imageURL,
//           username:username,
//           name:name,
//           email:email,
//         }
//         console.log(userPost);
//         setPost('');
//         setImageURL('');

//         fetch(`https://twitter-application-d2.onrender.com/post`, {
//           method: "POST",
//           headers: {
//             'content-type': 'application/json'
//           },
//           body: JSON.stringify(userPost),
//         })
//            .then(res => res.json())
//            .then(data => {
//             console.log(data);
//            })
//       }
//     }

    

//   return (
//     <div className='tweetBox'>
//        <form onSubmit={handleTweet}>
//         <div className='tweetBox__input'>
//         <Avatar src={userProfilePic} />
//             <input 
//             type="text"
//             placeholder="What's happening?"
//             onChange={(e) => setPost(e.target.value)}
//             value={post}
//             required
//             />
//         </div>

//         <div className="imageIcon_tweetButton">
//          <label htmlFor='image' className='imageIcon'>
//              {
//               isLoading ? <p>Uploading image</p> : <p>{imageURL ? 'image uploaded': <AddPhotoAlternateIcon /> }</p>
//              }
//          </label>
//          <input 
//              type="file" 
//              id="image" 
//              className='imageInput'
//              onChange={handleUploadImage}
//              />
//          <Button className='tweetBox__tweetButton' type="submit">
//             Tweet
//          </Button>
//         </div>
//        </form>
//     </div>
//   )
// }
// export default TweetBox;



//second version
// import React, { useState } from 'react';
// import { Avatar, Button} from "@mui/material";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import VideoCallIcon from '@mui/icons-material/VideoCall';
// import "./TweetBox.css";
// import axios from 'axios';
// import useLoggedInUser from '../../../hooks/useLoggedInUser';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
// import OTPInput from '../../../OTPInput'; // Adjust the path based on your folder structure

// const TweetBox = () => {
//     const [post, setPost] = useState('');
//     const [imageURL, setImageURL] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [name, setName] = useState('');
//     const [username, setUsername] = useState('');
//     const [tweetVideo, setTweetVideo] = useState('');
//     const [showOTP, setShowOTP] = useState(false);
//     const [isVerified, setIsVerified] = useState(false);

//     const loggedInUser = useLoggedInUser(); // Call the custom hook without destructuring
//     const [user] = useAuthState(auth);
//     const email = user?.email;

//     const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage :
//         "https://cdn.pixabay.com/2016/08/09/17/avatar-1577909_960_720.png"

//     const handleUploadImage = (e) => {
//         setIsLoading(true);
//         const image = e.target.files[0];
//         const formData = new FormData();
//         formData.set('image', image);

//         axios.post("https://api.imgbb.com/1/upload?key=138f6c7e7edf0ddef110944c4e606c6a", formData)
//             .then(res => {
//                 setImageURL(res.data.data.display_url);
//                 console.log(res.data.data.display_url);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setIsLoading(false);
//             })
//     }

//     const handleVideoChange = (e) => {
//         const file = e.target.files[0];
//         if (file && file.size <= 10485760 && file.type.startsWith('video/')) {
//             setTweetVideo(URL.createObjectURL(file));
//         } else {
//             alert('Video must be less than 10MB and in a valid video format.');
//         }
//     };

//     const handleTweet = (e) => {
//         e.preventDefault();
//         if (!isVerified) {
//             setShowOTP(true);
//         } else {
//             if (user.providerData[0].providerId === 'password') {
//                 fetch(`https://twitter-application-d2.onrender.com/loggedInUser?email=${email}`)
//                     .then(res => res.json())
//                     .then(data => {
//                         setName(data[0]?.name)
//                         setUsername(data[0]?.username)
//                     })
//                     .catch(error => {
//                         console.error('Error fetching logged-in user:', error);
//                     });
//             } else {
//                 setName(user?.displayName)
//                 setUsername(email?.split('@')[0])
//             }
//             if (name) {
//                 const userPost = {
//                     profilePhoto: userProfilePic,
//                     post: post,
//                     photo: imageURL,
//                     video: tweetVideo,
//                     username: username,
//                     name: name,
//                     email: email,
//                 }
//                 setPost('');
//                 setImageURL('');
//                 setTweetVideo('');
//                 setShowOTP(false);
//                 setIsVerified(false);

//                 fetch(`https://twitter-application-d2.onrender.com/post`, {
//                     method: "POST",
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(userPost),
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                     })
//             }
//         }
//     }

//     const handleOTPVerify = (otp) => {
//         // Add your OTP verification logic here
//         if (otp === '123456') { // Simulate a successful OTP verification
//             setIsVerified(true);
//             setShowOTP(false);
//             handleTweet(new Event('submit'));
//         }
//     };

//     return (
//         <div className='tweetBox'>
//             <form onSubmit={handleTweet}>
//                 <div className='tweetBox__input'>
//                     <Avatar src={userProfilePic} />
//                     <input
//                         type="text"
//                         placeholder="What's happening?"
//                         onChange={(e) => setPost(e.target.value)}
//                         value={post}
//                         required
//                     />
//                 </div>

//                 <div className="imageIcon_tweetButton">
//                     <label htmlFor='image' className='imageIcon'>
//                         {
//                             isLoading ? <p>Uploading image</p> : <p>{imageURL ? 'Image uploaded' : <AddPhotoAlternateIcon />}</p>
//                         }
//                     </label>
//                     <input
//                         type="file"
//                         id="image"
//                         className='imageInput'
//                         onChange={handleUploadImage}
//                     />
//                     <label htmlFor='video' className='imageIcon'>
//                         <VideoCallIcon />
//                     </label>
//                     <input
//                         type="file"
//                         id="video"
//                         className='imageInput'
//                         onChange={handleVideoChange}
//                         accept="video/*"
//                     />
//                     <Button className='tweetBox__tweetButton' type="submit">
//                         Tweet
//                     </Button>
//                 </div>
//             </form>
//             {showOTP && <OTPInput onVerify={handleOTPVerify} />}
//         </div>
//     )
// }
// export default TweetBox;


//third version

// import React, { useState } from 'react';
// import { Avatar, Button } from "@mui/material";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import VideoCallIcon from '@mui/icons-material/VideoCall';
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';
// import useLoggedInUser from '../../../hooks/useLoggedInUser';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
// import OTPInput from '../../../OTPInput'; // Adjust the path based on your folder structure
// import "./TweetBox.css";

// const stripePromise = loadStripe('your_publishable_key_here'); // Replace with your Stripe publishable key

// const TweetBox = () => {
//     const [post, setPost] = useState('');
//     const [imageURL, setImageURL] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [name, setName] = useState('');
//     const [username, setUsername] = useState('');
//     const [tweetVideo, setTweetVideo] = useState('');
//     const [showOTP, setShowOTP] = useState(false);
//     const [isVerified, setIsVerified] = useState(false);

//     const loggedInUser = useLoggedInUser(); // Call the custom hook without destructuring
//     const [user] = useAuthState(auth);
//     const email = user?.email;

//     const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage :
//         "https://cdn.pixabay.com/2016/08/09/17/avatar-1577909_960_720.png"

//     const handleUploadImage = (e) => {
//         setIsLoading(true);
//         const image = e.target.files[0];
//         const formData = new FormData();
//         formData.set('image', image);

//         axios.post("https://api.imgbb.com/1/upload?key=138f6c7e7edf0ddef110944c4e606c6a", formData)
//             .then(res => {
//                 setImageURL(res.data.data.display_url);
//                 console.log(res.data.data.display_url);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setIsLoading(false);
//             })
//     }

//     const handleVideoChange = (e) => {
//         const file = e.target.files[0];
//         if (file && file.size <= 10485760 && file.type.startsWith('video/')) {
//             setTweetVideo(URL.createObjectURL(file));
//         } else {
//             alert('Video must be less than 10MB and in a valid video format.');
//         }
//     };

//     const handleTweet = (e) => {
//         e.preventDefault();
//         if (!isVerified) {
//             setShowOTP(true);
//         } else {
//             if (user.providerData[0].providerId === 'password') {
//                 fetch(`https://twitter-application-d2.onrender.com/loggedInUser?email=${email}`)
//                     .then(res => res.json())
//                     .then(data => {
//                         setName(data[0]?.name)
//                         setUsername(data[0]?.username)
//                     })
//                     .catch(error => {
//                         console.error('Error fetching logged-in user:', error);
//                     });
//             } else {
//                 setName(user?.displayName)
//                 setUsername(email?.split('@')[0])
//             }
//             if (name) {
//                 const userPost = {
//                     profilePhoto: userProfilePic,
//                     post: post,
//                     photo: imageURL,
//                     video: tweetVideo,
//                     username: username,
//                     name: name,
//                     email: email,
//                 }
//                 setPost('');
//                 setImageURL('');
//                 setTweetVideo('');
//                 setShowOTP(false);
//                 setIsVerified(false);

//                 fetch(`https://twitter-application-d2.onrender.com/post`, {
//                     method: "POST",
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(userPost),
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                     })
//             }
//         }
//     }

//     const handleOTPVerify = (otp) => {
//         // Add your OTP verification logic here
//         if (otp === '123456') { // Simulate a successful OTP verification
//             setIsVerified(true);
//             setShowOTP(false);
//             handleTweet(new Event('submit'));
//         }
//     };

//     const handleSubscribe = async () => {
//         const response = await fetch('https://your-backend-url/create-checkout-session', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ priceId: 'your_price_id_here' }), // Replace with your actual price ID
//         });
//         const sessionId = await response.json();
//         const stripe = await stripePromise;
//         const { error } = await stripe.redirectToCheckout({ sessionId: sessionId.id });
//         if (error) {
//             console.error('Error redirecting to checkout:', error);
//         }
//     };

//     return (
//         <div className='tweetBox'>
//             <form onSubmit={handleTweet}>
//                 <div className='tweetBox__input'>
//                     <Avatar src={userProfilePic} />
//                     <input
//                         type="text"
//                         placeholder="What's happening?"
//                         onChange={(e) => setPost(e.target.value)}
//                         value={post}
//                         required
//                     />
//                 </div>

//                 <div className="imageIcon_tweetButton">
//                     <label htmlFor='image' className='imageIcon'>
//                         {
//                             isLoading ? <p>Uploading image</p> : <p>{imageURL ? 'Image uploaded' : <AddPhotoAlternateIcon />}</p>
//                         }
//                     </label>
//                     <input
//                         type="file"
//                         id="image"
//                         className='imageInput'
//                         onChange={handleUploadImage}
//                     />
//                     <label htmlFor='video' className='imageIcon'>
//                         <VideoCallIcon />
//                     </label>
//                     <input
//                         type="file"
//                         id="video"
//                         className='imageInput'
//                         onChange={handleVideoChange}
//                         accept="video/*"
//                     />
//                     <Button className='tweetBox__tweetButton' type="submit">
//                         Tweet
//                     </Button>
//                 </div>
//             </form>
//             <Button className='subscribeButton' onClick={handleSubscribe}>
//                 Subscribe
//             </Button>
//             {showOTP && <OTPInput onVerify={handleOTPVerify} />}
//         </div>
//     )
// }

// export default TweetBox;


//forth version
// import React, { useState } from 'react';
// import { Avatar, Button } from "@mui/material";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// // import VideoCameraIcon from '@mui/icons-material/VideoCamera';
// import VideoCameraIcon from '@mui/icons-material/VideoCameraBack';

// import "./TweetBox.css";
// import axios from 'axios';
// import useLoggedInUser from '../../../hooks/useLoggedInUser';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';

// const TweetBox = () => {
//     const [post, setPost] = useState('');
//     const [imageURL, setImageURL] = useState('');
//     const [videoURL, setVideoURL] = useState('');
//     const [isLoading, setIsLoading] = useState('');
//     const [name, setName] = useState('');
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [otp, setOtp] = useState('');
//     const [showVideoForm, setShowVideoForm] = useState(false);
//     const [isOtpSent, setIsOtpSent] = useState(false);
//     const loggedInUser = useLoggedInUser(); 
//     const [user] = useAuthState(auth);
//     const userEmail = user?.email;

//     const userProfilePic = loggedInUser[0]?.profileImage || "https://cdn.pixabay.com/2016/08/09/17/avatar-1577909_960_720.png";

//     const handleUploadImage = (e) => {
//         setIsLoading(true);
//         const image = e.target.files[0];
//         const formData = new FormData();
//         formData.set('image', image);

//         axios.post("https://api.imgbb.com/1/upload?key=YOUR_IMG_BB_KEY", formData)
//             .then(res => {
//                 setImageURL(res.data.data.display_url);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setIsLoading(false);
//             });
//     };

//     const handleSendOtp = () => {
//         axios.post('http://localhost:5000/sendOtp', { email })
//             .then(response => {
//                 alert('OTP sent to your email.');
//                 setIsOtpSent(true);
//             })
//             .catch(error => {
//                 console.error('Error sending OTP:', error);
//             });
//     };

//     const handleUploadVideo = (e) => {
//         e.preventDefault();
//         const video = e.target.files[0];
//         const formData = new FormData();
//         formData.append('video', video);
//         formData.append('email', email);
//         formData.append('otp', otp);

//         axios.post('http://localhost:5000/uploadVideo', formData)
//             .then(response => {
//                 setVideoURL(URL.createObjectURL(video));
//                 alert('Video uploaded successfully!');
//             })
//             .catch(error => {
//                 console.error('Error uploading video:', error);
//             });
//     };

//     const handleTweet = (e) => {
//         e.preventDefault();
//         if (user.providerData[0].providerId === 'password') {
//             fetch(`http://localhost:5000/loggedInUser?email=${userEmail}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setName(data[0]?.name);
//                     setUsername(data[0]?.username);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching logged-in user:', error);
//                 });
//         } else {
//             setName(user?.displayName);
//             setUsername(userEmail?.split('@')[0]);
//         }

//         if (name) {
//             const userPost = {
//                 profilePhoto: userProfilePic,
//                 post: post,
//                 photo: imageURL,
//                 username: username,
//                 name: name,
//                 email: userEmail,
//             };
//             setPost('');
//             setImageURL('');

//             fetch(`http://localhost:5000/post`, {
//                 method: "POST",
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(userPost),
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                 });
//         }
//     };

//     return (
//         <div className='tweetBox'>
//             <form onSubmit={handleTweet}>
//                 <div className='tweetBox__input'>
//                     <Avatar src={userProfilePic} />
//                     <input
//                         type="text"
//                         placeholder="What's happening?"
//                         onChange={(e) => setPost(e.target.value)}
//                         value={post}
//                         required
//                     />
//                 </div>

//                 <div className="imageIcon_tweetButton">
//                     <label htmlFor='image' className='imageIcon'>
//                         {isLoading ? <p>Uploading image</p> : <p>{imageURL ? 'Image uploaded' : <AddPhotoAlternateIcon />}</p>}
//                     </label>
//                     <input
//                         type="file"
//                         id="image"
//                         className='imageInput'
//                         onChange={handleUploadImage}
//                     />
//                     <label htmlFor='video' className='videoIcon'>
//                         <VideoCameraIcon onClick={() => setShowVideoForm(true)}/>
//                     </label>
//                     <input
//                         type="file"
//                         id="video"
//                         className='videoInput'
//                         onChange={handleUploadVideo}
//                         style={{ display: 'none' }}
//                     />
//                     <Button
//                         className='tweetBox__tweetButton'
//                         type="submit"
//                         onClick={() => setShowVideoForm(true)}
//                     >
//                         Tweet
//                     </Button>
//                 </div>

//                 {showVideoForm && (
//                     <div className='videoForm'>
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <Button
//                             onClick={handleSendOtp}
//                             disabled={isOtpSent}
//                         >
//                             Send OTP
//                         </Button>
//                         {isOtpSent && (
//                             <>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter OTP"
//                                     value={otp}
//                                     onChange={(e) => setOtp(e.target.value)}
//                                 />
//                                 <input
//                                     type="file"
//                                     id="video"
//                                     onChange={handleUploadVideo}
//                                 />
//                                 <Button type="submit">
//                                     Upload Video
//                                 </Button>
//                             </>
//                         )}
//                     </div>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default TweetBox;


//fifth version
import React, { useState } from 'react';
import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCameraIcon from '@mui/icons-material/VideoCameraBack';
import axios from 'axios';
import useLoggedInUser from '../../../hooks/useLoggedInUser'; // Return the logged-in user state
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import "./TweetBox.css";

const TweetBox = () => {
    const [post, setPost] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const [isLoading, setIsLoading] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showVideoForm, setShowVideoForm] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const loggedInUser = useLoggedInUser();
    const [user] = useAuthState(auth);
    const userEmail = user?.email;

    const userProfilePic = loggedInUser[0]?.profileImage || "https://cdn.pixabay.com/2016/08/09/17/avatar-1577909_960_720.png";

    const handleUploadImage = (e) => {
        setIsLoading(true);
        const image = e.target.files[0];
        const formData = new FormData();
        formData.set('image', image);

        axios.post("https://api.imgbb.com/1/upload?key=YOUR_IMG_BB_KEY", formData)
            .then(res => {
                setImageURL(res.data.data.display_url);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    };

    const handleSendOtp = () => {
        axios.post('https://twitter-application-d2.onrender.com/sendOtp', { email })
            .then(response => {
                alert('OTP sent to your email.');
                setIsOtpSent(true);
            })
            .catch(error => {
                console.error('Error sending OTP:', error);
            });
    };

    // const handleVerifyOtp = () => {
    //     // Replace this with actual OTP verification logic
    //     if (otp === '123456') { // Simulate OTP verification
    //         setIsVerified(true);
    //         setShowVideoForm(true); // Show video upload form
    //     } else {
    //         alert('Invalid OTP. Please try again.');
    //     }
    // };

    // const handleVerifyOtp = () => {
    //     axios.post('http://localhost:5000/verifyOtp', { email, otp })
    //         .then(response => {
    //             if (response.data.success) {
    //                 setIsVerified(true);
    //                 setShowVideoForm(true);
    //             } else {
    //                 alert('Invalid OTP. Please try again.');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error verifying OTP:', error);
    //             alert('An error occurred while verifying OTP.');
    //         });
    // };

    const handleVerifyOtp = () => {
        axios.post('https://twitter-application-d2.onrender.com/verifyOtp', { email, otp })
            .then(response => {
                if (response.status === 200 && response.data.success) {
                    setIsVerified(true);
                    setShowVideoForm(true);
                } else {
                    alert(response.data.message || 'Invalid OTP. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error verifying OTP:', error);
                alert('An error occurred while verifying OTP.');
            });
    };
    

    // const handleUploadVideo = (e) => {
    //     e.preventDefault();
    //     const video = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append('video', video);
    //     formData.append('email', email);
    //     formData.append('otp', otp);

    //     axios.post('http://localhost:5000/uploadVideo', formData)
    //         .then(response => {
    //             setVideoURL(URL.createObjectURL(video));
    //             alert('Video uploaded successfully!');
    //         })
    //         .catch(error => {
    //             console.error('Error uploading video:', error);
    //         });
    // };
    const handleUploadVideo = (e) => {
        e.preventDefault();
        const video = e.target.files[0];
    
        // Check if video is defined
        if (!video) {
            alert('No video file selected.');
            return;
        }
    
        const formData = new FormData();
        formData.append('video', video);
        formData.append('email', email);
        formData.append('otp', otp);
    
        axios.post('https://twitter-application-d2.onrender.com/uploadVideo', formData)
            .then(response => {
                setVideoURL(URL.createObjectURL(video));
                alert('Video uploaded successfully!');
            })
            .catch(error => {
                console.error('Error uploading video:', error);
            });
    };
    
    
    // const handleTweet = (e) => {
    //     e.preventDefault();
    //     if (user.providerData[0].providerId === 'password') {
    //         fetch(`http://localhost:5000/loggedInUser?email=${userEmail}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setName(data[0]?.name);
    //                 setUsername(data[0]?.username);
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching logged-in user:', error);
    //             });
    //     } else {
    //         setName(user?.displayName);
    //         setUsername(userEmail?.split('@')[0]);
    //     }

    //     if (name) {
    //         const userPost = {
    //             profilePhoto: userProfilePic,
    //             post: post,
    //             photo: imageURL,
    //             video: videoURL,
    //             username: username,
    //             name: name,
    //             email: userEmail,
    //         };
    //         setPost('');
    //         setImageURL('');
    //         setVideoURL('');

    //         fetch(`http://localhost:5000/post`, {
    //             method: "POST",
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(userPost),
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //             });
    //     }
    // };

    const handleTweet = (e) => {
        e.preventDefault();
        
        if (!user) {
            alert('User is not logged in.');
            return;
        }
        
        const providerId = user.providerData?.[0]?.providerId;
    
        if (providerId === 'password') {
            fetch(`https://twitter-application-d2.onrender.com/loggedInUser?email=${userEmail}`)
                .then(res => res.json())
                .then(data => {
                    setName(data[0]?.name || '');
                    setUsername(data[0]?.username || '');
                })
                .catch(error => {
                    console.error('Error fetching logged-in user:', error);
                });
        } else {
            setName(user?.displayName || '');
            setUsername(userEmail?.split('@')[0] || '');
        }
    
        if (name) {
            const userPost = {
                profilePhoto: userProfilePic,
                post: post,
                photo: imageURL,
                video: videoURL,
                username: username,
                name: name,
                email: userEmail,
            };
    
            setPost('');
            setImageURL('');
            setVideoURL('');
    
            fetch(`https://twitter-application-d2.onrender.com/post`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userPost),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                });
        }
    };
    
    return (
        <div className='tweetBox'>
            <form onSubmit={handleTweet}>
                <div className='tweetBox__input'>
                    <Avatar src={userProfilePic} />
                    <input
                        type="text"
                        placeholder="What's happening?"
                        onChange={(e) => setPost(e.target.value)}
                        value={post}
                        required
                    />
                </div>

                <div className="imageIcon_tweetButton">
                    <label htmlFor='image' className='imageIcon'>
                        {isLoading ? <p>Uploading image</p> : <p>{imageURL ? 'Image uploaded' : <AddPhotoAlternateIcon />}</p>}
                    </label>
                    <input
                        type="file"
                        id="image"
                        className='imageInput'
                        onChange={handleUploadImage}
                    />

                    <label htmlFor='video' className='videoIcon'>
                        <VideoCameraIcon onClick={() => setShowVideoForm(true)} />
                    </label>

                    <Button
                        className='tweetBox__tweetButton'
                        type="submit"
                    >
                        Tweet
                    </Button>
                </div>
            </form>

            {showVideoForm && (
                <div className='videoForm'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        onClick={handleSendOtp}
                        disabled={isOtpSent}
                    >
                        Send OTP
                    </Button>
                    {isOtpSent && (
                        <>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <Button
                                onClick={handleVerifyOtp}
                            >
                                Verify OTP
                            </Button>
                            {isVerified && (
                                <>
                                    <input
                                        type="file"
                                        id="video"
                                        onChange={handleUploadVideo}
                                    />
                                    <Button
                                        onClick={handleUploadVideo}
                                    >
                                        Upload Video
                                    </Button>
                                </>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default TweetBox;
