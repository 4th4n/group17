
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardActions, Avatar, Typography, Divider } from '@mui/material';

const comment = () => {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(commentData => {
        setComments(commentData);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(postData => {
        setPosts(postData);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '10px 20px', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" component="h2">COMMENTS</Typography>
      </div>
      <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
        <div style={{ padding: '20px' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', overflowY: 'auto' }}>
            {posts.map(post => {
              const comment = comments.find(comment => comment.postId === post.id);
              return (
                <Card key={post.id} style={{ marginBottom: '20px' }}>
                  <CardHeader
                    avatar={<Avatar src=" " alt={comment ? comment.name : 'Unknown User'} />}
                    title={comment ? comment.name : 'Unknown User'}
                    subheader={comment ? comment.email : 'Unknown Email'}
                  
                  />
                  <CardContent>
                    <Typography variant="body1">{post.body}</Typography>
                    <Typography variant="body2" color="textSecondary">
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                  </CardActions>
                  <Divider />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default comment;