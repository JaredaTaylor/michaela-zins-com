import * as React from 'react';
import { useRouter } from 'next/router';


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GlobalNavigation from '../../components/GlobalNavigation/GlobalNavigation';
import Footer from '../../components/Footer/Footer';


//import ArtworkNavigation from '../../components/ArtworkNavigation/ArtworkNavigation';
//import BreadcrumbsNavigation from '../../components/BreadcrumbsNavigation/BreadcrumbsNavigation';
//import { shopifyClient, parseShopifyResponse } from '../../utils/shopify';

const ArtworkPage = () => {

    const router = useRouter();
    const  { desc, dimensions, forSale, id, imgLink, medium, title, year } = router.query;

    return (
        <Box>
            <GlobalNavigation />
            <Container maxWidth="lg">
                <Box key='gtMedium' mt={4} container direction="row" sx={{display: {xs: 'none', md:'flex'}}}>
                    <Box mx={2} width='50%'>
                        <img
                            src={imgLink}
                            alt={`Picture of ${title}`}
                            width='100%'
                        />
                    </Box>
                    <Box mx={2} width='50%'>
                        <Typography variant="h3" my={2}>{title}</Typography>
                        <Grid mt={2}>
                            <Typography variant="h6" component="span">{medium}</Typography>
                            <Grid container direction='column'>
                                <Typography variant="body1" component="span">{desc}</Typography>
                                <Typography variant="body1" component="span">{dimensions}</Typography>
                                <Typography variant="body1" component="span">{year}</Typography>
                                { (forSale === true) ? (
                                    <Typography variant="body1" component="span">Contact michaelazinsmeister@gmail.com for purchase.</Typography>
                                ) : (<></>)
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </Box>





                <Grid mt={4} key='ltMedium' container direction="column" sx={{display: {xs: 'flex', md:'none'}}}>
                    <Box mx={2} sx={{display:'flex'}}>
                        <img
                            src={imgLink}
                            alt={`Picture of ${title}`}
                            width='100%'
                        />
                    </Box>
                    <Box mx={2}>
                        <Typography variant="h5" my={1}>{title}</Typography>
                        <Grid mx={1}>
                            <Typography variant="h6" component="span">{medium}</Typography>
                            <Grid container direction='column'>
                                <Typography variant="body1" component="span">{desc}</Typography>
                                <Typography variant="body1" component="span">{dimensions}</Typography>
                                <Typography variant="body1" component="span">{year}</Typography>
                                { (forSale === true) ? (
                                    <Typography variant="body1" component="span">Contact michaelazinsmeister@gmail.com for purchase.</Typography>
                                ) : (<></>)
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default ArtworkPage;

/*
export const getServerSideProps = async ({ params }) => {
    const { productHandle } = params
    // fetch product
    const product = await shopifyClient.product.fetchByHandle(productHandle);

    return {
        props: {
            product: parseShopifyResponse(product),
        },
    };
};
*/