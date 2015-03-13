Router.configure({
  layoutTemplate:'layout',
  notfoundTemplate: 'notFound'
});

Router.map(function(){
    this.route('loginForm', {
      path:'/login',
      layoutTemplate: 'loginForm'
    });
    this.route('signupForm', {
      path:'/signup',
      layoutTemplate: 'signupForm'
    });
    this.route('promotions', {path:'/'});
    this.route('shops', {path:'/shops'});
    this.route('favourites', {path:'/favourites'});
    this.route('orders', {path:'/orders'});
    this.route('settings', {path:'/settings'});
    this.route('testadmin', {
      path:'/testadmin',
      layoutTemplate: 'testadmin'
    });
});

Tracker.autorun(function() {
    if(Meteor.userId()) {
        //Router.go('promotions');
    }
})

var OnBeforeActions;

OnBeforeActions = {
  loginRequired: function() {
    if (!Meteor.userId()) {
      Router.go('loginForm');
    } else {
      this.next();
    }
  }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
  except: ['loginForm', 'signupForm']
});