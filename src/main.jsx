import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/scss/app.scss'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";



import {
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";
import Layout from './components/latout';
import ChartModule from './components/ChartModule/ChartModule';
import Tasks from './components/Tasks/Tasks';



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<ChartModule/>} />
            <Route path='/tasks' element={<Tasks/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FluentProvider>
  </React.StrictMode>
)
