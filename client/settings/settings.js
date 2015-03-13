Template.settings.helpers({
    loggedUser: function() {
        if(Meteor.user())
            return Meteor.user().username;
        else
        return "";
    }
})

Template.settings.events({
  "submit #logout-form": function(event, template) {
    event.preventDefault();
    Meteor.logout(function(error) {
      if (error) {
        // Display the logout error to the user however you want
      }
      Router.go('loginForm');
    });
  }
});