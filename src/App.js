import './App.scss'
import Nav from "./components/Nav"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Music from "./components/Music";
import Settings from "./components/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ConnectedProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/HeaderContainer";

function App() {

    return (
        <div className="App">
            <BrowserRouter>

                <HeaderContainer/>
                <Nav/>

                <Switch>
                    <Route path="/profile/:userId?" render={() => <ConnectedProfileContainer/>}/>
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
