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
  useEffect(()=>{
    fetch("ghritachimahajani.xml")
    .then(async (xml)=>{
      xml = await xml.text()
      const parser = new XMLParser()
      let jObj = parser.parse(xml)
      setContent(jObj.Profile)
    })
  },[]);

  return (
    <>
      {content?
      <div>

        <LandingComponent content = {{'name': content.Name, 'loc':content.Location}}></LandingComponent>
        <SeperatorComponent title="About"></SeperatorComponent>
      </div>
        : <p>Loading...</p>
      }
      
    </>
  )
}

export default App
