define([
        'can',
        'jquery'

        ], function(can, $) {

	return can.Control.extend({
		defaults : {
			defaultpage : 'testpage',
			pageContainer : '#page-container',
			animate : true,
			preAnimation : function(container){
				var dfd = can.Deferred();
				container.animate({
					opacity: 0.1
				}, 200, function() {
					dfd.resolve();
				});
				return dfd.promise();
			},
			postAnimation : function(container){
				var dfd = can.Deferred();
				container.animate({
					opacity: 1
				}, 200, function() {
					dfd.resolve();
				});
				return dfd.promise();
			},
			cleanupAnimation : function(container){
				container.css({opacity: 1});
			}
		}
	}, {
		init: function(element, options) {
			var self = this;


			can.route(":page/:subpage", {});

			
			can.route.ready();
			var page = can.route.attr('page');
			if (page == null)
				can.route.attr('page', self.options.defaultpage);
			

		},
		":page route": function(data) {

			this.navigate(data.page);

		},



		navigate : function(pageName){
			var pageContainer = $(this.options.pageContainer),
			options = this.options,
			self = this;

			var currentController = pageContainer.control();
			if (currentController) {
				currentController.destroy();
			}
		
			var PageControllerClass = Page[can.capitalize(pageName)];
			if(!PageControllerClass){
				console.error('Could not find page ' + pageName);
				return;
			}
			
			console.log('open ' + pageName);

			var pageController = new PageControllerClass(pageContainer);

			if(options.animate){
				$.when(pageController._preRenderPhase(), options.preAnimation(pageContainer) ).done(function(){
					pageController._postRenderPhase();
					options.postAnimation(pageContainer);
					console.log('rendered ' + pageName);
				}).fail(function(){
					options.cleanupAnimation(pageContainer);
				})
			}else{
				pageController.render();

			}


		}

	});


});
