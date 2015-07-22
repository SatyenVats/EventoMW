Router.configure({
  loadingTemplate: 'loadingTemplate',
  layoutTemplate: 'layout-ios'
  // notFoundTemplate: 'notFound',
  // waitOn: function() { return Meteor.subscribe('events'); }
});



Router.map(function() {
    this.route('login',{
               name: 'login',
               path: '/'});

  this.route('verificationNumber');
  Router.route('userhome', function () {
    this.render('/userhome/');
    },  {
    name: 'userhome'
  });

  this.route('addevent');
  this.route('speaker');

  this.route('eventbrief');

   this.route('content');



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





  Router.route('eventIos/', function () {
    var item = Events.findOne({_id: this.params._id});
    this.render('eventIos', {data: item});
    },  {
    name: 'eventIos.show'
  });

  Router.route('eventbrief/', function () {
    var item = Events.findOne({_id: this.params._id});
    this.render('eventbrief', {data: item});
    },  {
    name: 'eventbrief.show'
  });

  Router.route('attendeesIos/', function () {
    var item = Events.findOne({_id: this.params._id});
    this.render('attendeesIos', {data: item});
    },  {
    name: 'attendeesIos.show'
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
