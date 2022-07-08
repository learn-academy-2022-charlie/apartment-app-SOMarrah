import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import LogIn from './pages/LogIn'
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


export default function App(props) {

  let [apartments, setApartments] = useState([])

function readApartments(){
    try{
      fetch("/apartments")
      .then(response => response.json())
      .then(payload => setApartments(payload))
    }catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    readApartments();
  },[])

function createApartment(apartmentProps){
        try{fetch("/apartments", {
        body: JSON.stringify(apartmentProps),
        headers:{"Content-Type": "application/json"},
        method: "POST",
      })
      .then(response => response.json())
      .then(payload => setApartments(readApartments()))
    }catch(error){
      console.log("error", error);
    }
  }
 
  return (
        <Router>
          <Header {...props} />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
            <Route path="/mylistings" element={<ApartmentProtectedIndex {...props} apartments={apartments}/>}/>
            <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments}/>} />
            <Route path="/apartmentnew" element={<ApartmentNew {...props} readApartments={readApartments} createApartment={createApartment}/>} />
            <Route path="/apartmentedit" element={<ApartmentEdit/>} />
            <Route path="/users/sign-in" element={<LogIn {...props}/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </Router>
    )
  }

