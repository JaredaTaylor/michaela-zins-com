import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GlobalNavigation from '../components/GlobalNavigation/GlobalNavigation';
import Footer from '../components/Footer/Footer';
import Fade from '@mui/material/Fade';

export default function Index({ products }) {
  return (
    <>
      <GlobalNavigation />
      <Fade
        in={true}
        timeout={500}
      >
        <Box
          key='gtMedium'
          mx='5vw'
          sx={{
            display: {xs:'none', md:'flex'},
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box mx={10} mt={2} sx={{display:'flex'}}>
            <Box>
              <img
                src='/Headshot_2.jpg'
                alt={'Artist headshot'}
                width='350px'
                height='430px'
              />
            </Box>
            <Box ml={4}>
              <Typography variant='h4'>Artist Biography</Typography>
              <Typography mt={1} variant='body1'>Michaela Zinsmeister (b.1999) is an emerging visual artist from Little Britain, ON, now residing in Toronto, ON. She graduated with a Bachelor of Fine Art Honours, minor in Art History from Queen’s University in 2023 in Kingston, ON, where she taught as a printmaking instructor for the Kingston School of Art.</Typography>
              {/* <Typography mt={1} variant='body1'>Her passion was cultivated during her years in high school with the introduction of advanced placement art classes taught by Mr. Payette and Mr. Widjedal at Lindsay Collegiate & Vocational Institute. During her high school experience, she lived in Beijing, China as a model for three months at the age of 16 where she visited numerous art galleries and attributes her level of independence to this time. Michaela`s high school art teachers and experience viewing art internationally essentially catapulted her into the Fine Arts Program at Queen`s University where she also studies Art History and will graduate in the Spring of 2023.</Typography>
              <Typography mt={1} variant='body1'>In the BFA program, she was trained to work with oil paint and dove deeper into print media. Studying printmaking under Jan Winton ignited a love for the medium that only grew stronger once she began studying under Alejandro Arauz. Professor Arauz`s third year printmaking class unlocked her aspiration to specialize in printmaking for her fourth-year thesis project.</Typography> */}
              <Typography mt={1} mb={4} variant='body1'>She finds reference and inspiration from her experiences as a fashion and runway model during her teenage years. She utilizes images from her portfolio as anatomical references and a connection to experiences that contributed to the disorders alluded to in her artwork.</Typography>
            </Box>
          </Box>
        </Box>
      </Fade>

      {/* SMALL */}
      <Fade in={true}>
        <Box
          key='ltMedium'
          sx={{
            display: {xs:'flex', md:'none'},
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box mx={10} mt={2} sx={{display:'flex', flexDirection:'column' }}>
            <Box mx='10vw'>
              <Avatar
                src='/Headshot_2.jpg'
                alt={'Artist headshot'}
                sx={{ width: '100%', height: '100%'}}
              />
            </Box>
            <Box mt={4}>
              <Typography variant='h4'>Artist Biography</Typography>
              <Typography mt={1} variant='body1'>Michaela Zinsmeister (b.1999) is an emerging visual artist from Little Britain, ON. She will graduate with a Bachelor of Fine Art Honours, minor in Art History at Queen’s University in 2023. Michaela currently lives in Kingston, ON, where she works as a printmaking instructor for the Kingston School of Art.</Typography>
              {/* <Typography mt={1} variant='body1'>Her passion was cultivated during her years in high school with the introduction of advanced placement art classes taught by Mr. Payette and Mr. Widjedal at Lindsay Collegiate & Vocational Institute. During her high school experience, she lived in Beijing, China as a model for three months at the age of 16 where she visited numerous art galleries and attributes her level of independence to this time. Michaela`s high school art teachers and experience viewing art internationally essentially catapulted her into the Fine Arts Program at Queen`s University where she also studies Art History and will graduate in the Spring of 2023.</Typography>
              <Typography mt={1} variant='body1'>In the BFA program, she was trained to work with oil paint and dove deeper into print media. Studying printmaking under Jan Winton ignited a love for the medium that only grew stronger once she began studying under Alejandro Arauz. Professor Arauz`s third year printmaking class unlocked her aspiration to specialize in printmaking for her fourth-year thesis project.</Typography> */}
              <Typography mt={1} mb={4} variant='body1'>She finds reference and inspiration from her experiences as a fashion and runway model during her teenage years. She utilizes images from her portfolio as anatomical references and a connection to experiences that contributed to the disorders alluded to in her artwork.</Typography>
            </Box>
          </Box>
        </Box>
      </Fade>
      <Footer />
    </>
  );
};
