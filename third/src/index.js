import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from "./nav.js"
import Main from "./main.js"
import Travel from "./data.js"
function App() {
  const travel = Travel.map(data=>
    <Main 
       img={data.img}
       country={data.country}
       link={data.link}
       heading={data.heading}
       date={data.date}
       para={data.para}
    />
  
  )
  return (
    <div>
      <Nav/>
      {travel}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
  </div>
)
