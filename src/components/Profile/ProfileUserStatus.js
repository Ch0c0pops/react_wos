import React, {useEffect, useState} from "react"

const ProfileUserStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [statusMessage, setStatusMessage] = useState(props.status)

    useEffect(() => setStatusMessage(props.status), [props.status])

    const changeHandler = (e) => {
        const value = e.target.value
        setStatusMessage(value)
    }

    const onDoubleClickHandler = () => {
        setEditMode(true)
    }

    const onSubmit = () => {
        props.setUserStatusThunk(statusMessage)
        setEditMode(false)
        setStatusMessage(statusMessage)
    }

     return (<div>
        {editMode && <input value={statusMessage} onChange={changeHandler}
                                       autoFocus={true} onBlur={onSubmit}/>}
        {!editMode &&
        <span onDoubleClick={onDoubleClickHandler}>{statusMessage}</span>}
    </div>)
}

export default ProfileUserStatus;