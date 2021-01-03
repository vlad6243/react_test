import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function CreateItem({addItem}) {
    const classes = useStyles();
    const [item, setItem] = React.useState({
        itemName: "",
        description: "",
        imgUrl: "",
        price:0
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if(item.itemName !== "" && item.description !== "" && item.price > 0) {
            addItem(item);
            setItem({
                itemName: "",
                description: "",
                imgUrl: "",
                price: 0
            })
        }
    };

    const handleInputChange = (event) => {
        setItem((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="itemName"
                        label="Item name"
                        name="itemName"
                        value={item.itemName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="description"
                        label="Description"
                        id="description"
                        onChange={handleInputChange}
                        value={item.description}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="imgUrl"
                        label="Image url"
                        id="imgUrl"
                        onChange={handleInputChange}
                        value={item.imgUrl}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="price"
                        label="Price"
                        id="price"
                        type="number"
                        onChange={handleInputChange}
                        value={item.price}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add item
                    </Button>
                </form>
            </div>
        </Container>
    )
}