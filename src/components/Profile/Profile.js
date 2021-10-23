import React from "react"
import styles from '../../Styles/Profile.module.scss'
import ProfileUserInfo from "./ProfileUserInfo";
import Posts from "./Posts";

const Profile = (props) => {
    return (
        <div className={styles.Profile}>

            <ProfileUserInfo {...props.profileData} setUserStatusThunk={props.setUserStatusThunk} status={props.userStatus}/>
            <Posts posts={props.posts}
                   changeHandler={props.updatePostActionCreator}
                   addPostHandler={props.addPostActionCreator}/>
        </div>
    )
}

export default Profile;