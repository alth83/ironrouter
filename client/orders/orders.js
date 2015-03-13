Meteor.subscribe('orders', 1001);

Meteor.startup(function () {

    function setServerTime(){
    
      //get server time (it's in milliseconds)
      Meteor.call("getServerTime", function (error, result) {
    
        //get client time in milliseconds
        localTime = new Date().getTime();
    
        //difference between server and client
        var serverOffset = result - localTime;
    
        //store difference in the session
        Session.set("serverTimeOffset", serverOffset);
    
      });
    }
    
    function setDisplayTime(){
      var offset = Session.get("serverTimeOffset");
      var adjustedLocal = new Date().getTime() + offset;
      Session.set("serverTime", adjustedLocal);
    }
    
    //run these once on client start so we don't have to wait for setInterval
    setServerTime();
    setDisplayTime();
    
    //check server time every 15min
    setInterval(function updateServerTime() {
      setServerTime();
    }, 900000);

    //update clock on screen every second
    setInterval(function updateDisplayTime() {
      setDisplayTime();
    }, 1000);
});

Template.orders.events ({
    "click .placeorder": function() {
        Meteor.call("placeOrder", 1001);
    }
});

Template.orders.helpers({
    time: function() {
        var d = new Date(Session.get("serverTime")),
        h = (d.getHours()<10?'0':'') + d.getHours(),
        m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    
        if (d.getSeconds()%2==0)
            timenow = h + ":" + m;
        else
            timenow = h + " " + m;
        
        return timenow;
    },
    orderpending: function() {
        return Orders.find({status: 1})
    },
    orderconfirmed: function() {
        return Orders.find({status: 2})
    },
    ordercompleted: function() {
        return Orders.find({status: -1})
    }
    
})

Template.orders.clock = function () {
    return new Date(Session.get("serverTime"));
};