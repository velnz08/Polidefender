import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Pages/navbar';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="356982236497-spocr77dk2jjc6isjfi0t375olc7d6si.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider> */}
    <div style={{display:'flex', flexDirection:'column', width:'100vw', height:'100vh'}}>
      <Navbar/>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
