import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container  from '@mui/material/Container';


const GlobalNavigation = () => {
    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Link href="/" underline="none" color="inherit"><Typography variant='h6' mr={2}>Michaela Zinsmeister</Typography></Link>
                    <Link href="/artwork" underline="none" color="inherit"><Typography variant='h5' mr={2}>Artwork</Typography></Link>
                </Toolbar>
            </Container>
        </AppBar>
        
    );
};

//        <AppBar position="static">
//            <Toolbar>
//                <Link href="/artwork" underline="none" color="inherit"><Typography mr={2}>All Artwork</Typography></Link>
//                <Link href="/artwork/collections/early-work" underline="none" color="inherit"><Typography mr={2}>Early Work</Typography></Link>
//            </Toolbar>
//        </AppBar>

export default GlobalNavigation;