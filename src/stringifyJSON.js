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
  			  		console.log('here');
	  	_.each(obj, function(key, value){

	  		stringified += '"' + key + '":' + obj[key];
	  	});
	  }
  }
  return stringified;
};
