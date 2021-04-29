import React from "react"
import styles from '../../Styles/Profile.module.scss'
import Loader from "../common/Loader";
import ProfileUserStatus from "./ProfileUserStatus";

const ProfileUserInfo = (props) => {
    if (!props.photos) {  //js фак ё эсс
        return <Loader/>
    } else {
        return (<>
                <div className={styles.avatar}>
                    <img src={props.photos.small}
                         alt=""/>
                </div>
                <ProfileUserStatus setUserStatusThunk={props.setUserStatusThunk} status={props.status}/>
              {/*  <div className={styles.description}>
                    {props.fullName}
                    {props.aboutMe}
                </div>*/}
            </>
        )
    }

}

export default ProfileUserInfo;