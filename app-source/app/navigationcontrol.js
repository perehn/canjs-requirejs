define([
        'can',
        'jquery',
        'canjs-commons/navigationservice'

        ], function(can, $, NavigationService) {

	return can.Control.extend({
		defaults : {
			defaultPage : 'listpage',
			pageContainer : '#page-container',
			urlControllerMapping : {}
		}
	}, {
		init: function(element, options) {
			var self = this;

			this.navigationService = new NavigationService(this.options);


			can.route(":page/:subpage", {});

			
			can.route.ready();
			var page = can.route.attr('page');
			if (page == null)
				can.route.attr('page', self.options.defaultPage);
			
		},
		
		/**
		 * Default mapping used
		 * 
		 * url -> PageControllerClass
		 * #!exampleurl - Page.Exampleurl
		 */

		":page route": function(data) {
			
			this.openUrl(data.page);

		},
		
		":page/:subpage route": function(data) {

			this.openUrl(data.page, {subpage : data.subpage})

		},
		
		
		openUrl : function(url, pageOptions){
			var PageControllerClass = this.options.urlControllerMapping[url] || Page[can.capitalize(url)];
			if(!PageControllerClass){
				console.error('Could not find page ' + url);
				return;
			}
			
			this.navigationService.openPage(PageControllerClass, pageOptions);
		}
	});


});
