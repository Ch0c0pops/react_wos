import React from "react";
import './App.scss'
import Nav from "./components/Nav"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Music from "./components/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ConnectedProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/HeaderContainer";
import LoginPageContainer from "./components/Login/LoginPage";
import SettingsWithAuthRedirect from "./components/Settings";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <HeaderContainer/>
                <Nav/>

                <Switch>
                    <Route exact path="/" render={()=> <ConnectedProfileContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ConnectedProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" render={() => <SettingsWithAuthRedirect/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginPageContainer/>}/>
                </Switch>

            </BrowserRouter>
        </div>
    )
}


export default App
