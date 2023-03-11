import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context, { FirebaseContext } from './store/Context';
import Firebase from './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ Firebase }}>
    <Context>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context>
  </FirebaseContext.Provider>
);

