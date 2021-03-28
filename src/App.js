import './App.scss'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Music from "./components/Music";
import Settings from "./components/Settings";

function App(props) {

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Nav/>

                <Switch>
                    <Route exact path="/"
                           render={() => <Profile PostsData={props.state.profile.posts}
                                                 newPostMessage={props.state.profile.newPostMessage}
                                                  //addPostHandler={addPostHandler}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs DialogsUsersData={props.state.dialogs.users}
                                                                  DialogsMessagesData={props.state.dialogs.messages}
                                                                  newDialogsMessage={props.state.dialogs.newDialogsMessage}
                                                                  // dialogsMessageHandler={dialogsMessageHandler}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </Switch>

            </BrowserRouter>
        </div>

    )
}

export default App
