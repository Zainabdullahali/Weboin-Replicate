import React from 'react';
import './PlacementPartners.css';

function PlacementPartners() {
  return (
    <div className="placement-container">
      <div style={{width: '100%'}}>
      <h1 className="placement-heading">Our Placement Partners</h1>
      <div style={{width: "100%",display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column"}}>
      <div className="placement-logos">
        <img src={require('../Assets/airbnb.png')} alt="Airbnb" />
        <img src={require('../Assets/grabyo.png')} alt="Grabyo" />
        <img src={require('../Assets/LifeGroups.png')} alt="Life Group" />
        <img src={require('../Assets/myob.png')} alt="MYOB" />
        <img src={require('../Assets/tailus.png')} alt="Tailus" />
        <img src={require('../Assets/microsoft.png')} alt="Microsoft" />
        <img src={require('../Assets/coty.png')} alt="Coty" />
        <img src={require('../Assets/lilly.png')} alt="Lilly" />
      </div>
      </div>
      <button className="placement-button">and, more<br></br> companies</button>
      </div>
    </div>
  );
}

export default PlacementPartners;
