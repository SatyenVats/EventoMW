SimpleSchema.debug = true;
AutoForm.addHooks(null, {
    onError: function (name, error, template) {
      console.log(name + " error:", error + " template:" +template);
    }
  });