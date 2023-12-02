import React, { useState } from 'react';
import CustomDrawer from '../../../components/CustomDrawer';
import { Box } from '@mui/material';

const MyPage: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };
  
    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };
  
    return (
      <Box sx={{display: 'flex'}}>
        <CustomDrawer open={drawerOpen} handleClose={handleDrawerClose} />
        <Box sx={{paddingLeft: '10px', paddingTop: '10px'}}>
            <button onClick={handleDrawerOpen}>Open Drawer</button>
            <div>clkjhgfdgxfchjkljhgfxchjkl;kj</div>
        </Box>
      </Box>
    );
  };

export default MyPage