import React from "react";
import './App.scss'
import Nav from "./components/Nav"
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ConnectedProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/HeaderContainer";
import LoginPageContainer from "./components/Login/LoginPage";
import SettingsWithAuthRedirect from "./components/Settings";
import Loader from "./components/common/Loader";
import {getAppInitialDataThunk} from "./Redux/Reducers/AppReducer";
import {connect} from "react-redux";
import {compose} from "redux";

class App extends React.Component {

    componentDidMount() {
        this.props.getAppInitialDataThunk()
    }

    render() {
        if (this.props.appInitialised === false) {
            return <Loader/>
        }
        return (
            <div className="App">

                    <HeaderContainer/>
                    <Nav/>

                    <Switch>
                        <Route exact path="/" render={() => <ConnectedProfileContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ConnectedProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" render={() => <SettingsWithAuthRedirect/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginPageContainer/>}/>
                    </Switch>

            </div>)
    }

}

const mapStateToProps=(state)=>({appInitialised: state.app.appInitialised})

export default compose(withRouter,connect(mapStateToProps, {getAppInitialDataThunk}))(App)
