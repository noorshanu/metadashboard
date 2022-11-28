import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';




import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        METABALL-CLUB | Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
      
         <div className='container'>
          <div className='center'>
            <video autoPlay loop muted src={"/main.mp4"} id='main-video' />

          </div>
          
          </div>
       
     
   
       
       
       
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
