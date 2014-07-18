angular.module('Demo')
  .factory('Computers', function(Map) {
  			 
	var map = new Map();

	return {
		init: function(){
			return map.init();
		}, 
		get: function(key) {
			return map.get(key);
		},
		put : function(key, obj) {
			map.put(key, obj);			
		},
		buildEntrys: function(){			
			this.entryArray = map.entrys();
			return this.entryArray;
		},	
		entrys: function() {
			return this.entryArray;
		},
		keys: function() {
			return map.keys();
		},
		exists: function(key){
			return map.exists(key);
		},
		entryArray: null,
		size: function() {
			return map.size();
		}
	};
});
