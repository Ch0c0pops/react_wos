import React from "react"
import styles from '../../Styles/Profile.module.scss'
import ProfileUserInfo from "./ProfileUserInfo";
import Posts from "./Posts";

const Profile = (props) => {

    return (
        <div className={styles.Profile}>
            <ProfileUserInfo {...props.profileData}/>
            <Posts posts={props.posts}
                   newPostMessage={props.newPostMessage}
                   changeHandler={props.updatePostActionCreator}
                   clickHandler={props.addPostActionCreator}/>
        </div>
    )
}

export default Profile;