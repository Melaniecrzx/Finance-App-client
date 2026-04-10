import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/Authentification/ProtectedRoute';

import Main from './layout/Main';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const OverviewPage = lazy(() => import('./pages/OverviewPage'));
const TransactionPage = lazy(() => import('./pages/TransactionPage'));

const router = createBrowserRouter([
  {
    path: '/auth',
    element: (
      <Suspense fallback={<p>Chargement...</p>}>
        <AuthPage />
      </Suspense>
    ),
  },
  {
    element: (
      <Suspense fallback={<p>Chargement...</p>}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: '/', element: <OverviewPage /> },
          { path: '/transactions', element: <TransactionPage /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
