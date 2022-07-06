import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


export default function App(props) {

  let [apartments, setApartments] = useState([])

  useEffect(() => {
    const readApartments = async () => {
      try{
        fetch("/apartments")
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
            <Route path="/apartmentshow" element={<ApartmentShow/>} />
            <Route path="/apartmentnew" element={<ApartmentNew/>} />
            <Route path="/apartmentedit" element={<ApartmentEdit/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </Router>
    )
  }