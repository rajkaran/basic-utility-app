import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import {Menu, MenuItem, Link, Box} from '@mui/material'

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: 'flex' }, mr: 1 }}>
        <IconButton size="large" edge="end" color="inherit" aria-label="Menu" id="menu-icon-button" aria-controls={open ? 'icon-menu' : undefined}
        aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>

        <Menu id="icon-menu" MenuListProps={{ 'aria-labelledby': 'menu-icon-button', }} anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem component={Link} href='/register' >Register</MenuItem>
          <MenuItem component={Link} href='/login'>LogIn</MenuItem>
          <MenuItem component={Link} href='/profile'>Profile</MenuItem>
          <MenuItem component={Link} href='/logout'>Logout</MenuItem>
        </Menu>
      </Box>
      
    </>
  )
}

export default HeaderMenu