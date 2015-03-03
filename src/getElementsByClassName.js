// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

	var arrayOfNodesWithClassName = [];
	var element = document.body;

	if (element.classList.contains(className)) {
		arrayOfNodesWithClassName.push(element);
	}

	var checkNodesOfChildren = function (element) {
		for (var i = 0; i<element.childNodes.length; i++) {
			// var child = element.childNodes[i];
			if (element.childNodes[i].nodeType == document.ELEMENT_NODE) {
				if (element.childNodes[i].classList.contains(className)) {
					arrayOfNodesWithClassName.push(element.childNodes[i]);
				}
			checkNodesOfChildren(element.childNodes[i]);
			}
		}
	};

	checkNodesOfChildren(element);
	return arrayOfNodesWithClassName;
};




//
// 			if (element.childNodes.length>0) {


// 			}
// 		} else if (element)

// 	}

// 	if (element.length === 1) {
// 		if (element.classList.contains(className)) {




// 	var getElementsForEachChild = function (element)

// 		for (var i = 0; i<element.length; i



// 		} else if (element.length > 1) {
// 			for (var i = 0; i<element.length; i++) {


// 			}
// 		}


// 	}




// 	 {

// 	if (element.childNodes.length === 1 && element.childNodes[i] == document.TEXT_NODE) {
// 		if (element.childNodes[i].classList.contains(className)) {
// 			arrayOfNodesWithClassName.push(element.childNodes[i]);
// 			}
// 			return arrayOfNodesWithClassName;

// 		} else if (element.childNodes.length > 1 && element.childNodes[i] == document.ELEMENT_NODE) {
// 			for (var i= 0; i<element.childNodes.length; i++) {
// 				if (element.childNodes[i].classList.contains(className)) {
// 					arrayOfNodesWithClassName.push(element.childNodes[i]);
// 				}

// 	return arrayOfNodesWithClassName;
// };
