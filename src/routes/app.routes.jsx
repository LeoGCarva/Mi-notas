import { Routes, Route } from "react-router-dom";

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/register" element={<SignUp />}/>
            <Route path="/signin" element={<SignIn />}/>
        </Routes>
    );
}