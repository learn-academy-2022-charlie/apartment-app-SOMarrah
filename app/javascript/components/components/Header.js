import React from 'react'
import { Nav, NavItem } from 'reactstrap'

export default function Header(props) {
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
  } = props
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
    return (
      <>
        <h1>This is the Header</h1>
        <Nav>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
          <NavItem><a href="/apartmentindex">Index</a></NavItem>
          <NavItem><a href="/apartmentshow">Show</a></NavItem>
          <NavItem><a href="/apartmentnew">New</a></NavItem>
          <NavItem><a href="/apartmentedit">Edit</a></NavItem>
          
        </Nav>
      </>
    )
  }
