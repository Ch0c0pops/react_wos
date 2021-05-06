import React from "react"
import Loader from "../common/Loader";

class ProfileUserStatus extends React.Component {

    state = {
        editMode: false,
        statusMessage: this.props.status || '...awaiting status'
    }

componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.status !== prevProps.status){
            this.setState({statusMessage: this.props.status})
        }
}

    render() {

        return <div>
            {this.state.editMode && <input value={this.state.statusMessage} onChange={this.changeHandler.bind(this)}
                                           autoFocus={true} onBlur={this.onSubmit.bind(this)}/>}
            {!this.state.editMode &&
            <span onDoubleClick={this.onDoubleClickHandler.bind(this)}>{this.state.statusMessage}</span>}
        </div>
    }


    changeHandler(e) {
        const value = e.target.value
        this.setState((state) => ({statusMessage: value}))
    }

    onDoubleClickHandler(){
        this.setState({editMode: true})
    }

    onSubmit() {
        this.props.setUserStatusThunk(this.state.statusMessage)
        this.setState({editMode: false})
        this.setState({statusMessage: this.state.statusMessage})
    }
}

export default ProfileUserStatus;