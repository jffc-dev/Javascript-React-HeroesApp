import React from 'react'
import {heroes} from '../../data/heroes.js'
import { useForm } from '../../hooks/useForm.js';
import { HeroCard } from '../heroes/HeroCard.js';

export const SearchScreen = () => {

    const heroesFiltered = heroes;
    const [ formValues, handleInputChange ] = useForm( {search:""} );
    const {search} = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search);
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
