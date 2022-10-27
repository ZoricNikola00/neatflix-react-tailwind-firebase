import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from 'react-router-dom';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import { AppProvider } from './context';
const queryClient=new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AppProvider>
     <Router>
      <App />
     </Router>
   </AppProvider>
  </QueryClientProvider>

);


