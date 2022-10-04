import React from 'react'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { HeroScreen } from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route path="/marvel"><MarvelScreen/></Route>
                    <Route path="/hero/:heroId"><HeroScreen/></Route>
                    <Route path="/dc"><DcScreen/></Route>
                    <Route path="/search"><SearchScreen/></Route>
                    <Route path="/"><Redirect to="/marvel" /></Route>
                </Switch>
            </div>
        </>
    )
}
