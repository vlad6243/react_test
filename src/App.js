import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import {ADMIN, USER} from "./constans/usersRole";
import withMainLayout from './hoc/MainLayout';
import withAdminLayout from './hoc/AdminLayout';
import Catalog from "./views/Catalog";
import CreateItem from "./views/CreateItem";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addItem, deleteItem, deleteItems, initItems,} from "./redux/actions/item";

function App({items,initItems,deleteItem, deleteItems,addItem}) {
  const [role, setRole] = useState(ADMIN);
  const CatalogPage = withMainLayout(Catalog,role,items,deleteItems);
  const CreateItemPage = withAdminLayout(CreateItem,role,items,deleteItems);

  React.useEffect(() => { initItems() }, [initItems]);

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <CatalogPage items={items} deleteItem={deleteItem}/>
          </Route>
          <Route exact path="/addItem">
             <CreateItemPage addItem={addItem}/>
          </Route>
        </Switch>
      </Router>
    </ React.Fragment>
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
            price: PropTypes.string
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
