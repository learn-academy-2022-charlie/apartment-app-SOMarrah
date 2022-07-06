// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {
  // I will update this once I import data for images/styling later!
  // const props = {
  //   apartments: [
  //       {
  //         street:"1234 street",
  //         city:"Chicago",
  //         state:"Illinois",
  //         manager:"Tester",
  //         email:"tester@1234.com",
  //         price:"950",
  //         classification: "Studio",
  //         bedrooms:0, 
  //         bathrooms:1, 
  //         pets:"All Allowed", 
  //         image:"https://i0.wp.com/ppmapartments.com/wp-content/uploads/2018/10/Chicago-apartments-lakeview-studio-apartments-for-rent.jpg?fit=640%2C427&ssl=1", 
  //         user_id:1
  //       }
  //   ]
  // }
  let apartmentHomeRenderer
  beforeEach(() => {
    apartmentHomeRenderer = shallow(<Home/>)
  })
  it("displays a heading", () => {
    const apartmentHomeHeading = apartmentHomeRenderer.find("h3")
    expect(apartmentHomeHeading.text()).toEqual("Welcome to Apartable")
  })
  it("displays descriptive text about the website", () =>{
    const apartmentHomeText = apartmentHomeRenderer.find("p")
    expect(apartmentHomeText.text()).toEqual("Look at listings. Get in contact. Make a move. Create new listings. Manage your listings. See the competition.")
  })
})