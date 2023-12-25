import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Wrapper } from './Layout.styled';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
