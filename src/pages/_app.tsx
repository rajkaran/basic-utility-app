import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../../components/Header'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <CssBaseline />
      {/* <Container maxWidth="xl"> */}
        <Header></Header>
        <Component {...pageProps} />
      {/* </Container>     */}
  </> 
}
