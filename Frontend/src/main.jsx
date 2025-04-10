import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LoadingProvider } from './Pages/LodingPage.jsx';
const querClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId='494362090516-r69v7vu4ar7hid9jrvngng3b2uajrt2v.apps.googleusercontent.com'>
    <LoadingProvider>
    <QueryClientProvider client={querClient}>
       <App />
    </QueryClientProvider>
    </LoadingProvider>
    </GoogleOAuthProvider>
     
)
