
define([
         'mtemplate!app/sitecontainer.mustache',
         'canjs-commons/navigationcontrol',
         
         'jquery',
     	 'can/view/mustache', 
     	 'canjs-commons/extensions',
         'can/util/library', 
         'can/control/route', 
         'can/model',      
         'can/component',
         'can/control',
         'can/route',
         'can/map/delegate',
         'can/construct/super',
         'can/construct/proxy',
         'can/control/plugin',
         'can/list',
         'can/map/backup',
         'can/map/define',
         'can/map/validations',
         'canjs-commons/extensions',
         'app/pages',
         'app/models',
     
         ], function(template, NavigationControl) {
	// Use Mustache and Control
	can.Control.extend('AppControl',{
		
	},{
		init : function(){
			var self = this;

			
			this.element.find('body').append(template({}));
			
			new NavigationControl(this.element, {
					pageContainer : '#page-container',
					defaultPage : 'testpage'	
			});
		
		}
		
	});
	
	
	
	new AppControl(document, {});
	
	
	
});