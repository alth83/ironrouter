Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.signupForm.events({
  "submit #signup-form": function(event, template) {
    event.preventDefault();
    Accounts.createUser({
      username: template.find("#signup-username").value,
      password: template.find("#signup-password").value,
      profile: {
        name: template.find("#signup-name").value
        // Other required field values can go here
      }
    }, function(error) {
      if (error) {
        // Display the user creation error to the user however you want
      }
      Router.go('promotions');
    });
    
    console.log("user created");
  }
});

Template.loginForm.events({
  "submit #login-form": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find("#login-username").value,
      template.find("#login-password").value,
      function(error) {
        if (error) {
          // Display the login error to the user however you want
        }
        Router.go('promotions');
      }
    );
  },
  "click #signupBtn": function() {
    Router.go('signupForm');
  }
});