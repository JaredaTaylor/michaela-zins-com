import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Link from '@mui/material/Link';
import { FaInstagram } from 'react-icons/fa';
import { GiRhinocerosHorn } from 'react-icons/gi';
import Box from '@mui/system/Box';

export default function Footer() {
    return (
        <BottomNavigation sx={{width:'100%'}} >
            <Box  width={150} container direction="row" sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <Link href='https://www.instagram.com/michaelaz.paints/'>
                    <FaInstagram size={22} color='black' />
                </Link>
                {/* <Link href='https://hooplapress.ca/salon-gallery-shop/michaela-zinsmeister'>
                    <GiRhinocerosHorn size={22} color='black' />
                </Link> */}
            </Box>
        </BottomNavigation>
    )
}