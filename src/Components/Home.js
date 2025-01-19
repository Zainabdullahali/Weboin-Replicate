import React from 'react'
import "./Home.css";
import PlacementPartners from './PlacementPartners';
import CompanyInfo from './CompanyInfo';
import CompanyDesc from './CompanyDesc';

function Home({details}) {
  return (
    <div>
      <div className='home__box'>
      <h1 className='heading'>Learn from the best, be<br></br> your best..</h1>
      <p className='desc'>Give yourself an upgrade with our inspiring online courses<br></br> and join a global community of learners</p>
      <button>Get Started</button>
    </div>
    <PlacementPartners />
    <CompanyInfo />  
    <CompanyDesc details={details} /> 
    </div>
  )
}

export default Home