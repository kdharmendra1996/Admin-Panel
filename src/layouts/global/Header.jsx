import React, { Fragment, useContext, useState } from 'react';
import { Box, IconButton, useTheme, Avatar, Divider, ListItemIcon, Typography, Button } from '@mui/material';
import { ColorModeContext, tokens } from "../../theme";
import InputBase from '@mui/material/InputBase';
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MyContext } from "../../App";
import { Link, useNavigate } from 'react-router-dom';
import AddAccountModal from '../../components/AddAccountModal';
import { useProSidebar } from 'react-pro-sidebar';

const NotificationItem = ({ name, time }) => (
    <Box display="flex" justifyContent="space-between" alignItems="center" py={1}>
      <Avatar />
      <Box mx={2}>
        <Typography variant="body1">
          <strong>{name}</strong> sent a request
        </Typography>
        <Typography variant="body2" color="textSecondary">{time} ago</Typography>
      </Box>
      <MoreVertIcon />
    </Box>
  );

const HeaderComponent = () => {
const context = useContext(MyContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggleSidebar, broken, rtl } = useProSidebar();

  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = React.useState(null);
  const [notificationMenuAnchorEl, setNotificationMenuAnchorEl] = React.useState(null);

  const accountMenuOpen = Boolean(accountMenuAnchorEl);
  const notificationMenuOpen = Boolean(notificationMenuAnchorEl);

  const handleAccountMenuClick = (event) => {
    setAccountMenuAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuClick = (event) => {
    setNotificationMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAccountMenuAnchorEl(null);
    setNotificationMenuAnchorEl(null);
  };

  
  const handleLogout = () => {
    context.setIsLogin(false); 
    navigate('/login');
  };
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddAccount = (account) => {
    console.log('New Account Added:', account);
    handleMenuClose(); 
  };



  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          p={0.2}
          borderRadius={1}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            
           <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
         {/* Notification Menu */}
         <Tooltip title="Notification settings">
            <IconButton onClick={handleNotificationMenuClick}>
              <NotificationsOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={notificationMenuAnchorEl}
            open={notificationMenuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box display="flex" justifyContent="space-between" p={2}>
              <Typography variant="h6">Notifications</Typography>
              <SettingsOutlinedIcon fontSize="small" />
            </Box>
            <Divider />
            <MenuItem>
              <Box display="flex" justifyContent="center" flexDirection="column" sx={{ width: 100 }}>
                <NotificationItem name="Mohan Kumar" time="a few seconds" />
                <NotificationItem name="John Doe" time="5 minutes" />
                <NotificationItem name="Jane Smith" time="10 minutes" />
              </Box>
              <Button variant="text" fullWidth>View All Notifications</Button>
            </MenuItem>
          </Menu>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        {/* Account Menu */}

        {context.isLogin !== true ? (
            <Link to={"/login"}>
              <Button
                sx={{
                  backgroundColor: colors.greenAccent[700],
                  color: colors.grey[100],
                  fontSize: '12px',
                  fontWeight: 'semibold',
                  padding: '5px 10px',
                  borderRadius: "24px"
                }}
              >Sign In</Button>
            </Link>
          ) : (
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleAccountMenuClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={accountMenuOpen ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={accountMenuOpen ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          )}
          <Menu
            anchorEl={accountMenuAnchorEl}
            id="account-menu"
            open={accountMenuOpen}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleMenuClose}>
            <Link
    to={'/profile'}
    style={{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    }}
  >
    <Avatar sx={{ marginRight: '12px' }} />
    <Typography>Profile</Typography>
  </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Avatar sx={{ marginRight: "12px" }} />  My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => { setModalOpen(true); handleMenuClose(); }}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>

      <AddAccountModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddAccount={handleAddAccount}
      />
            <MenuItem onClick={handleMenuClose}>
            <Link
    to={'/reset-password'}
    style={{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    }}
  >
              <ListItemIcon>
                <GppMaybeIcon fontSize="small" />
              </ListItemIcon>
             <Typography> Reset Password</Typography>
            </Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}> 
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default HeaderComponent;
