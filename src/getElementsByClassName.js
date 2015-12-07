// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var docs = document.body;
  var elements = [];

  var loopDOM = function(currentElement){
  	if(currentElement.classList !== undefined){
  		for(var i = 0; i < currentElement.classList.length; i++){
  			if(currentElement.classList[i] === className){
  				elements.push(currentElement);
  			}
  		}
  		if(!!currentElement.childNodes){
	  		for(var k = 0; k < currentElement.childNodes.length; k++){
	  			console.log(currentElement.childNodes[k]);
	  			loopDOM(currentElement.childNodes[k]);
	  		}
  		}
  	}
  }
  loopDOM(docs);
  console.log(elements);
  return elements;
};
