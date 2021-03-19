import React from "react"
import styles from '../../Styles/Profile.module.scss'
import Posts from "./Posts";

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
            <Posts PostsData={props.PostsData} addPost={props.addPost} addPostHandler={props.addPostHandler}
                   newPostMessage={props.newPostMessage}/>
        </div>
    )
}

export default Profile;