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
  this.route('userHome');
  this.route('event_ios');

  this.route('addevent');



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
