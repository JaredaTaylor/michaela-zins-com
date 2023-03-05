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
import { useState } from 'react';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';

function compareDates(a, b) {
    return b.year - a.year;
}

const Art = ({ art, goToProductPage }) => {
    const { id, title, imgLink, desc, dimensions, forSale, medium, year } = art

    return (
        <Fade
            in={true}
            timeout={2000}
        >
            <ImageListItem
                style={{cursor: 'pointer'}}
                onClick={() => goToProductPage(title, art)}>
                <img
                    src={`${imgLink}?w=250&auto=format`}
                    srcSet={`${imgLink}?w=250&auto=format&dpr=2 2x`}
                    alt={title}
                />
                <ImageListItemBar
                    title={title}
                    subtitle={<span>{medium}</span>}
                    position="below"
                />
            </ImageListItem>
        </Fade>
    )
};

const ArtworkContainer = () => {
    const { artworkMap, selectedCategory, setSelectedCategory } = React.useContext(ArtworkContext);
    const categories = ['prints', 'paintings', 'digital media'];
    // have website remember context for category selection
    const [activeCategory, setActiveCategory] = useState(selectedCategory); 
    const [isShowing, setIsShowing] = useState(false);
    const router = useRouter();
    // Navigate to product's page
    const goToProductPage = (artworkHandle, artworkInfo) => {
        router.push({pathname: `/artwork/${artworkHandle}`, query: artworkInfo})
    };

    // Update activeCategory and isShowing
    const openCategory = (category) => {
        setActiveCategory(category);
        setIsShowing(true);
    };

    // Update global prop and setActiveCategory
    const updateCategory = (category) => {
        setActiveCategory(category);
        setSelected
        // update chosenCategory info in artwork context?
    }
    

    return (
        <Box key='page-container'>
            {
                // TODO: Replace 'no products' with loading animation
                (artworkMap) ?
                // iterate through keys
                (
                // if there is an active category, then display all contents and bold/underline category
                    (activeCategory) ? (
                        <Container maxWidth='xl'>
                            <Box mt={2} sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                                {categories.map((category) => (
                                    // if category is equal to active category, render differently
                                    (category === activeCategory) ? (
                                        <Button disabled sx={{padding: 1, mx: 1}} size='medium' variant='contained' key={category} onClick={() => setActiveCategory(category)}>
                                            <Typography color='#000000' variant='body'>{category}</Typography>
                                        </Button>
                                    ) : (
                                        <Button sx={{padding: 1, mx: 1}} size='medium' variant='contained' key={category} onClick={() => setActiveCategory(category)}>
                                            <Typography color='#000000' variant='body'>{category}</Typography>
                                        </Button>
                                    )
                                ))}
                            </Box>
                            <Box key='eqXsmall' sx={{display: {xs: 'inline', md:'none'}}}>
                                <ImageList key={activeCategory} cols={1} gap={20}>
                                    {artworkMap[activeCategory].sort(compareDates).map((artworkInfo) => (
                                        <Art
                                        key={artworkInfo.id}
                                        art={artworkInfo}
                                        goToProductPage={goToProductPage}
                                        />
                                    ))}
                                </ImageList>
                            </Box>
                            <Box key='gtMedium' sx={{display: {xs: 'none', md: 'inline'}}}>
                                <ImageList key={activeCategory} cols={4} gap={10}>
                                    {artworkMap[activeCategory].sort(compareDates).map((artworkInfo) => (
                                        <Art
                                        key={artworkInfo.id}
                                        art={artworkInfo}
                                        goToProductPage={goToProductPage}
                                        />
                                    ))}
                                </ImageList>
                            </Box>
                        </Container>
                    ) : (
                        <Container maxWidth='xl'>
                            <Box mt={2} sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                                {categories.map((category) => (
                                    <Button sx={{padding: 1, mx: 1}} size='medium' variant='contained' key={category} onClick={() => openCategory(category)}>
                                        <Typography color='#000000' variant='body'>{category}</Typography>
                                    </Button>
                                ))}
                            </Box>
                            <Typography my={2} align='center'>Please select a category.</Typography>
                        </Container>
                    )
                ) : (
                    <Spinner />
                )
            }
        </Box>
    )
};

export default ArtworkContainer;