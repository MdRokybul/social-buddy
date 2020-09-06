import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [allPost, setAllPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setAllPost(data))
    },[])
    return (
        <div>
            {
                allPost.map(posts => <Posts key={posts.id} posts={posts}></Posts>)
            }
        </div>
    );
};

export default Home;