import React from 'react';
import Navbar from '../../components/Navbar'
import Container from "@material-ui/core/Container";
import Footer from "../../components/Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    }
}));
export default function MainLayout(WrappedComponent,role,items,deleteItems) {

    const Child = (props) => {
        const classes = useStyles();
        return (
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Navbar />
                    <br/>
                    <WrappedComponent role={role} {...props} />
                </Container>
                <Footer items={items} role={role} deleteItems={deleteItems}/>
            </div>
        )
    };

    return Child;
}