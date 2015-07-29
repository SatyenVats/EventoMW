Template.index.events = {
 'click #event': function(){
    Router.go('step1',{},{query:{Questionid: this._id}});
}
}