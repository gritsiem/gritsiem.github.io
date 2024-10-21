import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import xml from '../ghritachimahajani.xml'
import {XMLParser} from 'fast-xml-parser'
import viteLogo from '/vite.svg'
import './App.css'
import LandingComponent from './components/Landing.jsx'
import SeperatorComponent from './components/SeperatorComponent.jsx'

function App() {
  
  let [content,setContent] = useState(null)
  // useEffect(()=>{
  //   fetch("ghritachimahajani.xml")
  //   .then(async (xml)=>{
  //     xml = await xml.text()
  //     const parser = new XMLParser()
  //     let jObj = parser.parse(xml)
  //     setContent(jObj.Profile)
  //   })
  // },[]);

  return (
    <>
      <body>
    <header>
        <div className="pattern"></div>
        <p className="intro">
            Hi, I am Ghritachi Mahajani. 
        </p>
        <p className="sub-intro">
            A software developer with skills in frontend development and Machine Learning.
            <a href="#about-container">
                <i className="fa-solid fa-circle-down"></i>
            </a>
        </p>
        <div id="info">
            <p className="sub-intro">
                <i className="fa-solid fa-location-pin"> </i>
                   Boulder, Colorado
            </p>
        </div>
    </header>
    <div className="content">
        <section id="projects-content">
            <p className="section-title">Projects</p>
            <div id="project-listing-container" className="section-body">
                <ul className="row" id="project-list">
                    <li className="project-item col">
                        <div className="project-item-container">
                            <h4 className="title">Image Captioning</h4>
                            <hr />
                            <p className="short-desc">An image captioning model using Convluted Net, LSTM. Made in python
                                using Keras.</p>
                            <a target='blank' href="https://github.com/gritsiem/imagecap" className="link"> Find out more</a>
                        </div>
                    </li>
                    <li className="project-item col">
                        <div className="project-item-container">
                            <h4 className="title">Exploratory analysis with NSE stock data</h4>
                            <hr />
                            <p className="short-desc">
                                A project to explore the process of data sourcing, engineering and visualization
                                Indian Stock Market Data
                            </p>
                            <a target='blank' href="https://github.com/gritsiem/financial_data" className="link">Find out more</a>
                        </div>
                    </li>
                    <li className="project-item col">
                        <div className="project-item-container">
                            <h4 className="title">IBM Cloud Capstone Project</h4>
                            <hr />
                            <p className="short-desc">A Django application hosted on IBM Cloud, using Html, Bootstrap and
                                IBM Watson </p>
                            <a target='blank' href="https://github.com/gritsiem/agfzb-CloudAppDevelopment_Capstone" className="link">Find
                                out more</a>
                            <br />
                           {/* <a target='blank' href="https://ghritmaha.eu-gb.mybluemix.net/djangoapp/" className="link"> Project Site</a>  */}

                        </div>
                    </li>

                </ul>
            
            </div>
        </section>
        <section id="about-content">
            <p className="section-title">About Me</p>
            <div id="about-container" className="section-body">
                <div className="skill-container">
                    <ul className="skills-list">
                        
                        <li className="skill-category">
                            <h2 className="title">I have 3.5 years experience in web & javascript frameworks!</h2>
                            <ul className="framework">
                                <li>
                                    <i className="fa-brands fa-react"></i>
                                <span>
                                    React JS/Native
                                </span>
                                </li>
                                <li>
                                    <i className="fa-brands fa-vuejs"></i>
                                <span>
                                    Vue JS
                                </span>
                            </li>
                            <li>
                                <i className="fa-brands fa-css3-alt"></i>
                                <i className="fa-brands fa-bootstrap"></i>
                                <i className="fa-brands fa-sass"></i>
                                <span>
                                    Styling
                                </span>
                            </li>
                            <li>
                                <i className="fa-brands fa-node"></i>
                                <span>
                                    Node JS
                                </span>
                            </li>
                                <li>
                                    <i className="fa-brands fa-js"></i>
                                    <span>
                                        JavaScript, TypeScript, jQuery
                                    </span>
                                </li>
                            </ul>
                            <ul className="highlights">
                                <li>
                                    I create dynamic, interactive UI for both 
                                    <span>Web</span> and <span>Mobile</span>.
                                </li>
                                <li>
                                    Proficient in handling forms, events, API calls.
                                </li>
                                <li>
                                    All about responsiveness.
                                </li>
                                <li>
                                    Good at debugging issues!
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</body>
    </>
  )
}

export default App
