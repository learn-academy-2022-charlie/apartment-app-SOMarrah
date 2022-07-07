import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function LogIn() {
  return (

    <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Button>Submit</Button>
    </Form>
//     <%= form_for(resource, as: resource_name, url: session_path(resource_name)) do |f| %>
//   <div class="field">
//     <%= f.label :email %><br />
//     <%= f.email_field :email, autofocus: true, autocomplete: "email" %>
//   </div>

//   <div class="field">
//     <%= f.label :password %><br />
//     <%= f.password_field :password, autocomplete: "current-password" %>
//   </div>

//   <% if devise_mapping.rememberable? %>
//     <div class="field">
//       <%= f.check_box :remember_me %>
//       <%= f.label :remember_me %>
//     </div>
//   <% end %>

//   <div class="actions">
//     <%= f.submit "Log in" %>
//   </div>
// <% end %>

// <%= render "devise/shared/links" %>
  )
}
