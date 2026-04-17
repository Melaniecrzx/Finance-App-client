import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { PotsProvider } from './context/PotsContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SideBarProvider } from './context/SideBarProvider.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SideBarProvider>
          <PotsProvider>
            <App />
          </PotsProvider>
        </SideBarProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
