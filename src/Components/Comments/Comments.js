import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    image: {
        marginTop: '20px',
    }
}));




const Comments = (props) => {
    const { name, email, body } = props.comment;
    const classes = useStyles();
    const [pic, setImage] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setImage(data.results))
    }, [])
    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2} >
                        <Grid item >
                            <div className={classes.image}>
                            <Avatar> {pic.map(photo => <img src={photo.picture.thumbnail} alt='' key={photo.email} />)} </Avatar>
                            </div>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <h4> Name: {name} </h4>
                            <p> E-mail: {email} </p>
                            <p> Body: {body} </p>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default Comments;