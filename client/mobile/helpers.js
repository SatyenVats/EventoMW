UI.registerHelper('root_url', function(){
  return __meteor_runtime_config__.ROOT_URL.slice(0,-1);
});

UI.registerHelper('find_image', function(image_id){
  return Images.findOne({_id: image_id});
});
