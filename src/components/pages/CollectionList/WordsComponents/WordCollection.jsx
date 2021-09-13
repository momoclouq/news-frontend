import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import collectionAPI from '../../../../api/collectionAPI';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash, faBars)




const WordCollection = () => { 
    const [collections, setCollections] = useState([]);

    useEffect(() =>{
        const fetchCollection = async() => {
            try{
                const response = await collectionAPI.getAll();
                console.log(response);
                setCollections(response)

            } catch (error) {
                console.log('Failed to fetch collection: ', error);
            }
        };

        fetchCollection();
    }, []);
    

    
    const [dataCreated, setDataCreated] = useState({
        name: "",
        type: "",
    });

    function submit(e) {
        e.preventDefault();

        const create = collectionAPI.post(
            {
                name: dataCreated.name,
                type: "word",
            }
        );
        console.log(create);
        setCollections(create)

    }
    function handleCollectInfo(e){
        const newData = { ...dataCreated }
        newData[e.target.id] = e.target.value;
        setDataCreated(newData);
    }



    return(
        <Fragment>
            <div id="WordCollection">

                <div className="row justify-content-center">
                    <div className="col-md-7 mb-4"> 
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Collection" 
                            // onChange={e => search(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4 d-flex justify-content-end">
                        <form className="input-group" onSubmit={(e) => submit(e)}>
                            <input type="text" className="form-control" placeholder="Collection..." 
                                onChange={e => handleCollectInfo(e)} value={dataCreated.name}
                            />
                                
                                <button type="button" className="btn btn-warning"
                            // onChange={}
                            >Create Collection</button>
                            
                        </form>
                    </div>
                </div>

                <div className="row row-cols-1 g-3 mb-3 justify-content-center">
                    {collections.map((collection) => 
                        (
                        <div className="col-md-10" key={collection.id}>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="card-heading">
                                        <div className="col-md-11">
                                        <Link to={`/collection/words/${collection.name}`} className="card-text text-dark text-decoration-none"> <span><FontAwesomeIcon icon={faBars} /></span> <strong>Collection Name: {collection.name}</strong></Link>
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
        </Fragment>
    )
    
}
 
export default WordCollection;