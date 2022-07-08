// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentShow from './ApartmentShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentNew renders", () => {
  const props = {
    apartments: [
      {
        id: 1,
        street: "12345 street",
        city: "Chicago",
        state: "Illinois",
        manager: "Joe Shmoe",
        email: "shmoe@gmail.com", 
        classification: "blabla",
        price: "1000", 
        bedrooms: 2, 
        bathrooms: 3, 
        pets: "no pets",
        image: "https://doesnotexist.com"
      }
    ]
  }
  let apartmentShowRender
  beforeEach(() => {
      apartmentShowRender = shallow(<ApartmentShow {...props} />)
  })
 
  it("displays a heading", () => {
    const apartmentShowHeading = apartmentShowRender.find("h3")
    expect(apartmentShowHeading.text()).toEqual("ApartmentShow")
  })
})