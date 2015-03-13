Meteor.subscribe('shops');

Template.shops.helpers({
    shopinlist: function () {
      return Shops.find();
    }
});