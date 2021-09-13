import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';

/* Test Page Covered */
import QuizMain from './QuizMain';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import QuizHelp from './QuizHelp';

/* Get API */
import collectionAPI from '../../../api/collectionAPI';
/* Quiz CSS */
import '../../../css/Test/QuizMain.css'
/* Data */

import QuizData from './quiz.json'

let interval;

const TestBase = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [time, setTime] = useState(0);

    const [collections, setCollection] = useState([]);
    useEffect(() =>{
        const fetchCollection = async() => {
            try{
                const response = await collectionAPI.getAll();
                console.log(response);
                setCollection(response.data)

            } catch (error) {
                console.log('Failed to fetch collection: ', error);
            }
        };

        fetchCollection();
    }, []);


    useEffect(() => {
        if(step === 3) {
          clearInterval(interval);
        }
    }, [step]);

    const quizStartHandler = () => {
        setStep(2);
        interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }
    
    const resetClickHandler = () => {
        setActiveQuestion(0);
        setAnswers([]);
        setStep(1);
        setTime(0);
    }
    

    return(
        <Fragment>
            <div id="TestPage">
                <Switch>
                    <Route exact path="/test">
                        {step === 1 && <QuizMain onQuizStart={quizStartHandler} />}
                        {step === 2 && <QuizQuestion 
                            data={QuizData.data[activeQuestion]}
                            onAnswerUpdate={setAnswers}
                            numberOfQuestions={QuizData.data.length}
                            activeQuestion={activeQuestion}
                            onSetActiveQuestion={setActiveQuestion}
                            onSetStep={setStep}
                            time = {time}
                        />}
                        {step === 3 && <QuizResult 
                            results={answers}
                            data={QuizData.data}
                            onReset={resetClickHandler}
                            time={time}
                        />}
                    </Route>
                
                    <Route exact path="/test/help">
                        <QuizHelp />
                    </Route>
                </Switch>
            </div>
        </Fragment>
    )
}

export default TestBase