import React, { Fragment, useState, useEffect } from 'react';
// import CollectionItems from './WordsComponents/WordComponent';

const NewsList = () => {
    
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState({
        s:'',
        sort:'',
        page: 1
    });

    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        
            async function fetchPointEnd() {
                try {
                    const arr = [];

                    if (filters.s) {
                        arr.push(`s=${filters.s}`)
                    }

                    if (filters.sort) {
                        arr.push(`sort=${filters.sort}`)
                    }

                    if (filters.page) {
                        arr.push(`page=${filters.page}`)
                    }

                    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello?${arr.join('&')}`);

                    const content = await response.json();

                    setItems(filters.page === 1 ? content : [...items, ...content]);
                    setLastPage(content.last_page);
                } catch (error) {
                    console.log('Failed to fetch data: ', error.message);
                }
            }
        fetchPointEnd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters])

    return(
        <Fragment>
            <div id="NewsList">
                {/* <CollectionItems items={items} filters={filters} setFilters={setFilters} lastPage={lastPage}/> */}
            </div>
        </Fragment>
    )
}

export default NewsList