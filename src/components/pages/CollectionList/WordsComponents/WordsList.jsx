import React, { Fragment, useEffect, useState } from 'react';
import WordComponent from './WordComponent';

import wordAPI from '../../../../api/wordAPI'

const WordsList = () => {
    
    const [allItems, setAllItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [filters, setFilters] = useState({
        s:'',
        sort:'',
        page: 1
    });
    const [lastPage, setLastPage] = useState(0);
    const perPage = 15;

    // const [remove, setRemove] = useState([]);


    useEffect(() =>{
        const fetchWord = async() => {
            try{
                const response = await wordAPI.getAll();
                console.log(response);
                setAllItems(response);
                setFilteredItems(response.slice(0, filters.page * perPage));
                setLastPage(Math.ceil(response.length / perPage ))

            } catch (error) {
                console.log('Failed to fetch collection: ', error);
            }
        };

        fetchWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        let items = allItems.filter(i => i.word.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);

        if(filters.sort === 'asc'){
            items.sort((a, b) => 
                a.word.localeCompare(b.word)
            );
        } else if (filters.sort === 'desc') {
            items.sort((a, b) => 
                b.word.localeCompare(a.word)
            );
        }

        // const removeArr = allItems.filter((allItem) => {
        //     return allItem.word_id !== id;
        // })

        setLastPage(Math.ceil(items.length / perPage ));
        setFilteredItems(items.slice(0, filters.page * perPage));
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters])
    return(
        <Fragment>
            <div id="WordsList">
                <WordComponent items={filteredItems} filters={filters} setFilters={setFilters} lastPage={lastPage} />
            </div>
        </Fragment>
    )
}

export default WordsList