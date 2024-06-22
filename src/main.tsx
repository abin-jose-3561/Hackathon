import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
// import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Theme/ThemeProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(

 <React.StrictMode>
  <BrowserRouter>
    {/* <PrimeReactProvider> */}
      <ThemeProvider>
    <App />
    </ThemeProvider>
    {/* </PrimeReactProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
