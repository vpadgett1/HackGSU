// import '../App.css';
// import React, {
//   useState,
//   useEffect,
// } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import SingleOptionPopUp from '../Components/SingleOptionPopUp';

// const OnboardingPage = () => {
//   // set state
//   const [selectedButton, setSelectedButton] = useState('none');
//   const [showMessage, setShowMessage] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');

//   const navigate = useNavigate();
//   // deconstruct props

//   // TODO: fetch data from backend
//   useEffect(() => {
//     // TODO: Render component
//   }, []);

//   const createStudentUserAccount = async () => {
//     // get input
//     const zipcode = document.getElementById('zipCodeInput').value;
//     const username = document.getElementById('regularUserName').value;

//     // send to database, wait until db responds before continueing
//     await fetch(`/createAccount?name=${name}&education=${education}&class=${class}`, {
//       method: 'POST',
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         // go to next page
//         if (result.status && result.status === 200) {
//           if (result.newAccountCreated) {
//             navigate('/module');
//           } else { // show alert
//             setAlertMessage(result.message);
//             setShowMessage(true);
//           }
//         }
//       })
//       .catch((response) => console.log(response));
//   };

//   function renderStudentUserQuestions() {
//     return (
//       <>
//         <div>Your Name:</div>
//         <input type="text" placeholder="Name" id="Name" maxLength={20} />
//         <div>Education Level:</div>
//         <select data-placeholder="Choose a Grade Level:">
//           <option>Kindergarden</option>
//           <option>1st Grade</option>
//           <option>2nd Grade</option>
//           <option>3rd Grade</option>
//           <option>4th Grade</option>
//           <option>5th Grade</option>
//         </select>
//         <div>Class:</div>
//         <input type="text" placeholder="class" id="class" maxLength={100} />
//         <div>Teacher Name:</div>
//         <input type="text" placeholder="teacher_name" id="teacher_name" maxLength={100} />
//         <div>Teacher Email:</div>
//         <input type="text" placeholder="teacher_email" id="teacher_email" maxLength={100} />
//         <div>Parent Name:</div>
//         <input type="text" placeholder="parent_name" id="parent_name" maxLength={100} />
//         <div>Parent Email:</div>
//         <input type="text" placeholder="parent_email" id="parent_email" maxLength={100} />
//         <div>Parent's Preferred Language:</div>
//         <select data-placeholder="Choose a Language...">
//           <option value="Afrikaans">Afrikaans</option>
//           <option value="Albanian">Albanian</option>
//           <option value="Arabic">Arabic</option>
//           <option value="Armenian">Armenian</option>
//           <option value="Basque">Basque</option>
//           <option value="Bengali">Bengali</option>
//           <option value="Bulgarian">Bulgarian</option>
//           <option value="Catalan">Catalan</option>
//           <option value="Cambodian">Cambodian</option>
//           <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
//           <option value="Croatian">Croatian</option>
//           <option value="Czech">Czech</option>
//           <option value="Danish">Danish</option>
//           <option value="Dutch">Dutch</option>
//           <option value="English">English</option>
//           <option value="Estonian">Estonian</option>
//           <option value="Fiji">Fiji</option>
//           <option value="Finnish">Finnish</option>
//           <option value="French">French</option>
//           <option value="Georgian">Georgian</option>
//           <option value="German">German</option>
//           <option value="Greek">Greek</option>
//           <option value="Gujarati">Gujarati</option>
//           <option value="Hebrew">Hebrew</option>
//           <option value="Hindi">Hindi</option>
//           <option value="Hungarian">Hungarian</option>
//           <option value="Icelandic">Icelandic</option>
//           <option value="Indonesian">Indonesian</option>
//           <option value="Irish">Irish</option>
//           <option value="Italian">Italian</option>
//           <option value="Japanese">Japanese</option>
//           <option value="Javanese">Javanese</option>
//           <option value="Korean">Korean</option>
//           <option value="Latin">Latin</option>
//           <option value="Latvian">Latvian</option>
//           <option value="Lithuanian">Lithuanian</option>
//           <option value="Macedonian">Macedonian</option>
//           <option value="Malay">Malay</option>
//           <option value="Malayalam">Malayalam</option>
//           <option value="Maltese">Maltese</option>
//           <option value="Maori">Maori</option>
//           <option value="Marathi">Marathi</option>
//           <option value="Mongolian">Mongolian</option>
//           <option value="Nepali">Nepali</option>
//           <option value="Norwegian">Norwegian</option>
//           <option value="Persian">Persian</option>
//           <option value="Polish">Polish</option>
//           <option value="Portuguese">Portuguese</option>
//           <option value="Punjabi">Punjabi</option>
//           <option value="Quechua">Quechua</option>
//           <option value="Romanian">Romanian</option>
//           <option value="Russian">Russian</option>
//           <option value="Samoan">Samoan</option>
//           <option value="Serbian">Serbian</option>
//           <option value="Slovak">Slovak</option>
//           <option value="Slovenian">Slovenian</option>
//           <option value="Spanish">Spanish</option>
//           <option value="Swahili">Swahili</option>
//           <option value="Swedish ">Swedish </option>
//           <option value="Tamil">Tamil</option>
//           <option value="Tatar">Tatar</option>
//           <option value="Telugu">Telugu</option>
//           <option value="Thai">Thai</option>
//           <option value="Tibetan">Tibetan</option>
//           <option value="Tonga">Tonga</option>
//           <option value="Turkish">Turkish</option>
//           <option value="Ukrainian">Ukrainian</option>
//           <option value="Urdu">Urdu</option>
//           <option value="Uzbek">Uzbek</option>
//           <option value="Vietnamese">Vietnamese</option>
//           <option value="Welsh">Welsh</option>
//           <option value="Xhosa">Xhosa</option>
//       </select>

