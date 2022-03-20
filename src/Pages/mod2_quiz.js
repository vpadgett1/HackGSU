import React, { useState } from 'react';
import '../App.css';
//import '../styling/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Card, Button, CardGroup} from 'react-bootstrap'

export default function App() {
	const questions = [
		{
			questionText: 'What are features in an image?',
			answerOptions: [
				{ answerText: 'Edges', isCorrect: false },
				{ answerText: 'Corners', isCorrect: false },
				{ answerText: 'Color Changes', isCorrect: false },
				{ answerText: 'All of the Above', isCorrect: true },
			],
		},
		{
			questionText: 'What is the process through which AI comes up with its own filters?',
			answerOptions: [
				{ answerText: 'Training', isCorrect: true },
				{ answerText: 'Testing', isCorrect: false },
				{ answerText: 'Validation', isCorrect: false },
				{ answerText: 'Experimentation', isCorrect: false },
			],
		},
		{
			questionText: 'Deep Learninh consists of ______?',
			answerOptions: [
				{ answerText: 'Layers', isCorrect: true },
				{ answerText: 'Stacks', isCorrect: false },
				{ answerText: 'Words', isCorrect: false },
				{ answerText: 'Data', isCorrect: false },
			],
		},
		{
			questionText: 'The initial layers in the model find?',
			answerOptions: [
				{ answerText: 'Edges and colors transitions', isCorrect: true },
				{ answerText: 'Textures', isCorrect: false },
				{ answerText: 'Depth', isCorrect: false },
				{ answerText: 'Whiskers', isCorrect: false },
			],
		},
        {
			questionText: 'The high layers of the model conisist of?',
			answerOptions: [
				{ answerText: 'Cat Whiskers', isCorrect: false },
				{ answerText: 'Dog Tails', isCorrect: false },
				{ answerText: 'Regions of Characteristics', isCorrect: true },
				{ answerText: 'Depth', isCorrect: false },
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
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
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