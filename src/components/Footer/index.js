import React from "react";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import {ADMIN} from "../../constans/usersRole";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    }
}));

export default function Footer({role,items,deleteItems}) {
    const classes = useStyles();
    const delButton = role === ADMIN;
    const count = items.length;
    let sum = items.reduce( (result,el) => result + el.price, 0);
    const avgSum = sum ? Math.floor(sum / items.length) : 0;

    return(
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" gutterBottom>
                    Count Items {count}
                </Typography>
                <Typography variant="subtitle1"  color="textSecondary" component="p">
                    Sum {sum}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                    Avg sum {avgSum}
                </Typography>
                {delButton &&
                    <Button
                        variant="contained"
                        color="default"
                        endIcon={<DeleteIcon />}
                        onClick={() => deleteItems()}
                    >
                        Delete All
                    </Button>
                }
            </Container>
        </footer>
    )
}
