
 Restivus.addCollection(Events);
 
 Restivus.addRoute('eventsapi/:id', {authRequired: false}, {
    get: function () {
    	         Logger.info('Event GET API :' + this.urlParams.id);    

			      var event = Events.findOne(this.urlParams.id);
			      if (event) {
			        return {status: 'success', data: event};
			      }
			      return {
			        statusCode: 404,
			        body: {status: 'fail', message: 'Event not found'}
			      };
   			},
   	put :function(){
   		         Logger.info('Event PUT API :'+this.urlParams.id);    

                var entityIsUpdated = Events.upsert(this.urlParams.id, this.bodyParams);
                if (entityIsUpdated) {
			        var entity = Events.findOne(this.urlParams.id);
			        return {status: "success", data: entity};
			      }
			      else {
				        return {
				          statusCode: 404,
				          body: {status: "fail", message: "Events not found"}
				        	}
    					}
   	        },
   	post:   {action: function () {
   		            Logger.info('Event POST API :'+this.urlParams.id);    
			        var event = Events.findOne(this.urlParams.id);
			        if (event) {
			          return {status: "success", data: event};
			        }
			        return {
			          statusCode: 400,
			          body: {status: "fail", message: "Unable to add event"}
			        };
			      }
    		},
    delete: {action: function () {
    	            Logger.info('Event DELETE API :'+this.urlParams.id);    
			        if (Events.remove(this.urlParams.id)) {
			          return {status: "success", data: {message: "Event removed"}};
			        }
			        return {
			          statusCode: 404,
			          body: {status: "fail", message: "Event not found"}
			        };
                   }
            }
});

