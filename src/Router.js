import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './login/Login';
import Signup from "./signup/Signup";
import Dashboard from "./dashboard/Dashboard";
import Card from "./card/Card";
import NoPage from "./NoPage"

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}>
                        {/* <Route index element={<Signup />} /> */}
                        <Route path='/signup' element={<Signup />}/>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="contact" element={<Card />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
