
define([
         'mtemplate!app/sitecontainer.mustache',
         'can/control',
         'app/pages',
         'app/models',
     
         ], function(template) {
	// Use Mustache and Control
	can.Control.extend('AppControl',{
		
	},{
		init : function(){
			var self = this;

			var html = template({});
			this.element.find('body').append(html);
			
			new Page.Testpage(this.element.find('.page'), {}).render();
		
		}
		
	});
	
	
	
	new AppControl(document, {});
	
	
	
});