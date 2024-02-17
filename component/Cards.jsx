
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const TopCards = () => {
    const [totalUsers, setTotalUsers] = useState(null);
    const [totalPosts, setTotalPosts] = useState(null);
    const [totalComments, setTotalComments] = useState(null);
    const [totalTodos, setTotalTodos] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setTotalUsers(users.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setTotalPosts(posts.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => {
                setTotalComments(comments.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                setTotalTodos(todos.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                <Link href="/users">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {totalUsers}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                User
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Link href="/post">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {totalPosts}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Posts
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Link href="/comments">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {totalComments}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Comments
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Link href="/todos">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {totalTodos}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Todos
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
        </Grid>
    );
};

export default TopCards;
