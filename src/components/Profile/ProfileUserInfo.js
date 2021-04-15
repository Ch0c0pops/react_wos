import React from "react"
import styles from '../../Styles/Profile.module.scss'
import Loader from "../common/Loader";

const ProfileUserInfo = (props) => {

    if (!props.photos) {  //js фак ё эсс
        return <Loader/>
    } else {
        return (<>
                <div className={styles.avatar}>
                    <img src={props.photos.small}
                        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPixkUG_Kxy4Hh2WksBQlOWNQz9b7fWJZaQ&usqp=CAU"
                         alt=""/>
                </div>
                <div className={styles.description}>
                    {props.fullName}
                    {props.aboutMe}
                </div>
            </>
        )
    }

}

export default ProfileUserInfo;