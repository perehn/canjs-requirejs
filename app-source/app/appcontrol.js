
define([
         'mtemplate!app/sitecontainer.mustache',
         'navigationcontrol',
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
			
			new NavigationControl(this.element, {});
			
			//new Page.Testpage(this.element.find('.page'), {}).render();
		
		}
		
	});
	
	
	
	new AppControl(document, {});
	
	
	
});