import React, { useState, useEffect } from 'react';
import {  Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { MdRecentActors } from 'react-icons/md';

const RecentOrders = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersData => {
        setUsers(usersData);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div style={{marginRight:'100%', width: '30%', position: 'relative', height: '70vh', maxHeight: '100vh', padding: '16px', borderRadius: '8px', opacity:'100%', overflowY: 'auto' }}>
      <Typography variant="h5" style={{ fontWeight: 'bold' }}>MGA USERS</Typography>
      <List>
        {users.map((user, index) => (
          <ListItem key={index} className="hover:bg-gray-100 rounded-lg my-3 cursor-pointer">
            <ListItemText primary={user.username} secondary={user.email} />
            <Typography variant="body2" style={{ position: 'absolute', right: '16px', display: 'none', '@media (min-width:600px)': { display: 'block' } }}>{user.name}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RecentOrders;

