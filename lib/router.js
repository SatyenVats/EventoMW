Router.configure({
  loadingTemplate: 'loadingTemplate',
  layoutTemplate: 'layout-ios'
  // notFoundTemplate: 'notFound',
  // waitOn: function() { return Meteor.subscribe('events'); }
});

// Router.route('/', function() {
//   this.redirect('basic');
// });

Router.map(function() {
    // this.route('login',{
    //            name: 'login',
    //            path: '/'});
    this.route('login',{
               name: 'login',
               path: '/'});


  this.route('verificationNumber');
  Router.route('userhome', function () {
    this.render('/userhome/');
    },  {
    name: 'userhome'
  });

<<<<<<< HEAD
  
=======
  this.route('wizard');
>>>>>>> 041a55e3a11ab961e2509890a984df32c7649bf7
  this.route('addevent');
  this.route('speaker');

  this.route('eventbrief');

  this.route('sponsors');
  this.route('sessionlist');
  this.route('eventlist');
  this.route('addquestion');
  this.route('/addsession/', function () {
    this.render('addsession');
    },  {
    name: 'addsession'
  });

 Router.route('/questionanswers/', function () {
     this.render('questionanswers');
    },  {
    name: 'questionanswers'
  });
this.route('contentlist');
this.route('addpoll');
this.route('polllist');
this.route('eventdetails');
this.route('eventsidebar');
this.route('addcontent');
Router.route('/addquestionsession/', function () {
    this.render('addquestion');
    },  {
    name: 'addquestionsession'
  });
this.route('hello');
this.route('home', { path: 'home' });
this.route('map', { path: 'map' });



this.route('eventinfo_ios');
this.route('sessionlist_ios');
this.route('contentlist_ios');
this.route('speakers');
this.route('index');
this.route('wizard');





Router.route('sessionlistios/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('sessionlistios', {data: item});
  },  {
  name: 'sessionlistios.show'
});

Router.route('eventbrief/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('eventbrief', {data: item});
  },  {
  name: 'eventbrief.show'
});

Router.route('attendeesios/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('attendeesios', {data: item});
  },  {
  name: 'attendeesios.show'
});

Router.route('speakersios/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('speakersios', {data: item});
  },  {
  name: 'speakersios.show'
});

Router.route('sponsorsios/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('sponsorsios', {data: item});
  },  {
  name: 'sponsorsios.show'
});

Router.route('pollios/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('pollios', {data: item});
  },  {
  name: 'pollios.show'
});

Router.route('contentios/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('contentios', {data: item});
  },  {
  name: 'contentios.show'
});

Router.route('questionanswerios/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('questionanswerios', {data: item});
  },  {
  name: 'questionanswerios.show'
});

Router.route('logisticsios/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('logisticsios', {data: item});
  },  {
  name: 'logisticsios.show'
});

Router.route('qadetailsios/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('qadetailsios', {data: item});
  },  {
  name: 'qadetailsios.show'
});

Router.route('attendeesdetails/', function () {
  var item = Events.findOne({_id: this.params._id});
  this.render('attendeesdetails', {data: item});
  },  {
  name: 'attendeesdetails.show'
});





});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}
