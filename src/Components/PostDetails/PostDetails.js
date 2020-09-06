import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '50%',
        display: 'flex',
        margin: '0 auto'
        
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const PostDetails = () => {
    let { id } = useParams();
    const classes = useStyles();

    //THIS IS POST STATE
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    //THIS IS COMMENTS STATE
    const [comment, setComment] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [id]);
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <h2>{post.title}</h2>
                    </Typography>
                    <Typography variant="body2" component="p">
                        {post.body}
                        <br />
                    </Typography>
                </CardContent>
            </Card>
            {
                comment.map(comment => <Comments key={comment.id} comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetails;