import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Container } from '@mantine/core';
import { user } from '../_mocks/user';
import { Header } from './Header';

export function NoSidebarTemplate() {
  const location = useLocation();
  if (!user.isUserAuthenticated && location.pathname !== '/') {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Header
        user={{
          name: '',
          image: '',
        }}
      />
      <Container size="xl">
        <Outlet />
      </Container>
    </>
  );
}
