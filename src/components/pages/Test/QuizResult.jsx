import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../../css/Test/QuizMain.css'
import 'bootstrap/js/dist/collapse'
import { formatTime } from '../../../utils/Test/timer';
import 'bootstrap/js/dist/modal'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle)


const QuizResult = ({ results, data, onReset, time }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);

    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
        if(result.a === data[index].answer) {
            correct++;
        }
        });
        setCorrectAnswers(correct);
        setWrongAnswers(data.length - correct);

        // eslint-disable-next-line
    }, []);


    
    return(
        <div id="QuizResult" className="container p-3">
            <div className="checker text-center mb-4">
                <span> <FontAwesomeIcon icon={faCheckCircle} className="success-icon" style={{color: "green"}} /> </span>
            </div>
            <h1 className="text-center mb-2">Quiz has ended</h1>
            <div className="container stats bg-light p-3" style={{width: "70%"}}>
                <h4 className="text-center">Your Result</h4>

                <div className="info d-flex justify-content-between m-2">
                    <span className="">Total number of questions:</span>
                    <span className="">{data.length}</span>
                </div>

                <div className="info d-flex justify-content-between m-2">
                    <span className="d-flex justify-content-start">Time Consumed: </span>
                    <span className="d-flex justify-content-end">{formatTime(time)}</span>
                </div>

                <div className="info d-flex justify-content-between m-2">
                    <span className="d-flex justify-content-start">Number of Correct Answers:</span>
                    <span className="d-flex justify-content-end">{correctAnswers}</span>
                </div>

                <div className="info d-flex justify-content-between m-2">
                    <span className="d-flex justify-content-start">Number of Wrong Answers:</span>
                    <span className="d-flex justify-content-end">{wrongAnswers}</span>
                </div>

                <div className="info d-flex justify-content-between m-2">
                    <span className="d-flex justify-content-start">Percentage of Correction: </span>
                    <span className="d-flex justify-content-end">{Math.floor((correctAnswers / data.length) * 100)}%</span>
                </div>

                

                <h4 className="small p-2" data-bs-toggle="modal" data-bs-target="#QuizModalAnswers" role="button">
                    <u> Check your answers </u>
                </h4>

                <div id="QuizModalAnswers" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Your Answer</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul>
                                    {results.map((result, i) => (
                                    <li className="mb-6" key={i}>
                                        <p><strong>Question {i+1}: _____ : {result.q}</strong></p>
                                        <p className={result.a === data[i].answer ? 'bg-success text-white p-2' : 'bg-danger text-white p-2'}>Your answer: {result.a}</p>
                                        {result.a !== data[i].answer && <p className="bg-primary text-white p-2">Correct answer: {data[i].answer}</p>}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            

            <div className="button-container d-flex">
                <button className="btn btn-primary btn-lg" style={{width: "45%"}} onClick={onReset}>Try Again</button>
                <Link to="/" className="btn btn-primary btn-lg" style={{width: "45%", marginLeft: "10%"}}>Go to Home Page</Link>
            </div>
        </div>
    )
}

export default QuizResult