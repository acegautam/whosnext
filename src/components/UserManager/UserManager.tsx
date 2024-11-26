import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  TextField,
  Button,
  IconButton,
  Paper,
  Box,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StyledHeader } from '../Header/HeaderStyles';
import { UserManagerContainer } from './UserManagerStyles';

interface User {
  name: string;
}

interface UjimaDoc {
  data: {
    participants: User[];
    presented: string[];
  };
  ref: any;
  ts: number;
}

interface ApiResponse {
  data: UjimaDoc[];
}

const UserManager: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get<ApiResponse>('/.netlify/functions/manageUsers');
      console.log('API Response:', response.data);
      console.log('Users array:', response.data.data[0].data.participants);
      setUsers(response.data.data[0].data.participants || []);
    } catch (err) {
      setError('Failed to fetch users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    if (newUser.trim()) {
      try {
        setLoading(true);
        await axios.post('/.netlify/functions/manageUsers', {
          name: newUser.trim()
        });
        setNewUser('');
        fetchUsers(); // Refresh the list
      } catch (err) {
        setError('Failed to add user');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRemoveUser = async (name: string) => {
    try {
      setLoading(true);
      await axios.delete('/.netlify/functions/manageUsers', {
        data: { name }
      });
      fetchUsers(); // Refresh the list
    } catch (err) {
      setError('Failed to remove user');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddUser();
    }
  };

  return (
    <UserManagerContainer maxWidth="sm">
        <StyledHeader>
        <div className="title">Manage folks</div>
      </StyledHeader>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              label="New User"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
            <Button 
              variant="contained" 
              onClick={handleAddUser}
              disabled={!newUser.trim() || loading}
              className='add-button'
            >
              Add
            </Button>
          </Box>
        </Paper>

        <Paper>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
              <CircularProgress />
            </Box>
          ) : (
            <List className='user-list'>
              {users.length === 0 ? (
                <ListItem>
                  <ListItemText primary="No users added yet" />
                </ListItem>
              ) : (
                users.map((user, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={user.name} className='name-label' />
                    <ListItemSecondaryAction>
                      <IconButton 
                        edge="end" 
                        aria-label="delete"
                        onClick={() => handleRemoveUser(user.name)}
                        disabled={loading}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              )}
            </List>
          )}
        </Paper>

        <Box sx={{ mt: 2 }}>
          <Button 
            variant="outlined" 
            onClick={() => navigate('/')}
            disabled={loading}
            className='back-button'
          >
            Back to Board
          </Button>
        </Box>
      </Box>

      <Snackbar 
        open={!!error} 
        autoHideDuration={6000} 
        onClose={() => setError(null)}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </UserManagerContainer>
  );
};

export default UserManager;