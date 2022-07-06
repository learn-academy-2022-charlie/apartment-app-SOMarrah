require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    
    user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

    it 'returns a list of apartments' do
      user.apartments.create(
        street: "string",
        city: "string",
        state: "string",
        manager: "string",
        email: "string", 
        price: "string",
        classification: "text",
        bedrooms: 1, 
        bathrooms: 1, 
        pets: "string",
        image: "text"
      )

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq(1)
    end
  end
end
