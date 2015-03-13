Template.testadmin.helpers({
    orderpending: function () {
        return Orders.find({status: 1})
    },
    orderaccepted: function () {
        return Orders.find({status: 2})
    }
})

Template.testadmin.events({
    "click .acknowledgeorder": function() {
        Meteor.call("acknowledgeOrder", this._id);
    },
    "click .clear-orders": function() {
        Meteor.call("clearAllOrder");
    }
})