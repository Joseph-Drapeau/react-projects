// 1) Import the React and ReactDOM libraries
// 2) Get a reference to the <div id="root"> </div> in index.html
// 3) Tell React to take control of the <div> element
// 4) Create a React component
// 5) Show the React component on the screen

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Here are steps 2, 3, & 5 in a few lines.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
