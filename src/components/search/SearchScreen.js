import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.js';
import { getHeroesByName } from '../../selectors/getHeroesByName.js';
import { HeroCard } from '../heroes/HeroCard.js';

export const SearchScreen = () => {

    const useQuery = () => {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    const [ formValues, handleInputChange ] = useForm( {search:""} );
    const {search} = formValues;
    const history = useHistory();
    const query = useQuery();
    const querySearch = query.get("q");
    
    const heroesFiltered = getHeroesByName(querySearch || "");

    const handleSearch = (e) => {
        
        e.preventDefault();
        console.log(search);
        console.log(query);
        history.push(`?q=${search}`);
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>

            <div className='row'>
                <div className='col-5'>
                    <h4>Search form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input type="text"
                                placeholder = "Find your hero"
                                className="form-control"
                                name="search"
                                value={search}
                                onChange={handleInputChange}
                                autoComplete="off"/>
                        <button type='submit'
                                className="btn my-1 btn-block btn-outline-primary">Search...</button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr/>

                    {
                        (querySearch === '') &&
                        <div className='alert alert-info'>
                            Search a hero...
                        </div>
                    }

                    {
                        (querySearch !== '' && heroesFiltered.length === 0) &&
                        <div className='alert alert-warning'>
                            There is no a hero with {querySearch}.
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id}
                                {...hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
