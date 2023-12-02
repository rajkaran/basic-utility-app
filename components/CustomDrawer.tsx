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
interface CustomDrawerProps {
    open: boolean;
    handleClose: () => void;
  }

const CustomDrawer: React.FC<CustomDrawerProps> = ({ open, handleClose }) => {
    const router = useRouter();
    
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
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        onClose={handleClose}
        sx={{
          width: 240,
        }}
      >
        <List sx={{
          width: 240,
        }}>
          <ListItem button>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </>

    
  );
};

export default CustomDrawer