import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import GlobalNavigation from '../components/GlobalNavigation/GlobalNavigation';
import Footer from '../components/Footer/Footer';
import Fade from '@mui/material/Fade';

export default function CV() {
  return (
    <>
      <GlobalNavigation />
      <Fade
        in={true}
        timeout={500}
      >
        <Container maxWidth="lg">
            <Box mx={10} mt={2} sx={{display:'inline'}}>
                <Typography align="center" variant='h5'>michaelazinsmeister@gmail.com</Typography>

                <Typography mt={2} align="left" variant='h6'>Education:</Typography>
                <Typography mt={1} align="left" variant='body1'>BFAH – Visual Arts (Painting & Printmaking), Art History Minor</Typography>
                <Typography mt={1} align="left" variant='body1'>Dean’s Honour List, Queen’s University</Typography>

                <Typography mt={2} align="left" variant='h6'>Related Professional Experience:</Typography>
                <Typography mt={1} align="left" variant='body1'>Kingston School of Art - Art Instructor</Typography>
                <Typography align="left" variant='body2'>January 2023 - Present</Typography>
                <Typography mt={1} align="left" variant='body1'>Queen’s University - Print Technician Assistant</Typography>
                <Typography align="left" variant='body2'>September 2022 – April 2023</Typography>
                <Typography mt={1} align="left" variant='body1'>Queen’s University – Digital Media Lab Assistant</Typography>
                <Typography align="left" variant='body2'>January 2022 – April 2022</Typography>

                <Typography mt={2} align="left" variant='h6'>Related Professional Experience:</Typography>
                <Typography mt={1} align="left" variant='body1'>2023, OFFLINE: Graduating Exhibition, Ontario Hall, Kingston, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2023, Student & Staff Show, Window Art Gallery, Kingston School of Art, Kingston, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2023, [B]etter [F]utures [A]head, Union Gallery, Kingston, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2023, Cézanne’s Closet, Union Gallery, Kingston, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2022, Collaborative Mural (live contribution), Union Gallery, Kingston, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2022, ODDITIES Group Show, Minotaur, Kingston, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2022, OPEN: Forworld Group Show, Window Art Gallery, Kingston School of Art, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2022, OPEN: Forworld Group Show, Window Art Gallery, Kingston School of Art, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2022, Cézanne’s Closet, Union Gallery, Kingston, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2021, Group Exhibition, Juniper Café, Kingston, ON</Typography>
                <Typography mt={1} align="left" variant='body1'>2019, FORM: first year in 3D, Isabel Bader Centre for the Performing Arts, Kingston, ON</Typography>

                <Typography mt={2} align="left" variant='h6'>Projects:</Typography>
                <Typography mt={1} align="left" variant='body1'>2023, Jardin’art</Typography>
                <Typography align="left" variant='body2'>Participating artist assigned to Miss Baō restaurant in downtown Kingston. Project initiated by Martello Alley with partnership funding from RTO9 – Southeast Ontario Regional Tourism Organization.</Typography>
                <Typography mt={1} align="left" variant='body1'>2022, Collaborative Mural</Typography>
                <Typography align="left" variant='body2'>Part of: Creating Communities Through Art Exhibition, Project Room, Union Gallery, Kingston, ON, Including live studio sessions. Other Participants: William Carroll, Floriana Ehninger-Cuervo, Sasha French, Abby Gowland, Jayne Negus, Heather Poechman, and Margeret Wiwchar.</Typography>
                <Link color="inherit" href="https://uniongallery.queensu.ca/exhibition/archive/creating-communities-through-art.html">Exhibition Archive</Link>
                <Typography mt={1} align="left" variant='body1'>2021-2022, Forworld Studios Artist Collective</Typography>
                <Typography align="left" variant='body2'>A founding member alongside Francisco Corbett and William Carroll. Formed a small artist collective with a mission to make a safe creative community for young, emerging artists in Kingston, ON</Typography>
                
                <Typography mt={2} align="left" variant='h6'>Teaching Experience:</Typography>
                <Typography mt={1} align="left" variant='body1'>Printmaking Instructor</Typography>
                <Typography align="left" variant='body2'>Kingston School of Art: Kingston, ON, CA. 2023</Typography>
                <Typography mt={1} align="left" variant='body1'>Volunteer Summer Arts Programming Facilitator</Typography>
                <Typography align="left" variant='body2'>Youth Diversion Group: Kingston, ON, CA. 2022</Typography>

                <Typography mt={2} align="left" variant='h6'>Publications and Awards:</Typography>
                <Typography mt={1} align="left" variant='body1'>2023, Collective Reflections, Volume 10</Typography>
                <Typography mt={1} align="left" variant='body1'>2022, Volunteer of the Year, Youth Diversion</Typography>
                <Typography mt={1} align="left" variant='body1'>2021, John Cameron O. Memorial Award in Fine Art</Typography>
                {/* <Typography mt={1} variant='body1'>Her passion was cultivated during her years in high school with the introduction of advanced placement art classes taught by Mr. Payette and Mr. Widjedal at Lindsay Collegiate & Vocational Institute. During her high school experience, she lived in Beijing, China as a model for three months at the age of 16 where she visited numerous art galleries and attributes her level of independence to this time. Michaela`s high school art teachers and experience viewing art internationally essentially catapulted her into the Fine Arts Program at Queen`s University where she also studies Art History and will graduate in the Spring of 2023.</Typography>
                <Typography mt={1} variant='body1'>In the BFA program, she was trained to work with oil paint and dove deeper into print media. Studying printmaking under Jan Winton ignited a love for the medium that only grew stronger once she began studying under Alejandro Arauz. Professor Arauz`s third year printmaking class unlocked her aspiration to specialize in printmaking for her fourth-year thesis project.</Typography> */}
                {/* <Typography mt={1} mb={4} variant='body1'>She finds reference and inspiration from her experiences as a fashion and runway model during her teenage years. She utilizes images from her portfolio as anatomical references and a connection to experiences that contributed to the disorders alluded to in her artwork.</Typography> */}
            </Box>
        </Container>
      </Fade>
      <Footer />
    </>
  );
};