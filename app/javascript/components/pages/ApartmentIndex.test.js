// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentIndex from './ApartmentIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  const props = {
    apartments: [
        {
          id: 1,
          street:"1234 street",
          city:"Chicago",
          state:"Illinois",
          manager:"Tester",
          email:"tester@1234.com",
          price:"950",
          classification: "Studio",
          bedrooms:0, 
          bathrooms:1, 
          pets:"All Allowed", 
          image:"https://i0.wp.com/ppmapartments.com/wp-content/uploads/2018/10/Chicago-apartments-lakeview-studio-apartments-for-rent.jpg?fit=640%2C427&ssl=1", 
          user_id:1
        }
    ]
  }
  let apartmentIndexRenderer
  beforeEach(() => {
    apartmentIndexRenderer = shallow(<ApartmentIndex {...props}/>)
  })
  it("displays a heading", () => {
    const apartmentIndexHeading = apartmentIndexRenderer.find("h3")
    expect(apartmentIndexHeading.text()).toEqual("ApartmentIndex")
  })
  it("displays a card from per apartment", () =>{
    const apartmentIndexCard = apartmentIndexRenderer.find("Card")
    expect(apartmentIndexCard.length).toEqual(1)
  })
})