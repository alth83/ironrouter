Meteor.methods({
    getServerTime: function () {
        var _time = (new Date).getTime();
        return _time;
    },
    
    placeOrder: function (customerid) {    
        Orders.insert({
            customerid: customerid,
            orderedAt: new Date(),
            status: 1
        })
        console.log("order placed");
    },
    acknowledgeOrder: function(orderid) {
        Orders.update(
                     { _id: orderid},
                     {
                        $set: {
                            status: 2
                        }
                     }
        )
        console.log("order updated", orderid);
    },
    clearAllOrder: function() {
        Orders.remove({});
        console.log("cleared orders");
    }
});