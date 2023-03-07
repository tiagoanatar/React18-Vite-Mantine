import { Grid, Col } from '@mantine/core';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { user } from '../_mocks/user';
import { SideMenu } from '../components/SideMenu';

export function SidebarTemplate() {
  const location = useLocation();
  if (!user.isUserAuthenticated && location.pathname !== '/') {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Grid>
        {location.pathname !== '/access' ? (
          <Col sm={12} lg={3}>
            <SideMenu />
          </Col>
        ) : null}
        <Col sm={12} lg="auto">
          <Outlet />
        </Col>
      </Grid>
    </>
  );
}
