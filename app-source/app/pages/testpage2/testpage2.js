define(['mtemplate!app/pages/testpage2/testpage2.mustache', 
        'basecontroller'],
	
function(template, BaseController){

BaseController.extend('Page.Testpage2',
/* @Static */
{
	
},
/* @Prototype */
{
	template : template,
	
	preRender : function(options){
		console.log('prerender');
	},
	postRender : function(options){
	
	}

});



})
