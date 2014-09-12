define(['stache!app/pages/testpage/testpage.mustache'],
	
function(template){

BaseController.extend('Page.Testpage',
/* @Static */
{
	
},
/* @Prototype */
{
	html : null,
	template : template,
	
	getData : function(){
		return {
			
		}
	},
	preRender : function(data){
		//this.navbarOptions.title = this.options.product.name;
	},
	postRender : function(){
	
	}

});



})
