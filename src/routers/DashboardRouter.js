import React from 'react'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { HeroScreen } from '../components/heroes/HeroScreen';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Routes>
                    <Route path="/marvel" element={<MarvelScreen/>}/>
                    <Route path="/heroe/:heroeId" element={<HeroScreen/>}/>
                    <Route path="/dc" element={<DcScreen/>}/>
                    <Route path="/" element={<Navigate to="/marvel" />}/>
                </Routes>
            </div>
        </>
    )
}
