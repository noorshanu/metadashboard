import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Products | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
       
      }}
    >
      <Container maxWidth={false}>
       
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
         <h1>club</h1>
          </Grid>
        </Box>
     
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
