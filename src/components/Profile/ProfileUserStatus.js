import React from "react"

class ProfileUserStatus extends React.Component {

    state = {
        editMode: false,
        statusMessage: this.props.status || 'no status yet'
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
    }
}

export default ProfileUserStatus;