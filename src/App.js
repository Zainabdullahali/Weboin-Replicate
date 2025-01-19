import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Note from './Components/Note';
import UserDetails from './Components/user';

function App() {

  const [details, setDetails] = useState(() => {
    const storedDetails = sessionStorage.getItem("userDetails");
    return storedDetails ? JSON.parse(storedDetails) : UserDetails;
  });

  useEffect(() => {
    sessionStorage.setItem("userDetails", JSON.stringify(details));
  }, [details]);


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home details={details} />} />
        <Route path="/form" element={<Form details={details} setDetails={setDetails}  />} />
        <Route path="/note" element={<Note />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;