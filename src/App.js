import './App.scss'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Music from "./components/Music";
import Settings from "./components/Settings";

function App({state, addPost, addPostHandler}) {

    return (

        <div className="App">
            <BrowserRouter>
                <Header/>
                <Nav/>

                <Switch>
                    <Route exact path="/"
                           render={() => <Profile PostsData={state.profileData.posts}
                                                  newPostMessage={state.profileData.newPostMessage}
                                                  addPostHandler={addPostHandler}
                                                  addPost={addPost}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs DialogsUsersData={state.dialogsData.users}
                                                                  DialogsMessagesData={state.dialogsData.messages}/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </Switch>

            </BrowserRouter>
        </div>

    )
}

export default App
