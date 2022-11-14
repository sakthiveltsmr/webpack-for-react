// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './component/App';

// ReactDOM.render(<App />, document.getElementById('root'));import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import"./initializer"


const root = ReactDOM.createRoot(document.getElementById('campaign-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

