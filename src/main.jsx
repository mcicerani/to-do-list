import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './Components/footer.jsx'
import './main.scss'

const siteProps = {                                                 // siteProps is an object
  name: "Matteo Cicerani", 
  email: "mcicerani@gmail.com",
  github: "mcicerani",
  linkedin: "matteo-cicerani-3363852a7",
};


ReactDOM.createRoot(document.getElementById('root')).render(        // render the App and Footer components
  <React.StrictMode>
    <App />
    <Footer {...siteProps}/>
  </React.StrictMode>,
)

