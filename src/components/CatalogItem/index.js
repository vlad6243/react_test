import React from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import {Delete} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import {ADMIN} from "../../constans/usersRole";

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

export default function CatalogItem({role,item,deleteItem}) {
    const classes = useStyles();
    const delButton = role === ADMIN;

    return(
        <Card className={classes.card}>
            <div className={classes.cardDetails}>
                <CardContent>
                    <Typography component="h2" variant="h5">
                        {item.itemName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Price: {item.price}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {item.description}
                    </Typography>
                    {delButton && <IconButton onClick={() => deleteItem(item.id)}><Delete /></IconButton>}
                </CardContent>
            </div>
            <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image={item.imgUrl}/>
            </Hidden>
        </Card>
    )
}