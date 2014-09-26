define(['jquery',
        'can'],
		function($, can){
			C = {};
			
			C.jsonajax = function(request){
				
		
				return $.ajax({
					  url: request.url,
					  processData: false,
					  data: JSON.stringify(request.data),
					  dataType: request.dataType || 'json',
					  contentType:'application/json',
					  type: request.type || 'POST'		  
					});
			};


			 C.dfdMap = function(data){
			    	var dfdMap = $.Deferred();
			    	var deffereds_array = [];
			    	var keys_array = [];
			    	$.map(data, function(dfd, key) {
			    		deffereds_array.push(dfd);
			    		keys_array.push(key);
			    	});
			    	$.when.apply(null, deffereds_array).done(function(){
			    		var args = arguments;
			    		var result = {};
			    		$.each(args, function(i,e){
			    			
			    			var key = keys_array[i];
			    			if(key){
			    				result[key] = e;
			    			}
			    		});
			    		
			    		dfdMap.resolve(result);
			    	}).fail(function(a,b,c){
			    		dfdMap.reject();
			    	});

					return dfdMap;
			    };

			
			can.Control.prototype.find = function(s){
				return this.element.find(s);  
			};
			
			can.Model.List.prototype.grep = function(callback, args){
				return new this.constructor($.grep(this, callback, args));
			};

			can.Model.List.prototype.getOne = function(id){
				return this.grep(function(element){
					return element.id == id;
				})[0];
			};
			can.Model.List.prototype.sort = function(sortFunc){

				[].sort.apply(this, [sortFunc]); 
				return this;
			};
			can.Model.List.prototype.remove = function(item){

				var index = this.indexOf(item);
				this.splice(index, 1);
				console.log(index);
			};

		

			$.fn.model = function(m){
				if(m){

					this.data('model', m);
					this.addClass(m.constructor._shortName);
					this.addClass(m.constructor._shortName + "_" + m.id);
					return this;
				}else{
					return this.data('model');
				}
			};


			jQuery.Event.prototype.stop = function(){
				this.stopPropagation();
				this.preventDefault();
			};


			C.clearController = function(element){
		    	if(element == null){
		    		return;
		    	}
				var controller = element.control();
				if(controller){
					controller.destroy();
				}	
				element.html('')
				
			};
			
			$.fn.clearController = function(){
				C.clearController(this);
			};

			

		})