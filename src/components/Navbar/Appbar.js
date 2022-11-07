import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import  AppDrawer  from '../Drawer/index';
import { CustomDivider, Header } from './NavbarElement';
import { FormatListNumberedRounded } from '@mui/icons-material';

export default function PrimaryAppBar(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Header>
          <AppDrawer setDrawerState={props.setDrawerState} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ p: 1 }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge max={3} badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ p: 1 }}>
              <IconButton
                size="large"
                color="inherit"
              >
                <Badge max={3} badgeContent={3} color="success">
                  <FormatListNumberedRounded />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ p: 1 }}>
              <CustomDivider light={true} orientation="vertical" variant="middle" flexItem />
            </Box>
            <Box sx={{ p: 1 }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Box>
            <Box sx={{ p: 1 }}>
              <Typography>Maman Ketoprak</Typography>
            </Box>
        </Header>
      </AppBar>
    </Box>
  );
}
