import React from "react";
import Grid from "@material-ui/core/Grid";
import CatalogItem from "../../components/CatalogItem";

function Catalog({role,items,deleteItem}) {
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

export default Catalog;