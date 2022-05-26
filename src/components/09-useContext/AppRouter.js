import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import { Navbar } from './Navbar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';


export const AppRouter = () => {
    return (
        <Router>

            <div>
                <Navbar />

                <div className='container'>
                    <Routes>
                        <Route exact="true" path='/' element={<HomeScreen />} />
                        <Route exact="true" path='/about' element={<AboutScreen />} />
                        <Route exact="true" path='/login' element={<LoginScreen />} />

                        {/* Esto es para redireccionar al path inicial si el path no está definido en el Router */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </div>

        </Router>
    )
}