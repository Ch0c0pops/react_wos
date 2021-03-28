import React from "react"
import styles from '../../Styles/Profile.module.scss'
import PostsContainer from "./PostsContainer";

const Profile = (props) => {

    return (
        <div className={styles.Profile}>
            <div className={styles.avatar}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPixkUG_Kxy4Hh2WksBQlOWNQz9b7fWJZaQ&usqp=CAU"
                    alt=""/>
            </div>
            <div className={styles.description}>
                I'm 31 year old newb
            </div>
            <PostsContainer posts={props.profile.posts} dispatch={props.dispatch}
                            newPostMessage={props.profile.newPostMessage}/>
        </div>
    )
}

export default Profile;