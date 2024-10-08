import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "animate.css"; 
import { makeServer } from './server';

makeServer()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='max-w-[1400px] mx-auto relative'>
    <App />
    </div>
  </React.StrictMode>
);


