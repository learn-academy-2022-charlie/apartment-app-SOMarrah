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
  const {current_user, logged_in} = props
  console.log("current user", current_user);
  let myApartments = []
  if(logged_in && apartments.length > 0){
      myApartments = apartments.filter(apartment => apartment.user_id === current_user.id)
  }
  console.log("myapartments", myApartments);
  useEffect(() => {
    const readApartments = async () => {
      try{
        await fetch("/apartments")
        .then(response => response.json())
        .then(payload => setApartments(payload))
      }catch (error) {
        console.log("error", error);
      }
    };
    readApartments();
  },[])


  return (
        <Router>
          <Header {...props} />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
            <Route path="/mylistings" element={<ApartmentProtectedIndex {...props} apartments={myApartments}/>}/>
            <Route path="/apartmentshow" element={<ApartmentShow/>} />
            <Route path="/apartmentnew" element={<ApartmentNew/>} />
            <Route path="/apartmentedit" element={<ApartmentEdit/>} />
            <Route path="/users/sign-in" element={<LogIn {...props}/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </Router>
    )
  }

