import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ArtworkContainer from '../components/ArtworkContainer/ArtworkContainer';
//import Navigation from '../components/ArtworkNavigation/ArtworkNavigation';
//import { shopifyClient, parseShopifyResponse } from '../utils/shopify';
import GlobalNavigation from '../components/GlobalNavigation/GlobalNavigation';
import Footer from '../components/Footer/Footer';
import { ArtworkProvider } from '../context/artwork.context';
import { ArtworkContext } from '../context/artwork.context';

export default function Artwork() {

  return (
    <Box>
      <GlobalNavigation />
      <ArtworkProvider>
        <Container maxWidth="lg">
          <ArtworkContainer />
        </Container>
      </ArtworkProvider>
      <Footer />
    </Box>
  );
};

/*
export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
   props: {
    products: parseShopifyResponse(products),
  },
 };
};
*/