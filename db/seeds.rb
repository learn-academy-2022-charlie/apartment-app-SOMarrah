# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

apartments_array = [
    {
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
    },
    {
        street:"91 Street",
        city:"Chicago",
        state:"Illinois",
        manager:"Tester",
        email:"tester@1234.com",
        price:"800",
        classification: "Studio",
        bedrooms:0, 
        bathrooms:1, 
        pets:"None Allowed", 
        image:"https://cdn.hswstatic.com/gif/studio-apt.jpg", 
        user_id:1
    }, 
    {
        street:"7834 South Hillside",
        city:"Chicago",
        state:"Illinois",
        manager:"Tester",
        email:"tester@1234.com",
        price:"1200",
        classification: "2-Bedroom",
        bedrooms:2, 
        bathrooms:1, 
        pets:"Cats Only", 
        image:"https://i.ytimg.com/vi/bHTyjG6ch98/maxresdefault.jpg", 
        user_id:1
    }
]

apartments_array.each do |apartment_obj|
    user.apartments.create apartment_obj
end

p user.apartments