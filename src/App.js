import './App.scss'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Profile from "./components/Profile/Profile"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Music from "./components/Music";
import Settings from "./components/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {

    return (
        <div className="App">
            <BrowserRouter>

                <Header/>
                <Nav/>

                <Switch>
                    <Route exact path="/"
                           render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default App
