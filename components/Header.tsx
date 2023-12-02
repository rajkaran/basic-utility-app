import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FlipIcon from '@mui/icons-material/Flip';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HeaderMenu from './HeaderMenu';
import styled from '@emotion/styled';
import { fontGrid } from '@mui/material/styles/cssUtils';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router'

const Logo = styled(Button)({
  fontWeight: 600,
  fontSize: '22px',
  
})

const Header = () => {

  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const activeRoute = (routeName: string, currentRoute: any) => {
    return routeName === currentRoute? true : false;
  }
  
  const routes = [
    {
      id: 1, 
      label:'Date Conversion', 
      path: '/date-conversion', 
      icon: DateRangeIcon
    }, 
    {
      id: 2, 
      label: 'File Compare', 
      path: '/file-compare', 
      icon: AttachFileIcon
    }, 
    {
      id: 3, 
      label: 'PDF Merger', 
      path: '/pdf-merger', 
      icon: PictureAsPdfIcon
    },
    {
      id: 4, 
      label: 'Image Objects', 
      path: '/image-object', 
      icon: ImageIcon
    }
  ];

  return (
    <>
      <Box >
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>

            <IconButton size="large" edge="start" color="inherit" aria-label="App Logo" href="/" sx={{ display: { xs: 'flex' }, mr: 1 }}>
              <FlipIcon />
            </IconButton>

            <Logo variant="text" size="large" color="inherit" aria-label="App Logo" href="/" sx={{ display: { xs: 'flex' } }}>
              Utility App
            </Logo>

            <HeaderMenu/>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{display: 'flex'}}>
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          }}
        >
          
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {['Inbox', 'Datetime Conversion', 'Compare', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    {/* <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon> */}
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List>
              {routes.map((item, index) => (
                <Link  href={item.path} style={{ textDecoration: 'none', color: 'black' }} key={index}>
                  <MenuItem selected={activeRoute(item.path, router.pathname)}>
                    <ListItem button key={index}  >
                      <ListItemIcon> <item.icon /> </ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  </MenuItem>
                </Link>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box sx={{paddingLeft: '10px', paddingTop: '74px'}}>
            {/* <button onClick={handleDrawerOpen}>Open Drawer</button> */}
            <div>clkjhgfdgxfchjkljhgfxchjkl;kj</div>
        </Box>
      </Box>
      
    </>
    

  )
}

export default Header