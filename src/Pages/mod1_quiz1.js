import React, { useState } from 'react';
import '../App.css';
//import '../styling/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Card, Button, CardGroup} from 'react-bootstrap'

export default function App() {
	const questions = [
		{
			questionText: 'What are some examples of AI?',
			answerOptions: [
				{ answerText: 'Autonomous Driving', isCorrect: false },
				{ answerText: 'Drone Navigation', isCorrect: false },
				{ answerText: 'Medical Diagnosis', isCorrect: false },
				{ answerText: 'All of the Above', isCorrect: true },
			],
		},
		{
			questionText: 'What tare the types of AI Systems?',
			answerOptions: [
				{ answerText: 'Realistic and Unrealistic', isCorrect: false },
				{ answerText: 'General and Narrow', isCorrect: true },
				{ answerText: 'Supervised and Unsupervised', isCorrect: false },
				{ answerText: 'Reinforcement and method base', isCorrect: false },
			],
		},
		{
			questionText: 'How do AI Systems learn?',
			answerOptions: [
				{ answerText: 'By getting instructions from humans', isCorrect: false },
				{ answerText: 'By learning on thier own', isCorrect: false },
				{ answerText: 'Both A and B', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What does Intellegence mean?',
			answerOptions: [
				{ answerText: 'The ability to ‘think, innovate’ and acquire and apply knowledge and skills', isCorrect: true },
				{ answerText: 'The ability to not care about anything', isCorrect: false },
				{ answerText: 'The ability to have answers to all the quiz questions', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
        {
			questionText: 'What is the difference between computers and AI?',
			answerOptions: [
				{ answerText: 'Computers require coding, AI does not to run', isCorrect: false },
				{ answerText: 'Computers don’t require coding AI does to run', isCorrect: false },
				{ answerText: 'Computers require coding and AI requires examples to run', isCorrect: true },
				{ answerText: 'None of the Above', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    const transferScoretoDB = async () => {
        await fetch(`/updateAssessment1Score?score=${score}`, {
            method: 'POST',
          })
            .then((response) => response.json())
            .then((result) => {
                console.log("Successfully Recorded Score");
              }
            )
            .catch((response) => console.log(response));
    }

    function movePage(){
        return window.location.href='/homepage';
      }

      function sendScoreData(){
        const email = document.getElementById('email').value;
        fetch(`/mailer?score=${score}&num_of_questions=${questions.length}&email=${email}`, {
            method: 'POST',
          })
            .then((response) => response.json())
            .then((result) => {
              console.log("Email sent!")
            })
            .catch((response) => console.log(response));
    }

    function sendScoreDataSMS(){
        const sms = document.getElementById('phone').value;
        fetch(`/sms?score=${score}&num_of_questions=${questions.length}&sms=${sms}`, {
            method: 'POST',
          })
            .then((response) => response.json())
            .then((result) => {
              console.log("SMS Message sent!")
            })
            .catch((response) => console.log(response));
    }

	return (
		<div className='app'>
			{showScore ? (
                transferScoretoDB,
                <div>
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                    <div>
                        <button type="submit" onClick={movePage}>Click Here To Return To Homepage</button>
                    </div>
                    <div>
                        <form>
                            Send Yourself Your Score Reports By Entering Your Email Below:
                            <input type="text" placeholder="email" id="email" maxLength={50} />
                            <br />
                            <button type="button" onClick={sendScoreData} className="continueButton">Send Email</button>
                        </form>
                    </div>
					<div>
                        <form>
                            Send Yourself Your Score Reports By Entering Your Phone Number Below:
                            <input type="text" placeholder="phone" id="phone" maxLength={50} />
                            <br />
                            <button type="button" onClick={sendScoreDataSMS} className="continueButton">Send SMS Message</button>
                        </form>
                    </div>
                </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}