import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<MantineProvider withGlobalStyles withNormalizeCSS theme={{fontFamily: "font:"name"}} >
  <App />
</MantineProvider>
);
