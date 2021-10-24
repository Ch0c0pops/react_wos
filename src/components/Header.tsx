import React from "react"
import styles from '../Styles/Header.module.scss'
import {Redirect} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Navbar from "./Navbar"

type PropsType={
    login: string| null
    logoutThunk: ()=> void
    isAuth?: boolean | null
}

export const LoggedIn: React.FC<PropsType> = (props) => {
    return <div>
        <div> {props.login} </div>
        <button onClick={props.logoutThunk}>Logout</button>
    </div>
}


export const LoggedOut: React.FC = () => {
    return <Redirect to='/login'/>
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export const Header: React.FC<PropsType> = (props) => {
    const classes = useStyles();

    return (
        <div className={styles.Header}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Navbar/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            My social network
                        </Typography>
                        <div className={styles.login}> {props.isAuth === true ? <LoggedIn logoutThunk={props.logoutThunk}
                                                                                          login={props.login}/> :
                            <Button color="inherit"><LoggedOut/></Button>}</div>

                    </Toolbar>
                </AppBar>
            </div>

        </div>
    )
}





