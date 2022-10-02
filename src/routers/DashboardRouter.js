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

export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route exact path="/marvel"><MarvelScreen/></Route>
                    <Route path="/hero/:heroId"><HeroScreen/></Route>
                    <Route path="/dc"><DcScreen/></Route>
                    <Route path="/"><Redirect to="/marvel" /></Route>
                </Switch>
            </div>
        </>
    )
}
