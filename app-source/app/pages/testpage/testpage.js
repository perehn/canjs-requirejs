define(['mtemplate!app/pages/testpage/testpage.mustache', 
        'basecontroller'],
	
function(template, BaseController){

BaseController.extend('Page.Testpage',
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
