import React, { Fragment} from 'react';
import WordItems from './WordItems';


const WordComponent = (props) => {

    const search = (s) => {
        props.setFilters({
            ...props.filters,
            s,
            page: 1
        });
    }

    const sort = (sort) => {
        props.setFilters({
            ...props.filters,
            sort,
            page: 1
        });
    }

    const load = () => {
        props.setFilters({
            ...props.filters,
            page: props.filters.page + 1
        });
    }

    let button;

    if (props.filters.page !== props.lastPage){
        button = (
            <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-primary" onClick={load}>Load More</button>
            </div>
        );
    }
    

    return(

        <Fragment>
            <div id="CollectionItems">

                <div className="row justify-content-center">
                    <div className="col-md-10 mb-4">
                        <div className="input-group">                        
                            <input type="text" className="form-control" placeholder="Search" 
                            onChange={e => search(e.target.value)}
                            />
                        
                            <div className="input-group-append" 
                            onChange={e => sort(e.target.value)}
                            >
                                <select className="form-select">
                                    <option>Select</option>
                                    <option value="asc">Sort A to Z</option>
                                    <option value="desc">Sort Z to A</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {props.items.map((word_comp) => 
                        <WordItems wordName={word_comp.word} wordId={word_comp.word_id} key={word_comp.word_id} />
                    )}
                </div>
            </div>

            {button}
        </Fragment>
    )
}

export default WordComponent