//         <br />
//         <button type="button" onClick={createStudentUserAccount} className="continueButton">Continue</button>
//       </>
//     );
//   }

//   const createTeacherUserAccount = async () => {
//     // get input
//     const yelpID = document.getElementById('yelpRestaurantID').value;
//     const zipcode = document.getElementById('zipCodeInput').value;
//     const username = document.getElementById('merchantUserName').value;

//     // send to database, wait until db responds before continueing
//     await fetch(`/createAccount?zipcode=${zipcode}&yelpID=${yelpID}&username=${username}`, {
//       method: 'POST',
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         if (result.status && result.status === 200) {
//           if (result.newAccountCreated) {
//             navigate('/merchant');
//           } else { // show alert
//             setAlertMessage(result.message);
//             setShowMessage(true);
//           }
//         }
//       })
//       .catch((response) => console.log(response));
//   };

//   function renderTeacherUserQuestions() {
//     return (
//       <>
//         <div>Please enter your zip code</div>
//         <input type="text" placeholder="Zip Code" id="zipCodeInput" maxLength={20} />
//         <div>Please enter your yelp restaurant id</div>
//         <input type="text" placeholder="Yelp Restaurant ID" id="yelpRestaurantID" maxLength={100} />
//         <div>Please enter a username</div>
//         <input type="text" placeholder="Username" id="merchantUserName" maxLength={100} />
//         <br />
//         <button type="button" onClick={createTeacherUserAccount} className="continueButton">Continue</button>
//       </>
//     );
//   }

//   function onUserChoice(choice) {
//     setSelectedButton(choice);
//   }

//   function renderRegularOrMerchantButtons() {
//     return (
//       <div className="userTypeButtons">
//         <button type="button" onClick={() => onUserChoice('Student')} className={selectedButton === 'Student' ? 'selectedButton' : 'regularButton'}>Student</button>
//         <button type="button" onClick={() => onUserChoice('Teacher')} className={selectedButton === 'Teacher' ? 'selectedButton' : 'regularButton'}>Teacher</button>
//         <button type="button" onClick={() => onUserChoice('Parent')} className={selectedButton === 'Parent' ? 'selectedButton' : 'regularButton'}>Parent</button>
//       </div>
//     );
//   }

//   function renderBody() {
//     switch (selectedButton) {
//         case 'Student':
//             return renderStudentUserQuestions();
//         case 'Teacher':
//             return renderTeacherUserQuestions();
//         case 'Parent':
//             return renderParentUserQuestions();
//         default:
//             return <></>;
//     }
//   }

//   const popUpAction = () => {
//     setShowMessage(false);
//   };

//   function renderMessage() {
//     if (showMessage) {
//       return (
//         <SingleOptionPopUp
//           message={alertMessage}
//           buttonAction={popUpAction}
//           buttonActionText="OK"
//         />
//       );
//     }
//     return (<></>);
//   }

//   return (
//     <div className="onboardingPage">
//       {renderMessage()}
//       {renderRegularOrMerchantButtons()}
//       {renderBody()}
//     </div>
//   );
// };

// export default OnboardingPage;

// // TODO: PropTypes
// OnboardingPage.propTypes = {
//   history: PropTypes.shape(
//     { replace: PropTypes.func },
//   ).isRequired,
// };
