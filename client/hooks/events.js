


Events.after.insert(function(userId, doc) {
  console.log("after client Hooks Inserted:", this._id);  
  if(this._id !==false)
  Router.go('addsessionevent',{},{query:{EventId: this._id}});
});

