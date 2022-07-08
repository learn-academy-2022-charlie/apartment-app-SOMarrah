require 'rails_helper'

RSpec.describe Apartment, type: :model do
    user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
    describe 'presence' do
        it 'validates precense of street' do
            apartment =user.apartments.create(
                      street: "",
                      city: "Chicago",
                      state: "Illinois",
                      manager: "Joe Shmoe",
                      email: "shmoe@gmail.com", 
                      price: "$1000", 
                      bedrooms: 2, 
                      bathrooms: 2, 
                      pets: "no dogs",
                      image: "www.urlhelper.com"
            )

            p apartment.errors[:street]
            expect(apartment.errors[:street]).to_not be_empty
        end
        it 'validates precense of city' do
            apartment =user.apartments.create(
                      street: "123 street",
                      city: "",
                      state: "Illinois",
                      manager: "Joe Shmoe",
                      email: "shmoe@gmail.com", 
                      price: "$1000", 
                      bedrooms: 2, 
                      bathrooms: 2, 
                      pets: "no dogs",
                      image: "www.urlhelper.com"
            )
            expect(apartment.errors[:city]).to_not be_empty
        end
        it 'validates precense of state' do
            apartment =user.apartments.create(
                      street: "123 street",
                      city: "Chicago",
                      state: "",
                      manager: "Joe Shmoe",
                      email: "shmoe@gmail.com", 
                      price: "$1000", 
                      bedrooms: 2, 
                      bathrooms: 2, 
                      pets: "no dogs",
                      image: "www.urlhelper.com"
            )
            expect(apartment.errors[:state]).to_not be_empty
        end
        it 'validates precense of manager' do
            apartment =user.apartments.create(
                      street: "123 street",
                      city: "Chicago",
                      state: "Illinois",
                      manager: "",
                      email: "shmoe@gmail.com", 
                      price: "$1000", 
                      bedrooms: 2, 
                      bathrooms: 2, 
                      pets: "no dogs",
                      image: "www.urlhelper.com"
            )
            expect(apartment.errors[:manager]).to_not be_empty
        end
        it 'validates precense of email' do
            apartment =user.apartments.create(
                      street: "123 street",
                      city: "Chicago",
                      state: "Illinois",
                      manager: "Joe Shmoe",
                      email: "", 
                      price: "$1000", 
                      bedrooms: 2, 
                      bathrooms: 2, 
                      pets: "no dogs",
                      image: "www.urlhelper.com"
            )
            expect(apartment.errors[:email]).to_not be_empty
        end
        it 'validates precense of price' do
            apartment =user.apartments.create(
                      street: "123 street",
                      city: "Chicago",
                      state: "Illinois",
                      manager: "Joe Shmoe",
                      email: "shmoe@gmail.com", 
                      price: "", 
                      bedrooms: 2, 
                      bathrooms: 2, 
                      pets: "no dogs",
                      image: "www.urlhelper.com"
            )
            expect(apartment.errors[:price]).to_not be_empty
        end
        it 'validates precense of bedrooms' do
            apartment =user.apartments.create(
                      street: "123 street",
                      city: "Chicago",
                      state: "Illinois",
                      manager: "Joe Shmoe",
                      email: "shmoe@gmail.com", 
                      price: "$1000", 
                      
                      bathrooms: 2, 
                      pets: "no dogs",
                      image: "www.urlhelper.com"
            )
            expect(apartment.errors[:bedrooms]).to_not be_empty
        end
        it 'validates precense of bathrooms' do
            apartment =user.apartments.create(
                      street: "123 street",
                      city: "Chicago",
                      state: "Illinois",
                      manager: "Joe Shmoe",
                      email: "shmoe@gmail.com", 
                      price: "$1000", 
                      bedrooms: 2, 
                      
                      pets: "no dogs",
                      image: "www.urlhelper.com"
            )
            expect(apartment.errors[:bathrooms]).to_not be_empty
        end
        it 'validates precense of pets' do
            apartment =user.apartments.create(
                      street: "123 street",
                      city: "Chicago",
                      state: "Illinois",
                      manager: "Joe Shmoe",
                      email: "shmoe@gmail.com", 
                      price: "$1000", 
                      bedrooms: 2, 
                      bathrooms: 2, 
                      pets: "",
                      image: "www.urlhelper.com"
            )
            expect(apartment.errors[:pets]).to_not be_empty
        end
        it 'validates precense of image' do
            apartment =user.apartments.create(
                      street: "123 street",
                      city: "Chicago",
                      state: "Illinois",
                      manager: "Joe Shmoe",
                      email: "shmoe@gmail.com", 
                      price: "$1000", 
                      bedrooms: 2, 
                      bathrooms: 2, 
                      pets: "no dogs",
                      image: ""
            )
            expect(apartment.errors[:image]).to_not be_empty
        end
    end
end


