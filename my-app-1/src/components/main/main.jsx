import React from "react";
import Profile from '../profile/profile'
import './main.css';
import Dialogs from "../dialogs/dialogs";
import {Route, Routes} from "react-router-dom";

const Main = () => {
    return (

            <main>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/music" element={<Music/>}/>
                </Routes>
            </main>

    );
}

const Music = () => {
    return(
        <div>
            Music
        </div>
    );
}
const Settings = () => {
    return(
        <div>
            Settings
        </div>
    );
}
export default Main;
