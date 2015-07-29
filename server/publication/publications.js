//Publication details

Meteor.publish('events', function() {
  return Events.find();
});

// Meteor.publish('sessions', function() {
//   return Sessions.find();
// });

Meteor.publish('questions', function() {
  return Questions.find();
});

Meteor.publish('contents', function() {
  return Contents.find();
});

Meteor.publish('qanswers', function() {
  return QAnswers.find();
});

Meteor.publish('polls', function() {
  return Polls.find();
});
Meteor.publish('Profiles', function() {
  return Polls.find();
});

