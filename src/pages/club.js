import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import { ClubTeam } from '../components/club/ClubTeam';

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
         
         <ClubTeam/>
     
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
