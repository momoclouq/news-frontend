import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faBars)



const NewsCollection = () => { 
    
    const data = [
        {
            name: "collection2",
            id: 1,
            create_date: "09/12/2021",
            items: [
                {
                    id: 1-0,
                    word_name: "hello",
                    word_meaning: "bla bla bla"
                }
            ]
        },
        {
            name: "collection3",
            id: 2,
            create_date: "yolo yolo yolo yolo yolo yolo yolo",
            items: [
                {
                    id: 2-0,
                    word_name: "run",
                    word_meaning: "09/12/2021"
                }
            ]
        }
    ]

    return(
        <Fragment>
            <div id="CollectionItems">

                <div className="row justify-content-center">
                    <div className="col-md-7 mb-4"> 
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Collection" 
                            // onChange={e => search(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4 d-flex justify-content-end">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Collection..." 
                            // onChange={e => search(e.target.value)}
                            />
                            <button type="button" className="btn btn-warning"
                            // onChange={}
                            >Create Collection</button>
                            
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 g-3 mb-3 justify-content-center">
                    {data.map((collection) => 
                        (
                        <div className="col-md-10" key={collection.id}>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="card-heading">
                                        <div className="col-md-11">
                                            <Link
                                             to={`/collection/${collection.name}`} 
                                             className="card-text text-dark text-decoration-none"> <span><FontAwesomeIcon icon={faBars} /></span> <strong>Collection Name: {collection.name}</strong></Link>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <small className="text-secondary">Create Date: {collection.create_date}</small>
                                        <button className="btn btn-sm btn"> <style></style> <FontAwesomeIcon icon={faTrash} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            {/* {button} */}
        </Fragment>
    )
    
}

export default NewsCollection