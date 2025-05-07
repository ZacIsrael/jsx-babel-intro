// react package
import React from "react";

import { StrictMode } from 'react'
// react-dom package
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// render(What to show, where to show it)
// display Hello world in the HTML element that has the id of "root."
createRoot(document.getElementById('root')).render(
  <h1>Hello World.</h1>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
