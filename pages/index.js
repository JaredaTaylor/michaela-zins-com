import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GlobalNavigation from '../components/GlobalNavigation/GlobalNavigation';
import Footer from '../components/Footer/Footer';

export default function Index({ products }) {
  return (
    <>
      <GlobalNavigation />
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
            <Typography mt={1} variant='body1'>Michaela Zinsmeister was born in rural Ontario, Canada in 1999. Her interest in art began in early childhood. In the 8th grade she recognized her desire to create and was awarded with the Art Award at Dr. George Hall Public School during her graduation in 2013.</Typography>
            <Typography mt={1} variant='body1'>Her passion was cultivated during her years in high school with the introduction of advanced placement art classes taught by Mr. Payette and Mr. Widjedal at Lindsay Collegiate & Vocational Institute. During her high school experience, she lived in Beijing, China as a model for three months at the age of 16 where she visited numerous art galleries and attributes her level of independence to this time. Michaela`s high school art teachers and experience viewing art internationally essentially catapulted her into the Fine Arts Program at Queen`s University where she also studies Art History and will graduate in the Spring of 2023.</Typography>
            <Typography mt={1} variant='body1'>In the BFA program, she was trained to work with oil paint and dove deeper into print media. Studying printmaking under Jan Winton ignited a love for the medium that only grew stronger once she began studying under Alejandro Arauz. Professor Arauz`s third year printmaking class unlocked her aspiration to specialize in printmaking for her fourth-year thesis project.</Typography>
            <Typography mt={1} mb={4} variant='body1'>Michaela currently lives and studies in Kingston, Ontario, where she is also a part of the ForWorld Studios Artist Collective. Her print work was exhibited at the Union Gallery in February 2022 at their annual “Cézanne`s Closet” event. ForWorld Studios members, including herself, exhibited their works at their first show “Opening” at the Kingston School of Art`s Window Art Gallery in March 2022. Michaela`s work can currently be viewed at the Hoopla Gallery & Press website and storefront, downtown Kingston on Princess Street.</Typography>
          </Box>
        </Box>
      </Box>

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
            <Typography mt={1} variant='body1'>Michaela Zinsmeister was born in rural Ontario, Canada in 1999. Her interest in art began in early childhood. In the 8thgrade she recognized her desire to create and was awarded with the Art Award at Dr. George Hall Public School during her graduation in 2013.</Typography>
            <Typography mt={1} variant='body1'>Her passion was cultivated during her years in high school with the introduction of advanced placement art classes taught by Mr. Payette and Mr. Widjedal at Lindsay Collegiate & Vocational Institute. During her high school experience, she lived in Beijing, China as a model for three months at the age of 16 where she visited numerous art galleries and attributes her level of independence to this time. Michaela`s high school art teachers and experience viewing art internationally essentially catapulted her into the Fine Arts Program at Queen`s University where she also studies Art History and will graduate in the Spring of 2023.</Typography>
            <Typography mt={1} variant='body1'>In the BFA program, she was trained to work with oil paint and dove deeper into print media. Studying printmaking under Jan Winton ignited a love for the medium that only grew stronger once she began studying under Alejandro Arauz. Professor Arauz`s third year printmaking class unlocked her aspiration to specialize in printmaking for her fourth-year thesis project.</Typography>
            <Typography mt={1} mb={4} variant='body1'>Michaela currently lives and studies in Kingston, Ontario, where she is also a part of the ForWorld Studios Artist Collective. Her print work was exhibited at the Union Gallery in February 2022 at their annual “Cézanne`s Closet” event. ForWorld Studios members, including herself, exhibited their works at their first show “Opening” at the Kingston School of Art`s Window Art Gallery in March 2022. Michaela`s work can currently be viewed at the Hoopla Gallery & Press website and storefront, downtown Kingston on Princess Street.</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};