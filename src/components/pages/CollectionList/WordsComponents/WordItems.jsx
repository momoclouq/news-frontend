import React, {useState, useEffect} from 'react';
import {Howl} from 'howler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faVolumeUp} from '@fortawesome/free-solid-svg-icons'

library.add(faVolumeUp, faTrash)

const WordItems = (props) => {
    const {wordName} = props;
    const {wordId} = props;
    const [items, setItems] = useState([]);
    const fetchDictionaryAPI = async() => {
        try{
            const DictionaryAPI = (`https://api.dictionaryapi.dev/api/v2/entries/en/${wordName}`);

            const response = await fetch(DictionaryAPI);
            const content = await response.json();
            setItems(content);
        }catch (error) {
            console.log('Failed to fetch data: ', error.message);
        }
    }

    useEffect(() => {
        fetchDictionaryAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const SoundPlay = (src) => {
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play();
    }
    return(
        <div className="row row-cols-1 g-3 mb-3 justify-content-center">
            {items.slice(0, 1).map((word) => 
                word.meanings.slice(0, 1).map((item) => 
                item.definitions.slice(0, 1).map((def) => (

                <div className="col-md-10" key={wordId}>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="card-heading row">
                                <div className="col-11">
                                    <p className="card-text"><strong>Word: {word.word}</strong><span style={{ marginLeft: "2rem" }}>{item.partOfSpeech}</span></p>
                                </div>
                                {<div className="col-1">
                                    <button className="btn btn-sm" style={{boxShadow: "none"}} onClick={() => SoundPlay(word.phonetics[0] && word.phonetics[0].audio)}> <FontAwesomeIcon icon={faVolumeUp} /> </button>
                                </div>}
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="fw-normal">{def.definition}</h4>
                            </div>
                            {<div className="d-flex justify-content-end align-items-center">
                                    <button className="btn btn-sm btn"> <style></style> <FontAwesomeIcon icon={faTrash} /></button>
                                </div>}
                        </div>
                    </div>
                </div>

            ))))}
        </div>
    )
}
export default WordItems