import React from 'react';
import styles from './../../Styles/UsersPage.module.scss'
import * as axios from "axios";
import userAvatar from '../../assets/photo/userAvatar.jfif'
const Users = (props) => {


    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => props.setUsers(response.data.items)
            )
        }
    }


    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {props.users.map(u => (<div key={u.id} className={styles.users__wrap}>


                <img src= {u.photos.small !== null ? u.photos.small : userAvatar} alt={''} className={styles.users__img}/>

                {u.followed ?
                    <button className={styles.users__followed_btn}
                            onClick={() => props.unfollow(u.id)}>UNFOLLOW</button> :
                    <button className={styles.users__followed_btn} onClick={() => props.follow(u.id)}>FOLLOW</button>}

                <div className={styles.users__info}>
                    <div className={styles.users__name}>{u.name}</div>
                    <div className={styles.users__status}>{u.status}</div>
                    <div className={styles.users__location}>{/*{u.location.city}, {u.location.country}*/}</div>
                </div>

            </div>))}
        </div>
    )

}


export default Users;