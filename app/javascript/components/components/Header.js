import React, {useState, useEffect} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


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

  const [toggle, setToggle] = useState(false)

    return (
      <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Apartable</NavbarBrand>
          <NavbarToggler onClick={() => setToggle(!toggle)} />
          <Collapse isOpen={toggle} navbar>
            <Nav className="ml-auto" navbar>
                {logged_in &&
                <NavItem>
                  <a href="/users/sign_out" className="nav-link">Sign Out</a>
                </NavItem>
                }
                {!logged_in &&
                  <NavItem>
                    <a href="/users/sign_in" className="nav-link">Sign In</a>
                  </NavItem>
                }
                {!logged_in &&
                  <NavItem>
                    <a href="/users/sign_up" className="nav-link">Sign Up</a>
                  </NavItem>
                }
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Explore
                </DropdownToggle>
                <DropdownMenu end>
                  <a href="/apartmentindex"><DropdownItem>
                  <NavItem>Index</NavItem>
                  </DropdownItem></a>
                  <a href="/apartmentshow"><DropdownItem>
                  <NavItem>Show</NavItem>
                  </DropdownItem></a>
                  {logged_in && 
                  <>
                  <DropdownItem divider />
                  <a href="/apartmentnew"><DropdownItem>
                  <NavItem>New</NavItem>
                  </DropdownItem></a>
                  <a href="/mylistings"><DropdownItem>
                  <NavItem>MyListings</NavItem>
                  </DropdownItem></a>
                  </>
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </>
    )
  }
