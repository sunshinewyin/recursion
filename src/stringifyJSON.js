// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  //initializes string
  var str = "";

  // if obj is null, then return string = "null"
    if (obj == null) {
      str += "null";
  // if obj is a number or a boolean, append obj to string
    } else if (typeof obj === "number" || typeof obj === "boolean"){
      str += obj;
  // separate category for strings because strings are already strings, but JSON.stringfy has outer quotes for strings
    } else if (typeof obj === "string"){

    //use escape to add outer quotes to strings
      str += "\"" + obj + "\"";

    //if obj is an array...
    } else if (Array.isArray(obj)) {

        //if array is empty, return "[]"
        if (obj.length === 0) {
          return "[]";
        // if array has contents, loop through each element of the array by index number, and append each element to the string as a stringified element. Add comma to separate elements
        } else {
          for (var i=0; i<obj.length; i++) {
            str = str + stringifyJSON(obj[i]) + ",";

            }
        //if the string ends in a comma, then remove that comma so there are no trailing commas (is there a more elegant way to this?)
          if (str.charAt(str.length-1) === ",") {
              str = str.slice(0,str.length-1);
          }
        //enclose string in brackets
          str = "[" + str + "]";
        }

    // if obj is an object...
    } else if (typeof obj === "object") {

        //create a counter for length of object. Note that the reason object length was not defined at the top of the function is that otherwise the interpreter would try to read the length of null, which is considered an object.
        var numOfKeysInObj = Object.keys(obj).length;

        // if the obj is empty (i.e., if it has no keys), then retrun "{}"
        if (numOfKeysInObj === 0) {
            return "{}";

        //otherwise, loop through each of the obj's key value pairs
        } else {
            for (var p in obj) {

              //if an object property value is undefined or if it is a function, then return "{}"
              if (typeof (obj[p]) == "undefined" || typeof (obj[p]) == "function") {
                str = "{}";
                return str;
              }

              //otherwise, append to the string (1) a stringified version of the property, and (2) a stringified version of the property value
              str = str + stringifyJSON(p) + ":" + stringifyJSON(obj[p]) + ",";

              //count down the counter by one each time
              numOfKeysInObj--;
            }
        //if the string ends in a comma, then remove that comma so there are no trailing commas (is there a more elegant way to this?)
        if (str.charAt(str.length-1) === ",") {
          str = str.slice(0,str.length-1);
        }
        str = "{" + str + "}";
      }
    }
    return str;
};

