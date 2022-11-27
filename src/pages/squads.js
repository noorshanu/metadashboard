import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';

import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Page = () => (
  <>
    <Head>
      <title>
       squads | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        
      }}
    >
      <Container maxWidth={false}>
       
        <Box >
          <CustomerListResults customers={customers} />
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
