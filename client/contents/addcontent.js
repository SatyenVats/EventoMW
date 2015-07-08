var currentfileupload;





function   SaveCollection(e,fileobj) {

    // var content1 =new object();
    // content1.title= $('.title').val();
    // content1.description= $('.description').val();
    // content1.fileextension= fileobj;
    // content1.filesize= fileobj;
    // content1.path= fileobj;
    // content1.sessionid= Router.current().params.query.SessionId;   

var content1 = {
    title:$('.title').val(),
    description:$('.description').val(),
    fileextension:fileobj.file.type,
    filesize:fileobj.file.size,
    path:fileobj.url,
    sessionid:Router.current().params.query.SessionId,
    eventid:Router.current().params.query.EventId
};
   
   Contents.insert(content1, function insert(e){

   });
}

Template.addcontent.events({
    "click button.upload": function(e){
        var files = $("input.file_bag")[0].files

        S3.upload({
                files:files,
                path:"Evento"
            },function(err,r){

                     if (err) 
                     {           
                         throw new Meteor.Error("Upload Error: " + err.reason);
                     } 
                     else {                        
                         
                          SaveCollection(e,r);
                     }


               
                console.log(r);
        });
    }
})

Template.addcontent.helpers({
    "files": function(){
        return S3.collection.find();
    }
})