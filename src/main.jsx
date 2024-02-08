import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './Components/footer.jsx'
import './main.scss'

const siteProps = {
  name: "Matteo Cicerani",
  email: "mcicerani@gmail.com",
  github: "mcicerani",
  linkedin: "matteo-cicerani-3363852a7",
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer {...siteProps}/>
  </React.StrictMode>,
)

