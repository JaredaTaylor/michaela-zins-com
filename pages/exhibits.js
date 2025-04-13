import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import GlobalNavigation from '../components/GlobalNavigation/GlobalNavigation';
import Footer from '../components/Footer/Footer';
import Fade from '@mui/material/Fade';
// import { ArtworkProvider } from '../context/artwork.context';
import { ArtworkContext } from '../context/artwork.context';
import Exhibit from '../components/Exhibit/Exhibit';
import { addQuiltedLayoutToExhibitImages } from '../utils/layoutUtils';
import Spinner from '../components/spinner/spinner';

export default function Exhibits() {
    const { artworkMap } = React.useContext(ArtworkContext);
    const exhibits = artworkMap?.exhibits;
    const layout = addQuiltedLayoutToExhibitImages(exhibits);
    // console.log(layout);

    return (
        <>
        <GlobalNavigation />
        <Container sx={{ paddingY: 5 }}>
            <Typography variant="h3" gutterBottom>Exhibits</Typography>
            {exhibits ? (
                Object.entries(exhibits).map(([key, exhibit], idx) => (
                    <Exhibit key={idx} {...exhibit} />
                ))
            ) : (
                <Spinner />
            )}
        </Container>
        <Footer />
        </>
        );
};