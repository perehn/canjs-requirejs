define([
        'can'

         ], function(can) {

	return can.Control.extend({
		defaults : {
			defaultpage : 'testpage',
			pageContainer : '#page-container'
		}
	}, {
		init: function(element, options) {
			var self = this;


			can.route(":page/:subpage", {});

			setTimeout(function() {
				can.route.ready();
				var page = can.route.attr('page');
				if (page == null)
					can.route.attr('page', self.options.defaultpage);
			}, 1);


		},
		":page route": function(data) {

			var pageName = can.capitalize(data.page);

			this.navigate(pageName);

		},

		

		navigate : function(pageName){
			var pagecontainer = $(this.options.pageContainer);
			var self = this;

			
			var currentController = pagecontainer.control();
			if (currentController) {
				currentController.destroy();
			}

			var PageController = Page[pageName];
			
		
			new PageController(pagecontainer).render();
				

		},
		"{can.route} change": function(ev, attr, how, newVal, oldVal) {}

	});


});
