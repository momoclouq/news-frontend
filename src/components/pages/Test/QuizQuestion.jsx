import React, { useState, useEffect, useRef } from 'react';




import { formatTime } from '../../../utils/Test/timer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faClock, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react';


library.add(faLightbulb, faClock)
library.add(fab )


const QuizQuestion = ( { data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep, onReset, time }) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if(findCheckedInput) {
          findCheckedInput.checked = false;
        }
      }, [data]);
    
      const changeHandler = (e) => {
        setSelected(e.target.value);
        if(error) {
          setError('');
        }
      }
      
      const nextClickHandler = (e) => {
        if(selected === '') {
          return setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if(activeQuestion < numberOfQuestions - 1) {
          onSetActiveQuestion(activeQuestion + 1);
        }else {
          onSetStep(3);
        }
      }




    return (
        <Fragment>
            <div id="Quiz" className="p-2">
                <div className="container quiz-container">

                    <div className="question-title mt-3 mb-3">
                        <h1 className="text-center">Quiz Test</h1>
                    </div>

                    <div className="time-container mt-1">
                        <div className="row">
                            <div className="col-md-6">
                                <span>{activeQuestion + 1} of {numberOfQuestions}</span> 
                            </div>

                            <div className="col-md-6 text-end">
                                <span>{formatTime(time)} </span><FontAwesomeIcon icon={faClock} />
                            </div>
                        </div>
                    </div>

                    <div className="question-container mt-4 ">
                        <h2 className="blockquote text-center">
                            Question {activeQuestion + 1}: _____ : {data.question}
                        </h2>
                    </div>

                    
                    <div className="container selection-container overflow-hidden">
                        {error && <div className="text-danger text-center p-3"> {error} </div>}
                        <div className="row gy-4" ref={radiosWrapper}>
                            {data.choices.map((choice, i) => (
                                <div className="col-6 p-1" key={i}>
                                    <input type="radio" className="btn-check" name="answer" id={"success-outlined " + i} value={choice} onChange={changeHandler}/>
                                    <label className="btn btn-outline-success p-3 border w-100" for={"success-outlined " + i}>
                                        {choice}
                                    </label>
                                </div>
                            ))}   
                        </div>
                    </div>

                    

                    <div className="button-container">
                        <button type="button" className="btn btn-primary btn-lg" style={{width: "14rem", float: "right"}} onClick={nextClickHandler}>Next</button>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    ) 
}


 
export default QuizQuestion
