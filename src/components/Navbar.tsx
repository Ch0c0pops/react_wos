import React, {MouseEventHandler} from "react"
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import FastForwardIcon from '@material-ui/icons/FastForward';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    text: {
        color: 'black',
        textDecoration: 'none'
    },
    menuBtn: {
        fontSize: 45,
        color: 'white',
        decoration: 'none'
    }
});

const Navbar: React.FC = () => {
    const classes = useStyles();
    const [state, setState] = React.useState<any>({
        left: false
    });

    const toggleDrawer = (anchor: any, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };
    let icons = [<FaceIcon/>, <ForumIcon/>, <PeopleIcon/>, <BarChartIcon/>, <FastForwardIcon/>, <SettingsIcon/>]

    const list = (anchor: any) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                {['profile', 'dialogs', 'users', 'news', 'music', 'settings'].map((text, index) => (


                    <ListItem button key={text}>
                        <NavLink to={'/' + text} className={classes.text}>
                            <ListItemIcon>{icons[index]}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </NavLink>


                    </ListItem>
                ))}
            </List>
            <Divider/>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor:any) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuOpenIcon className={classes.menuBtn}/></Button>

                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default Navbar