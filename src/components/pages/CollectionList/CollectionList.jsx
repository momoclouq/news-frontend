import React, { Fragment } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';


import WordCollection from './WordsComponents/WordCollection';
import NewsCollection from './NewsComponents/NewsCollection';
import NewsList from './NewsComponents/NewsList';
import WordsList from './WordsComponents/WordsList';

import '../../../css/page/CollectionList.css'

const CollectionList = () => {
    return(
    <Fragment>
        <BrowserRouter>
            <div id="CollectionList">
                <div className="container">
                    <header className="d-flex justify-content-center py-3">
                        <ul className="nav nav-pills">
                            <li className="nav-item pe-3">
                                <NavLink to="/collection/words" className="nav-link" aria-current="page">Words List</NavLink>
                                </li>
                            <li className="nav-item">
                                <NavLink to="/collection/news" className="nav-link">News List</NavLink>
                            </li>
                            
                        </ul>
                    </header>
                </div>

                <div className="album py-5 bg-light collection-display">
                    <div className="container">
                        <Switch> 
                            <Route path="/collection/words" exact component={WordCollection} />
                            <Route path="/collection/words/:collectionId" exact component={WordsList} />
                            <Route path="/collection/news" exact component={NewsCollection} />
                            <Route path="/collection/words/:collectionId" exact component={NewsList} />
                        </Switch>
                        
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </Fragment>
    )
}
export default CollectionList