import React from 'react';
import { useRoutes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import HomePage from './pages/HomePage';
import SelectWhitelist from './pages/admin/SelectWhitelist';
import AdminAuthGuard from './guards/AdminAuthGuard';
import PrivatePage from './pages/PrivatePage';
import PrivateAuthGuard from './guards/PrivateAuthGuard';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/user/:address',
          element: <PrivateAuthGuard><PrivatePage /></PrivateAuthGuard>
        }
      ]
    },
    {
      path: '/admin',
      element: (<AdminAuthGuard><AdminLayout /></AdminAuthGuard>),
      children: [
        {
          path: '/admin',
          element: <SelectWhitelist />
        }
      ]
    }
  ]);
}