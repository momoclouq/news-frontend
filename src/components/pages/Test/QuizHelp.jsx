import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import QuizQuestionImg from '../../../images/quizQuestion.png'
import QuizResultImg from '../../../images/quizResult.png'

function QuizHelp(){
    return(
        <Fragment>
            <div id="QuizHelp" className="instruction-container container">
                <br />
                <Link to="/test" className="mt-4"> Return to Test Page </Link>
                <h1 className="text-center"> How to Play the Quiz</h1>
                <p>Ensure you read this guide from start to finish before starting quiz.</p>
                <ul className="browser-default">
                    <li className="p-1">This is a word quiz that challenges your memory to master the words you have saved in your collection</li>
                    <li className="p-1">Each game consists of numbers of questions which contains numbers of words you save in your words collection</li>
                    <li className="p-1">
                        Every question contains 4 options.
                        <img src={QuizQuestionImg} className="img-fluid" alt="Quiz Page options example" />
                    </li>
                    <li className="p-1">There will be a timer where you can clearly grasp the current progress</li>
                    <li className="p-1">
                        After you done the quiz, there will appear the status of your progress and you can check the answers you made
                        <img src={QuizResultImg} className="img-fluid" alt="Quiz Page result example" />
                    </li>
                    <li className="p-3">Let's do this if you think you've got what it takes?</li>

                </ul>


            </div>
        </Fragment>
    )
}

export default QuizHelp