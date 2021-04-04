import React from 'react';
import styles from './../../Styles/UsersPage.module.scss'

const Users = (props) => {

    props.users.length === 0 ? props.setUsers(
        [{
                id: 1,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PJNOISTWpUH7UHF6YXIeWW_dqaEzClIZTA&usqp=CAU',
                firstName: 'Valera',
                secondName: 'Borov',
                followed: true,
                status: 'hi people',
                location: {city: 'Moscow', country: 'Russia'}
            },
                {
                    id: 2,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PJNOISTWpUH7UHF6YXIeWW_dqaEzClIZTA&usqp=CAU',
                    firstName: 'Enotik',
                    secondName: 'Poloskun',
                    followed: false,
                    status: 'nyashka',
                    location: {city: 'Paris', country: 'France'}
                },
                {
                    id: 3,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PJNOISTWpUH7UHF6YXIeWW_dqaEzClIZTA&usqp=CAU',
                    firstName: 'Vasya',
                    secondName: 'Voron',
                    followed: true,
                    status: 'kushat kushat',
                    location: {city: 'Samara', country: 'Russia'}
                }])
        : console.log('users has been set');


    return (
        <div>
            {props.users.map(u => (<div key={u.id} className={styles.users__wrap}>
                <img src={u.img} alt={''} className={styles.users__img}/>

                {u.followed ?
                    <button className={styles.users__followed_btn} onClick={()=>props.unfollow(u.id)}>UNFOLLOW</button> :
                    <button className={styles.users__followed_btn} onClick={()=>props.follow(u.id)}>FOLLOW</button>}

                <div className={styles.users__info}>
                    <div className={styles.users__name}>{u.firstName + '  ' + u.secondName}</div>
                    <div className={styles.users__status}>{u.status}</div>
                    <div className={styles.users__location}>{u.location.city}, {u.location.country}</div>
                </div>

            </div>))}
        </div>
    )

}


export default Users;