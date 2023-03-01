import React from "react";
import Profile from '../profile/profile'
import './main.css';
import Dialogs from "../dialogs/dialogs";
import {Route, Routes} from "react-router-dom";

const Main = (props) => {
    return (
            <main>
                <Routes>
                    <Route path="/profile/*" element={<Profile postsData={props.postsData}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData}
                                                               messagesData={props.messagesData}/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                    <Route path="/music/*" element={<Music/>}/>
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
