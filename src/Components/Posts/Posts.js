import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '20px 0px',
        border: '1px solid black',
    },
});

const Posts = (props) => {
    const { id, title, body } = props.posts;
    const classes = useStyles();
    const history = useHistory();
    const handleReadMoreButton = (id) => {
        history.push(`/post/${id}`)
    }
    
    return (
        <Container  maxWidth="sm">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={() => handleReadMoreButton(id)} > Read more </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default Posts;