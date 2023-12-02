import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../../components/Header'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <CssBaseline />
      <Box sx={{display: 'flex'}}>
        <Header></Header>
        <Box sx={{paddingLeft: '10px', paddingTop: '10px'}}>
            {/* <button onClick={handleDrawerOpen}>Open Drawer</button> */}
            <Component {...pageProps} />
        </Box>
        
      </Box>    
  </> 
}
