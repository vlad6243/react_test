import React from 'react';
import Navbar from '../../components/Navbar'
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ADMIN} from "../../constans/usersRole";
import ErrorPage from "../../views/ErrorPage";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    }
}));
export default function AdminLayout(WrappedComponent,role, items, deleteItems) {

    const Child = (props) => {
        const classes = useStyles();
        const checkAdmin = role === ADMIN;
        return (
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Navbar />
                    <br/>
                    {checkAdmin ? <WrappedComponent {...props} /> : <ErrorPage/>}
                </Container>
                <Footer items={items} role={role} deleteItems={deleteItems}/>
            </div>
        )
    };

    return Child;
}