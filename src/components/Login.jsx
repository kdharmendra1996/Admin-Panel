import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles'; 
import { tokens, ColorModeContext } from '../theme'; // Adjust path as necessary
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import { MyContext } from '../App';

const LoginAdmin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const context = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    context.setIsSideBarAndHeader(false);
  }, [context]); 

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    
    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
    
    } catch (err) {
      
      setError('Login failed. Please check your username and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="97vh" 
      sx={{ backgroundColor: colors.primary[700] }} 
    >
      <Avatar src='https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg'
              width="200px"
      />
      <Typography variant="h3" fontWeight="bold" mt="14px" mb="14px" color={colors.primary[100]}>
        Login To Admin
      </Typography>
      <Box 
        component="form" 
        onSubmit={handleLogin} 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          width: '300px', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: 3 ,
          backgroundColor: colors.primary[400] 
        }}
      >
        <TextField 
          name="username"
          variant="filled" 
          margin="normal" 
          label='Enter your email'
          fullWidth 
          required
        />
        <TextField 
          label="Password" 
          name="password" 
          variant="filled" 
          type="password" 
          margin="normal" 
          fullWidth 
          required
        />
        {error && <Typography color="error">{error}</Typography>} 
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          sx={{ marginTop: '20px' }}
          disabled={loading} 
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginAdmin;
