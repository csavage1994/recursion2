// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var stringified = '';
  //base case
  if(typeof obj !== 'object'){

  	if(typeof obj === 'string'){
   		stringified += '"' + obj + '"'; 		
  	} else if(typeof obj !== 'number' && typeof obj !== 'boolean'){
  		stringified += '"' + obj + '"';
  	} else{
  		stringified += obj;
  	}

  }
  else {

  	if(obj === null){
  		stringified += obj;
  	} else if(Array.isArray(obj)){
  		if(obj[0] === undefined){
  			stringified += '[]';  		
  		}
  		if(obj.length > 0){
  			stringified += '[';
  			for(var i = 0; i < obj.length; i++){
  				if(Array.isArray(obj[i])){
  					stringified += stringifyJSON(obj[i]);
  				} else if(typeof obj[i] === 'object'){
  					stringified += stringifyJSON(obj[i]);
  				}
	  				else if(typeof obj[i] === 'string'){
	  					stringified += '"' + obj[i] + '"';
	  				} else{
	  					stringified += obj[i];
	  				}
	  				if(i !== obj.length - 1){
	  					stringified += ',';
	  				}
	  			}
  			stringified += ']';
  		}
  	} else{
  		if(Object.keys(obj).length === 0){
  			stringified += '{}';
  		}
  		else{
  			stringified += '{';
		  	_.each(obj, function(value, key){
		  		if(typeof value === 'function' || typeof value === 'undefined'){

		  		}
		  		else if(typeof value === 'object' && value !== null && value !== undefined){

		  			stringified += '"' + key + '":';
		  			stringified += stringifyJSON(value);
		  			if(key !== Object.keys(obj)[Object.keys(obj).length-1]){
		  				stringified += ',';
		  			}
		  		} else {
			  		stringified += '"' + key + '":';
			  		if(typeof value === 'string'){
			  			stringified += '"' + value + '"';
			  		} else{
			  			stringified += value;
			  			if(Object.keys(obj)[Object.keys(obj).length-1] !== key){
			  				stringified += ',';
			  			}
			  		}
		  		}
		  	});
	 	stringified += '}';
	 	}

	  }
  }
  return stringified;
};
