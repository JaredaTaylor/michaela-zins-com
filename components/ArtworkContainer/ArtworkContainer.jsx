import * as React from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import Container from '@mui/system/Container';
import { ArtworkContext } from '../../context/artwork.context';
import Spinner from '../spinner/spinner';

const Art = ({ art, goToProductPage }) => {
    const { id, title, imgLink, desc, dimensions, forSale, medium } = art

    return (
        <ImageListItem
            style={{cursor: 'pointer'}}
            onClick={() => goToProductPage(title, art)}>
            <img
                src={`${imgLink}?w=250&auto=format`}
                srcSet={`${imgLink}?w=250&auto=format&dpr=2 2x`}
                alt={title}
                loading="lazy"
            />
            <ImageListItemBar
                title={title}
                subtitle={<span>{medium}</span>}
                position="below"
            />
        </ImageListItem>
    )
};

const ArtworkContainer = () => {
    const { artworkMap } = React.useContext(ArtworkContext);
    //console.log(artworkMap);
    const router = useRouter();
    // Navigate to product's page
    const goToProductPage = (artworkHandle, artworkInfo) => {
        router.push({pathname: `/artwork/${artworkHandle}`, query: artworkInfo})
    };
    

    return (
        <Box key='page-container'>
            {
                // TODO: Replace 'no products' with loading animation
                (artworkMap) ?
                // iterate through keys
                (Object.keys(artworkMap).map((title) => (
                    <Container maxWidth='xl' key={title}>
                        <Box key='eqXsmall' sx={{display: {xs: 'inline', md:'none'}}}>
                            <h3>{title.toUpperCase()}</h3>
                            <ImageList key={title} cols={1} gap={20}>
                                {artworkMap[title].map((artworkInfo) => (
                                    <Art
                                    key={artworkInfo.title}
                                    art={artworkInfo}
                                    goToProductPage={goToProductPage}
                                    />
                                ))}
                            </ImageList>
                        </Box>
                        <Box key='gtMedium' sx={{display: {xs: 'none', md: 'inline'}}}>
                            <h3>{title.toUpperCase()}</h3>
                            <ImageList key={title} cols={4} gap={10}>
                                {artworkMap[title].map((artworkInfo) => (
                                    <Art
                                    key={artworkInfo.title}
                                    art={artworkInfo}
                                    goToProductPage={goToProductPage}
                                    />
                                ))}
                            </ImageList>
                        </Box>
                    </Container>
                ))) : (
                    <Spinner />
                )
            }
        </Box>
    )
};

export default ArtworkContainer;