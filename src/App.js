import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {ADMIN,USER} from "./constans/usersRole";
import withAdminLayout from './hoc/AdminLayout';
import Catalog from "./views/Catalog";
import CreateItem from "./views/CreateItem";
import {useDispatch, useSelector} from "react-redux";
import {addItem, deleteItem, deleteItems, initItems,} from "./redux/actions/item";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    }
}));

export default function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const items = useSelector(({ item }) => item.items);
    const [role, setRole] = useState(ADMIN);
    const CreateItemPage = withAdminLayout(CreateItem,role);

    const itemDelete = React.useCallback((id) => {
        dispatch(deleteItem(id))
    },[dispatch])

    const itemAdd = React.useCallback((item) => {
        dispatch(addItem(item))
    },[dispatch])

    const itemsDelete = React.useCallback(() => {
        dispatch(deleteItems())
    },[dispatch])

    React.useEffect(() => {
        dispatch(initItems());
    }, [dispatch]);

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Router>
                <Navbar />
                <br/>
                    <Switch>
                        <Route exact path="/">
                            <Catalog role={role} items={items} deleteItem={itemDelete}/>
                        </Route>
                        <Route exact path="/addItem">
                            <CreateItemPage addItem={itemAdd}/>
                        </Route>
                    </Switch>
                </Router>
            </Container>
            <Footer items={items} role={role} deleteItems={itemsDelete}/>
        </div>
    );
}
