import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';
import Mining4InsightsIcon from './Mining4InsightsIcon';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)` : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
//   console.log('user', user);
//   console.log('isAuthenticated', isAuthenticated);

const userMenuOpen = Boolean(anchorEl);
const handleAvatarClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleUserMenuClose = () => {
  setAnchorEl(null);
};


  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              px: 0,
            }}
          >
            <IconButton onClick={() => navigate('/')}>
              <Mining4InsightsIcon />
            </IconButton>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              <Button variant="text" color="info" size="small">
                Features
              </Button>
              <Button variant="text" color="info" size="small">
                Testimonials
              </Button>
              <Button variant="text" color="info" size="small">
                Highlights
              </Button>
              <Button variant="text" color="info" size="small">
                Pricing
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{
                  minWidth: 0,
                }}
              >
                FAQ
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{
                  minWidth: 0,
                }}
              >
                Blog
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {!isAuthenticated ? (
              <>
                <Button color="primary" variant="text" size="small" onClick={() => navigate('/signin')}>
                  Sign in
                </Button>
                <Button color="primary" variant="contained" size="small" onClick={() => navigate('/signup')}>
                  Sign up
                </Button>
              </>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar src={user?.profile_picture} sx={{ width: 32, height: 32 }} alt={user?.username}>
                  {user?.username?.[0]}
                </Avatar>
                <Typography variant="body1">{user?.username || user?.email}</Typography>
                <Button variant="contained" size="small" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            )}
            <ColorModeIconDropdown />
          </Box>
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              gap: 1,
            }}
          >
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box
                sx={{
                  p: 2,
                  backgroundColor: 'background.default',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider
                  sx={{
                    my: 3,
                  }}
                />

                {!isAuthenticated ? (
                  <>
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="outlined"
                        fullWidth
                        onClick={() => {
                          navigate('/signin');
                        }}
                      >
                        Sign in
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        onClick={() => {
                          navigate('/signup');
                        }}
                      >
                        Sign up
                      </Button>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar src={user?.profile_picture} alt={user?.username} sx={{ width: 36, height: 36 }} />
                    <Typography variant="body1" flexGrow={1}>
                      {user?.username || user?.email}
                    </Typography>
                    <Button color="primary" variant="contained" size="small" onClick={handleLogout}>
                      Logout
                    </Button>
                  </MenuItem>
                )}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
