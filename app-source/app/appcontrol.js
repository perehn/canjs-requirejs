
define([
         'mtemplate!app/sitecontainer.mustache',
         'canjs-commons/navigationcontrol',
         'can/control',
         'app/pages',
         'app/models',
     
         ], function(template, NavigationControl) {
	// Use Mustache and Control
	can.Control.extend('AppControl',{
		
	},{
		init : function(){
			var self = this;

			var html = template({});
			this.element.find('body').append(html);
			
			new NavigationControl(this.element, 
					{pageContainer : '#page-container',
					 defaultPage : 'testpage2'	});
		
		}
		
	});
	
	
	
	new AppControl(document, {});
	
	
	
});