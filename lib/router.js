Router.configure({

  loadingTemplate: 'loadingTemplate',

  layoutTemplate: 'layout-ios'

  // notFoundTemplate: 'notFound',

  // waitOn: function() { return Meteor.subscribe('events'); }

});



Router.map(function() {


    this.route('eventlist',{

               name: 'login',

               path: '/'

               //data: function () {return events.find()}

                      });

  this.route('verificationNumber');


  Router.route('userhome', function () {
    this.render('/userhome/');
    },  {
    name: 'userhome'
  });

  // this.route('attendees');
  this.route('attendees');
  this.route('event_ios');
    this.route('eventIos');

  this.route('addevent');

  this.route('speaker');

  this.route('sponsors');

  this.route('sessionlist');



  // Router.route('/addcontentsession/',

  //   function () {

  //   this.render('addcontent');    },  {

  //   name: 'addcontentsession'

  // });





  this.route('addquestion');

  Router.route('/addsession/', function () {

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

   // var item = Sessions.findOne({EventId: this.params.EventId});

    this.render('addquestion');

    },  {

    name: 'addquestionsession'

  });







this.route('hello');

    this.route('home', { path: 'home' });

    this.route('map', { path: 'map' });





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
