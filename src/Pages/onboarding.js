import '../App.css';
import React, {
  useState,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleOptionPopUp from '../Components/SingleOptionPopUp';

const OnboardingPage = () => {
  // set state
  const [selectedButton, setSelectedButton] = useState('none');
  const [showMessage, setShowMessage] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();
  // deconstruct props

  // TODO: fetch data from backend
  useEffect(() => {
    // TODO: Render component
  }, []);

  const createStudentUserAccount = async () => {
    // get input
    const name = document.getElementById('name').value;
    const education = document.getElementById('education').value;
    const classroom_id = document.getElementById('classroom_id').value;
    const parent_name = document.getElementById('parent_name').value;
    const parent_email = document.getElementById('parent_email').value;
    const parent_phone = document.getElementById('parent_phone').value;
    const parent_pref_lang = document.getElementById('parent_pref_lang').value;

    // send to database, wait until db responds before continueing
    await fetch(`/createAccountStudent?name=${name}&education=${education}&classroom_id=${classroom_id}&parent_name=${parent_name}&parent_email=${parent_email}&parent_phone=${parent_phone}&parent_pref_lang=${parent_pref_lang}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((result) => {
        // go to next page
        if (result.status && result.status === 200) {
          if (result.newAccountCreated) {
            navigate('/module');
          } else { // show alert
            setAlertMessage(result.message);
            setShowMessage(true);
          }
        }
      })
      .catch((response) => console.log(response));
  };

  function renderStudentUserQuestions() {
    return (
      <>
        <div>Your Name:</div>
        <input type="text" placeholder="name" id="name" maxLength={20} />
        <div>Education Level:</div>
        <select data-placeholder="Choose a Grade Level:">
          <option>Kindergarden</option>
          <option>1st Grade</option>
          <option>2nd Grade</option>
          <option>3rd Grade</option>
          <option>4th Grade</option>
          <option>5th Grade</option>
        </select>
        <div>Classroom Code (This Will Be Given to You Buy Your Teacher to Join Their Class):</div>
        <input type="text" placeholder="classroom_id" id="classroom_id" maxLength={100} />
        <div>Parent Name:</div>
        <input type="text" placeholder="parent_name" id="parent_name" maxLength={100} />
        <div>Parent Email:</div>
        <input type="text" placeholder="parent_email" id="parent_email" maxLength={100} />
        <div>Parent Phone Number (Do Not Include Dashes):</div>
        <input type="text" placeholder="parent_phone" id="parent_phone" maxLength={10} />
        <div>Parent's Preferred Language:</div>
        <select data-placeholder="Choose a Language..." id="parent_pref_lang">
          <option value="Afrikaans">Afrikaans</option>
          <option value="Albanian">Albanian</option>
          <option value="Arabic">Arabic</option>
          <option value="Armenian">Armenian</option>
          <option value="Basque">Basque</option>
          <option value="Bengali">Bengali</option>
          <option value="Bulgarian">Bulgarian</option>
          <option value="Catalan">Catalan</option>
          <option value="Cambodian">Cambodian</option>
          <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
          <option value="Croatian">Croatian</option>
          <option value="Czech">Czech</option>
          <option value="Danish">Danish</option>
          <option value="Dutch">Dutch</option>
          <option value="English">English</option>
          <option value="Estonian">Estonian</option>
          <option value="Fiji">Fiji</option>
          <option value="Finnish">Finnish</option>
          <option value="French">French</option>
          <option value="Georgian">Georgian</option>
          <option value="German">German</option>
          <option value="Greek">Greek</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Hebrew">Hebrew</option>
          <option value="Hindi">Hindi</option>
          <option value="Hungarian">Hungarian</option>
          <option value="Icelandic">Icelandic</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Irish">Irish</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Javanese">Javanese</option>
          <option value="Korean">Korean</option>
          <option value="Latin">Latin</option>
          <option value="Latvian">Latvian</option>
          <option value="Lithuanian">Lithuanian</option>
          <option value="Macedonian">Macedonian</option>
          <option value="Malay">Malay</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Maltese">Maltese</option>
          <option value="Maori">Maori</option>
          <option value="Marathi">Marathi</option>
          <option value="Mongolian">Mongolian</option>
          <option value="Nepali">Nepali</option>
          <option value="Norwegian">Norwegian</option>
          <option value="Persian">Persian</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Quechua">Quechua</option>
          <option value="Romanian">Romanian</option>
          <option value="Russian">Russian</option>
          <option value="Samoan">Samoan</option>
          <option value="Serbian">Serbian</option>
          <option value="Slovak">Slovak</option>
          <option value="Slovenian">Slovenian</option>
          <option value="Spanish">Spanish</option>
          <option value="Swahili">Swahili</option>
          <option value="Swedish ">Swedish </option>
          <option value="Tamil">Tamil</option>
          <option value="Tatar">Tatar</option>
          <option value="Telugu">Telugu</option>
          <option value="Thai">Thai</option>
          <option value="Tibetan">Tibetan</option>
          <option value="Tonga">Tonga</option>
          <option value="Turkish">Turkish</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Urdu">Urdu</option>
          <option value="Uzbek">Uzbek</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Welsh">Welsh</option>
          <option value="Xhosa">Xhosa</option>
      </select>

        <br />
        <button type="button" onClick={createStudentUserAccount} className="continueButton">Continue</button>
      </>
    );
  }

  const createTeacherUserAccount = async () => {
    // get input
    const teacher_name = document.getElementById('name').value;
    const pre_lang_teacher = document.getElementById('yelpRestaurantID').value;
    const classroom_grade_level = document.getElementById('education').value;
    const classroom_id = document.getElementById('classroom_id').value;
    const teacher_phone = document.getElementById('teach_phone').value;

    // send to database, wait until db responds before continueing
    await fetch(`/createAccountTeacher?teacher_name=${teacher_name}&pre_lang_teacher=${pre_lang_teacher}&class_grade_lvl=${classroom_grade_level}&classroom_id=${classroom_id}&teacher_phone=${teacher_phone}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status && result.status === 200) {
          if (result.newAccountCreated) {
            navigate('/module');
          } else { // show alert
            setAlertMessage(result.message);
            setShowMessage(true);
          }
        }
      })
      .catch((response) => console.log(response));
  };

  function renderTeacherUserQuestions() {
    return (
      <>
        <div>Your Name:</div>
        <input type="text" placeholder="name" id="name" maxLength={20} />
        <div>Grade Level of Your Classroom:</div>
        <select data-placeholder="Choose a Grade Level:" id="education">
          <option>Kindergarden</option>
          <option>1st Grade</option>
          <option>2nd Grade</option>
          <option>3rd Grade</option>
          <option>4th Grade</option>
          <option>5th Grade</option>
        </select>
        <div>Classroom Code (This Will Be Given to You Buy Your Teacher to Join Their Class):</div>
        <input type="text" placeholder="classroom_id" id="classroom_id" maxLength={100} />
        <div>Your Phone Number: (Do not Include Dashes)</div>
        <input type="text" placeholder="teach_phone" id="teach_phone" maxLength={10} />
        <div>Your Preferred Language for Communications:</div>
        <select data-placeholder="Choose a Language..." id="teach_pref_lang">
          <option value="Afrikaans">Afrikaans</option>
          <option value="Albanian">Albanian</option>
          <option value="Arabic">Arabic</option>
          <option value="Armenian">Armenian</option>
          <option value="Basque">Basque</option>
          <option value="Bengali">Bengali</option>
          <option value="Bulgarian">Bulgarian</option>
          <option value="Catalan">Catalan</option>
          <option value="Cambodian">Cambodian</option>
          <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
          <option value="Croatian">Croatian</option>
          <option value="Czech">Czech</option>
          <option value="Danish">Danish</option>
          <option value="Dutch">Dutch</option>
          <option value="English">English</option>
          <option value="Estonian">Estonian</option>
          <option value="Fiji">Fiji</option>
          <option value="Finnish">Finnish</option>
          <option value="French">French</option>
          <option value="Georgian">Georgian</option>
          <option value="German">German</option>
          <option value="Greek">Greek</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Hebrew">Hebrew</option>
          <option value="Hindi">Hindi</option>
          <option value="Hungarian">Hungarian</option>
          <option value="Icelandic">Icelandic</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Irish">Irish</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Javanese">Javanese</option>
          <option value="Korean">Korean</option>
          <option value="Latin">Latin</option>
          <option value="Latvian">Latvian</option>
          <option value="Lithuanian">Lithuanian</option>
          <option value="Macedonian">Macedonian</option>
          <option value="Malay">Malay</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Maltese">Maltese</option>
          <option value="Maori">Maori</option>
          <option value="Marathi">Marathi</option>
          <option value="Mongolian">Mongolian</option>
          <option value="Nepali">Nepali</option>
          <option value="Norwegian">Norwegian</option>
          <option value="Persian">Persian</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Quechua">Quechua</option>
          <option value="Romanian">Romanian</option>
          <option value="Russian">Russian</option>
          <option value="Samoan">Samoan</option>
          <option value="Serbian">Serbian</option>
          <option value="Slovak">Slovak</option>
          <option value="Slovenian">Slovenian</option>
          <option value="Spanish">Spanish</option>
          <option value="Swahili">Swahili</option>
          <option value="Swedish ">Swedish </option>
          <option value="Tamil">Tamil</option>
          <option value="Tatar">Tatar</option>
          <option value="Telugu">Telugu</option>
          <option value="Thai">Thai</option>
          <option value="Tibetan">Tibetan</option>
          <option value="Tonga">Tonga</option>
          <option value="Turkish">Turkish</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Urdu">Urdu</option>
          <option value="Uzbek">Uzbek</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Welsh">Welsh</option>
          <option value="Xhosa">Xhosa</option>
      </select>
        <br />
        <button type="button" onClick={createTeacherUserAccount} className="continueButton">Continue</button>
      </>
    );
  }

  const createParentUserAccount = async () => {
    // get input
    const name = document.getElementById('name').value;
    const child_name = document.getElementById('child_name').value;
    const understanding = document.getElementById('understanding').value;
    const parent_phone = document.getElementById('parent_phone').value;
    const parent_pref_lang = document.getElementById('parent_pref_lang').value;

    // send to database, wait until db responds before continueing
    await fetch(`/createAccountParent?name=${name}&child_name=${child_name}&understanding=${understanding}&parent_phone=${parent_phone}&parent_pref_lang=${parent_pref_lang}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status && result.status === 200) {
          if (result.newAccountCreated) {
            navigate('/merchant');
          } else { // show alert
            setAlertMessage(result.message);
            setShowMessage(true);
          }
        }
      })
      .catch((response) => console.log(response));
  };

  function renderParentUserQuestions() {
    return (
      <>
        <div>Your Name:</div>
        <input type="text" placeholder="name" id="name" maxLength={50} />
        <div>Name of Your Child:</div>
        <input type="text" placeholder="child_name" id="child_name" maxLength={50} />
        <div>Choose Your Understanding Level of AI:</div>
        <select data-placeholder="Choose a Experience Level:" id="education">
          <option>Little to None</option>
          <option>Beginner</option>
          <option>Moderate</option>
          <option>Advanced</option>
        </select>
        <div>Your Phone Number: (Do not Include Dashes)</div>
        <input type="text" placeholder="parent_phone" id="parent_phone" maxLength={10} />
        <div>Your Preferred Language for Communications:</div>
        <select data-placeholder="Choose a Language..." id="parent_pref_lang">
          <option value="Afrikaans">Afrikaans</option>
          <option value="Albanian">Albanian</option>
          <option value="Arabic">Arabic</option>
          <option value="Armenian">Armenian</option>
          <option value="Basque">Basque</option>
          <option value="Bengali">Bengali</option>
          <option value="Bulgarian">Bulgarian</option>
          <option value="Catalan">Catalan</option>
          <option value="Cambodian">Cambodian</option>
          <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
          <option value="Croatian">Croatian</option>
          <option value="Czech">Czech</option>
          <option value="Danish">Danish</option>
          <option value="Dutch">Dutch</option>
          <option value="English">English</option>
          <option value="Estonian">Estonian</option>
          <option value="Fiji">Fiji</option>
          <option value="Finnish">Finnish</option>
          <option value="French">French</option>
          <option value="Georgian">Georgian</option>
          <option value="German">German</option>
          <option value="Greek">Greek</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Hebrew">Hebrew</option>
          <option value="Hindi">Hindi</option>
          <option value="Hungarian">Hungarian</option>
          <option value="Icelandic">Icelandic</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Irish">Irish</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Javanese">Javanese</option>
          <option value="Korean">Korean</option>
          <option value="Latin">Latin</option>
          <option value="Latvian">Latvian</option>
          <option value="Lithuanian">Lithuanian</option>
          <option value="Macedonian">Macedonian</option>
          <option value="Malay">Malay</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Maltese">Maltese</option>
          <option value="Maori">Maori</option>
          <option value="Marathi">Marathi</option>
          <option value="Mongolian">Mongolian</option>
          <option value="Nepali">Nepali</option>
          <option value="Norwegian">Norwegian</option>
          <option value="Persian">Persian</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Quechua">Quechua</option>
          <option value="Romanian">Romanian</option>
          <option value="Russian">Russian</option>
          <option value="Samoan">Samoan</option>
          <option value="Serbian">Serbian</option>
          <option value="Slovak">Slovak</option>
          <option value="Slovenian">Slovenian</option>
          <option value="Spanish">Spanish</option>
          <option value="Swahili">Swahili</option>
          <option value="Swedish ">Swedish </option>
          <option value="Tamil">Tamil</option>
          <option value="Tatar">Tatar</option>
          <option value="Telugu">Telugu</option>
          <option value="Thai">Thai</option>
          <option value="Tibetan">Tibetan</option>
          <option value="Tonga">Tonga</option>
          <option value="Turkish">Turkish</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Urdu">Urdu</option>
          <option value="Uzbek">Uzbek</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Welsh">Welsh</option>
          <option value="Xhosa">Xhosa</option>
        </select>
        <br />
        <button type="button" onClick={createParentUserAccount} className="continueButton">Continue</button>
      </>
    );
  }

  function onUserChoice(choice) {
    setSelectedButton(choice);
  }

  function renderRegularOrMerchantButtons() {
    return (
      <div className="userTypeButtons">
        <button type="button" onClick={() => onUserChoice('Student')} className={selectedButton === 'Student' ? 'selectedButton' : 'regularButton'}>Student</button>
        <button type="button" onClick={() => onUserChoice('Teacher')} className={selectedButton === 'Teacher' ? 'selectedButton' : 'regularButton'}>Teacher</button>
        <button type="button" onClick={() => onUserChoice('Parent')} className={selectedButton === 'Parent' ? 'selectedButton' : 'regularButton'}>Parent</button>
      </div>
    );
  }

  function renderBody() {
    switch (selectedButton) {
        case 'Student':
            return renderStudentUserQuestions();
        case 'Teacher':
            return renderTeacherUserQuestions();
        case 'Parent':
            return renderParentUserQuestions();
        default:
            return <></>;
    }
  }

  const popUpAction = () => {
    setShowMessage(false);
  };

  function renderMessage() {
    if (showMessage) {
      return (
        <SingleOptionPopUp
          message={alertMessage}
          buttonAction={popUpAction}
          buttonActionText="OK"
        />
      );
    }
    return (<></>);
  }

  return (
    <div className="onboardingPage">
      {renderMessage()}
      {renderRegularOrMerchantButtons()}
      {renderBody()}
    </div>
  );
};

export default OnboardingPage;

// TODO: PropTypes
OnboardingPage.propTypes = {
  history: PropTypes.shape(
    { replace: PropTypes.func },
  ).isRequired,
};
