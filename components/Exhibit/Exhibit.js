import React from 'react';
import { 
    Card,
    CardContent,
    Typography,
    ImageList,
    ImageListItem,
    ImageListItemBar, 
} from '@mui/material';
import styled from 'styled-components';
import Fade from '@mui/material/Fade';

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 0.5rem;
  border-radius: 8px;
`;

const StyledImageList = styled(ImageList)`
  margin-top: 1rem;
`;

const Exhibit = ({ title, short, long, images }) => {
  return (
    <Fade
        in={true}
        timeout={500}
    >
    <Card sx={{ marginBottom: 4 }}>
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" gutterBottom>{short}</Typography>
        <StyledImageList
          variant="masonry"
          cols={4}
          gap={8}
        >
          {images.map((image, index) => (
            <ImageListItem
              key={index}
              cols={image.cols || 1}
              rows={image.rows || 1}
            >
              {/* <Image
                src={image.src}
                alt={image.alt || `${title} image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 600px) 100vw, 25vw"
              /> */}
                <img
                    srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${image.src}?w=248&fit=crop&auto=format`}
                    alt={image.alt}
                    loading="lazy"
                />
            </ImageListItem>
          ))}
        </StyledImageList>
        <Typography variant="body1" paragraph>{long}</Typography>
      </CardContent>
    </Card>
    </Fade>
  );
};

export default Exhibit;