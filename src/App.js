import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {ADMIN,USER} from "./constans/usersRole";
import withAdminLayout from './hoc/AdminLayout';
import Catalog from "./views/Catalog";
import CreateItem from "./views/CreateItem";
import {connect} from "react-redux";
import PropTypes from "prop-types";
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

function App({items,initItems,deleteItem, deleteItems,addItem}) {
    const classes = useStyles();
    const [role, setRole] = useState(ADMIN);
    const CreateItemPage = withAdminLayout(CreateItem,role);

    React.useEffect(() => { initItems() }, [initItems]);

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Router>
                <Navbar />
                <br/>
                    <Switch>
                        <Route exact path="/">
                            <Catalog role={role} items={items} deleteItem={deleteItem}/>
                        </Route>
                        <Route exact path="/addItem">
                            <CreateItemPage addItem={addItem}/>
                        </Route>
                    </Switch>
                </Router>
            </Container>
            <Footer items={items} role={role} deleteItems={deleteItems}/>
        </div>
    );
}

App.propTypes = {
    role:PropTypes.string,
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            itemName: PropTypes.string,
            description: PropTypes.string,
            imgUrl: PropTypes.string,
            price: PropTypes.number
        })
    ),
    initItems:PropTypes.func,
    deleteItem:PropTypes.func,
    deleteItems:PropTypes.func,
    addItem:PropTypes.func

}

function mapStateToProps(state) {
  return{
    items: state.item.items
  }
}
function mapDispatchToProps(dispatch) {
  return{
      initItems: () => dispatch(initItems()),
      deleteItem: (id) => dispatch(deleteItem(id)),
      deleteItems: () => dispatch(deleteItems()),
      addItem: (item) => dispatch(addItem(item)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
