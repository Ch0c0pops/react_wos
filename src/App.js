import React, {Suspense, lazy} from "react";
import './App.scss';
import {Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import UsersContainer from "./components/Users/UsersContainer";
import ConnectedProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/HeaderContainer";
import LoginPageContainer from "./components/Login/LoginPage";
import SettingsWithAuthRedirect from "./components/Settings";
import Loader from "./components/common/Loader";
import {getAppInitialDataThunk} from "./Redux/Reducers/AppReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import styles from './Styles/Main.module.scss';

const UsersContainer = lazy(()=> import("./components/Users/UsersContainer"))
//React.lazy отделяет бандл для компоненты юзерс от общего и загружает его только в случае необходимости
//согласно документации, разделение бандлов в компоненте маршрутизации по соответствующим маршрутам
// является хорошей практикой
//lazy импорты необходимо оборачивать компонентом Suspense, содержащим "запасной" компонент, напр.
// loader на момент загрузки основного

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

                <div className={styles.mainWindow}>
                    <Suspense fallback={()=> <Loader/>}>
                    <Switch>
                        <Route exact path="/" render={() => <ConnectedProfileContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ConnectedProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" render={() => <SettingsWithAuthRedirect/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginPageContainer/>}/>
                    </Switch>
                    </Suspense>
                </div>


            </div>)
    }

}

const mapStateToProps = (state) => ({appInitialised: state.app.appInitialised})

export default compose(withRouter, connect(mapStateToProps, {getAppInitialDataThunk}))(App)
