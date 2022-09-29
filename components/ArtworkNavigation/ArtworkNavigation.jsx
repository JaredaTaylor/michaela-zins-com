import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const ArtworkNavigation = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link href="/artwork" underline="none" color="inherit"><Typography mr={2}>All Artwork</Typography></Link>
                <Link href="/artwork/collections/early-work" underline="none" color="inherit"><Typography mr={2}>Early Work</Typography></Link>
            </Toolbar>
        </AppBar>
    )
};

export default ArtworkNavigation;