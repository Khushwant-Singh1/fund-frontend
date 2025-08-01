'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/superadmin/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/superadmin/(DashboardLayout)/components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

