import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CatalogItem from "../../components/CatalogItem";

export default function Catalog({role,items,deleteItem}) {
    return(
        <div>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}>
                {items.map(el => {
                    return (
                        <Grid item xs={12} md={6} key={el.id}>
                            <CatalogItem role={role} item={el} deleteItem={deleteItem}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

Catalog.prototype = {
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
    deleteItem:PropTypes.func
}