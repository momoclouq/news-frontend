import React, { Fragment} from 'react';
import { Link } from 'react-router-dom'

import quizImg from '../../../images/undraw_quiz.png'

const QuizMain = ({ onQuizStart }) => {
        return(
            <Fragment>
                <div id="QuizMain" className="p-3" style={{backgroundColor: "white"}}>
                    <div className="testHeader">
                        <h1 className="title text-uppercase text-center">Intuitive Quiz Hub</h1>
                        <hr className="my-2" style={{margin: "10px"}} />
                    </div>
                    <div className="container settings ">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-7 text-center">
                                <span style={{fontSize: 30}}>Quiz Setting</span>
                                <div className="settings-select">
                                    
                                        
                                    <button className="btn btn-primary btn-lg mb-3" style={{width: "100%"}} onClick={onQuizStart}>Start Quiz</button>
                                    <Link to="/collection" className="btn btn-primary btn-lg mb-3" style={{width: "100%"}}>Collection</Link>
                                    <Link to="/test/help" className="btn btn-primary btn-lg mb-3" style={{width: "100%"}}>Help</Link>
                                    
                                </div>
                                
                            </div>
                            <div className="col-lg-5">
                                <img src={quizImg} alt="quiz-img" className="img-fluid center-block" />
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </Fragment>
        )
    
}

export default QuizMain;