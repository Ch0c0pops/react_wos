import React from "react"
import {Header} from "./Header"
import {connect} from "react-redux"
import {logoutThunk} from "../Redux/Reducers/AuthReducer"
import {StateType} from "../Redux/Store"

type OwnPropsType = {}
type MapStatePropType = {
    login: string | null
    isAuth: boolean | null
}
type MapDispatchPropType = {
    logoutThunk: () => void
}
type PropType = MapStatePropType & MapDispatchPropType

class HeaderContainer extends React.Component<PropType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
//  <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
//  ^ типы, принимаемые функцией connect. Для просмотра ctrl+ click на названии функции
const ConnectedHeaderContainer = connect<MapStatePropType, MapDispatchPropType, OwnPropsType, StateType>
(mapStateToProps, {logoutThunk})(HeaderContainer)

export default ConnectedHeaderContainer