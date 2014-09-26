//The build will inline common dependencies into this file.

requirejs.config({

  paths: {
    'jquery':                   '../bower_components/jquery/dist/jquery',
    'can':						'../bower_components/canjs/amd/can',
    
    'text':						'../bower_components/text/text',
 
    'canjs-commons':			'../bower_components/canjs-commons/canjs-commons',
    'mtemplate':				'../bower_components/canjs-commons/canjs-commons/mustachetemplate',
    'basecontroller':			'../bower_components/canjs-commons/canjs-commons/basecontroller'
    },
  shim: {
   
      'can': ['jquery'],
      'mtemplate' : ['jquery', 'can']
  }
});
define([
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
    
    
    'app/appcontrol'], function(){
	
});