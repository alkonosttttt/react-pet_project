import './App.css';
import Header from './components/header/header'
import Footer from "./components/footer/footer.";
import Nav from "./components/nav/nav";
import Main from "./components/main/main";
import React from "react";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrap">
                <Header/>
                <Nav/>
                <Main postsData={props.state.profilePage.postsData}
                      dialogsData={props.state.messagesPage.dialogsData}
                      messagesData={props.state.messagesPage.messagesData}/>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
