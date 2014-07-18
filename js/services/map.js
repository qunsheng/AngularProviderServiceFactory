angular.module('Demo')
  .factory('Map', function() {
	// Define the constructor function.
	function InstantiatableMap() {
		this.container= {};
		this.keyArray=null;
		this.sizeValue=0;
	}

	InstantiatableMap.prototype = {
		init : function() {
			this.container= {};
		},
		getMap : function() {

			return this.container;
		
		},
		get : function(key) {

			return this.container[key];
		
		},
		exists: function(key){
			var obj = this.container[key];
			if(obj){
				return true;
			} else {
				return false;
			}
		},	
		put : function(key, obj) {
			if(key && obj){
				this.container[key] = obj;
			}			
		},
		entrys: function() {
	    	var entrys = [];
	    	this.keyArray = [];
	    	for(var key in this.container){
	    		
	    		entrys.push( this.container[key]);
	    		this.keyArray.push(key);
	    	} 
	    	this.sizeValue = this.keyArray.length;
	    	return entrys;

		},
		keys: function() {
			if(!this.keyArray){
		    	this.keyArray = [];
		    	for(var key in this.container){
		    		
		    		this.keyArray.push(key);
		    	} 
			}
	    	return this.keyArray;
		}, 
		sizeValue: 0,
		size: function() {
			if(this.sizeValue <= 0){
				this.sizeValue = 0;
		    	for(var key in this.container){
		    		
		    		this.sizeValue++;
		    	} 
	    	}
	    	return this.sizeValue ;
		},
		remove: function(key){
			delete this.container[key];
		}
	};
  
  
	// Return constructor - this is what defines the actual
	// injectable in the DI framework.
	return (InstantiatableMap );
  
  
  });
  
