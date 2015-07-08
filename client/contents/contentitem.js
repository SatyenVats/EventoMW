Template.contentItem.helpers({
  isjpeg: function(srctype) {
  	if(srctype==="image/jpeg")
     return true;
  },
  ispng: function(srctype) {
  	if(srctype==="image/pmg")
     return true;
  },
  ispdf: function(srctype) {
  	if(srctype==="application/pdf")
     return true;
  },
  isdoc:function(srctype) {
   if(srctype==="application/vnd.openxmlformats-officedocument.wordprocessingml.document")
   	return true;
},
isexcel:function(srctype) {
   if(srctype==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
   	return true;
}


});