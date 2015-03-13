Shops = new Mongo.Collection("shops");
Promotions = new Mongo.Collection("promotions");
Items = new Mongo.Collection("items");
Favourites = new Mongo.Collection("favourites");
Orders = new Mongo.Collection("orders");

if (Meteor.isServer) {
    Meteor.publish('orders', function(customerid) {
        return Orders.find({customerid: customerid});
    });
    
    Meteor.publish('promotions', function() {
        return Promotions.find();
    });
    
    Meteor.publish('shops', function() {
        return Promotions.find();
    });
}