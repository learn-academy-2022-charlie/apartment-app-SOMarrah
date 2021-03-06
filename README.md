# Apartment App
This app has been created for you to mimic the feeling of entering into a developer role where there is established code that you have not created. This Apartment application has a few features that have been created for you and some key items that have been left totally untouched. Part of your job as a developer is to be able to pick up code that has already been created, understand what is going on with it, and continue the development of that code. 

## 👨‍💻 How We Got Here
```
$ rails new apartment-app -d postgresql -T
$ cd apartment-app
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
$ rails generate controller Home
```

## 🛠 Configurations

### Devise Config
**config/environments/development.rb**
```ruby
This line added:
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

**config/initializers/devise.rb**
```ruby
# This line replaced:
config.sign_out_via = :delete
# With this line:
config.sign_out_via = :get
```

File added in app/views/home called index.html.erb
**app/views/home/index.html.erb**
```javascript
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

### React in Rails Config

**app/views/layouts/application.html.erb**
```ruby
# This line replaced:
<%= javascript_importmap_tags %>
# With this line:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

**config/routes.rb**
```ruby
# These lines added:
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```

### React Routing Config
```bash
yarn add react-router-dom@5.3.0
```

**app/javascript/components/App.js**
```javascript
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
```

### Reactstrap Config
```bash
bundle add bootstrap
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
yarn add reactstrap
```

**app/assets/stylesheets/application.scss**
```css
@import 'bootstrap';
```


## ⚡️ Getting Started
Once you're able to clone the repository, within the root of the project directory, run:

```bash
bundle 
yarn
rails db:setup
```

## 🏁 Start the App
```bash
rails s
```

See what is available already in the application.
- What can a USER do? 
the user can sign in/signup/signout and view specific pages (by typing in the navbar)
- What views (pages, components) are available?
index,show,create,edit,notfound, header, (footer i added)

DID:
yarn remove react-router-dom(old version)
yarn add react-router-dom(6.3 - functional components)

switched everything to a functional component.

## 🏡 Apartment Resource
The Devise User model is going to have an association with the Apartment model. In this situation, the User will have many apartments and the Apartments will belong to a User.

```bash
rails generate resource Apartment street:string city:string state:string manager:string email:string price:string (type is protected switched to:) classification:text bedrooms:integer bathrooms:integer pets:string image:text user_id:integer
rails db:migrate
```
Added apartment type which a manager will be able to input (loft, studio, etc)

### User and Apartment Associations
The Apartments will belong to a User and a User will have many apartments.

**app/models/apartment.rb**
```ruby
class Apartment < ApplicationRecord
  belongs_to :user
end
```
Added association
**app/models/user.rb**
```ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :apartments
end
```
added association
## 🚗 Testing
To run the existing testing suite, run:

```bash
yarn jest
rspec spec/
```
Created Spec file:
```ruby
apartments = [
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

apartments.each do |value|
    Apartment.create value
end

p Apartment.all
```

Imported a card for index and created all links in the Header

to import react components inside of ruby use:

<%= react_component('componentname') %>
if it has a path(/components or /assets etc):
<%= react_component('<pathname>/componentname') %>
can also import props which I might mess around with later:
<%= react_component('componentname', {props}) %>
can also do server side prerendering:
<%= react_component('componentname', {props}) {prerender:true} %>
documentation for further reading:
https://github.com/reactjs/react-rails#getconstructor

### Apartment Data Specs
Part of your responsibility will be to build out robust tests both for models and for requests. 
Tests you will need are:  

REQUEST: 
- to ensure a user can see all apartments
- to ensure a user can see all apartments that belong to them
- to ensure a user can make a new apartment
- to ensure a user can update an apartment
- to ensure a user can remove an apartment
- to ensure a user cannot make a new apartment with nil values
- to ensure an error will be thrown if an unregistered user tried to make an apartment
- to ensure an error will be thrown if a user tries to edit an apartment that doesn't belong to them
- to ensure an error will be thrown if a user tries to delete an apartment that doesn't belong to them

MODELS: 
- to ensure apartment is valid
- to ensure a user cannot make a new apartment with nil values
- to ensure a user cannot make a new apartment that already exists in the database
- to ensure a user cannot update an apartment with nil values
- to ensure a user cannot update another user's apartment

**The following code is a mock and does not work but is here to get your started.**
```ruby
require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it 'returns a list of apartments' do
    
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      user.apartments.create(
        street: string,
        city: string,
        state: string,
        manager: string,
        email: string, 
        price: string, 
        bedrooms: integer, 
        bathrooms: integer, 
        pets: string,
        image: text
      )

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq(1)
    end
  end
end
```
