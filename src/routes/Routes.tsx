
import React from 'react'
import { BrowserRouter as Router, Routes as Rtrs, Route } from 'react-router-dom';
import Home from '../page/Home.tsx';
import VerifyProcess from '../page/VerifyProcess.tsx';


const Routes = () => {
    return (
        <Router>
            <Rtrs>
                <Route path='/' element={<Home />} />
                <Route path='/verify' element={<VerifyProcess />} />
            </Rtrs>
        </Router>
    )
}
export default Routes
