Meteor.subscribe('promotions');

Template.promotions.helpers({
    promoinlist: function () {
      return Promotions.find();
    }
});