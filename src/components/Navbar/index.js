import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.svg';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {AddBox, ListAlt} from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import {Route} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img:{
       maxWidth:"90px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
        flex: 1,
    },
}));

export default function Navbar(){
    const classes = useStyles();
    const [draw, setDraw] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDraw(open);
    };


    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <img src={logo} alt="" className={classes.img}/>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                   AnyShop
                </Typography>
                <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer anchor={"left"} open={draw} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <Route render={({ history }) => (
                            <ListItem button onClick={() => { history.push('/')}}>
                                <ListItemIcon><ListAlt /></ListItemIcon>
                                <ListItemText primary={"Catalog"} />
                            </ListItem>
                        )}/>
                        <Route render={({ history }) => (
                            <ListItem button onClick={() => { history.push('/addItem')}}>
                                <ListItemIcon><AddBox /></ListItemIcon>
                                <ListItemText primary={"Create new Item"} />
                            </ListItem>
                        )}/>
                    </List>
                </div>
            </ Drawer>
        </React.Fragment>
    )
}