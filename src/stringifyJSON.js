// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var str = '';
  var numOfKeysInObj = Object.keys(obj).length;

    if (
      typeof obj === "number" ||
      typeof obj === null ||
      typeof obj === "boolean" ||
      typeof obj === "string"
      ) {

      str += obj;

    } else if (Array.isArray(obj)) {

      str = str + "[" + obj.toString() + "]";

    } else if (typeof obj === "object") {

        if (numOfKeysInObj === 0) {
            return "{}";

        } else {
            for (var p in obj) {
            str = str + p + ":" + stringifyJSON(obj[p]) + ",";
            numOfKeysInObj--;
            }
            str = "{" + str + "}";
        }
    }

    return str;
};

//to do: (1) figure out how to get rid of trailing commas; (2) terminate for unstringfiableValues; (3) make sure array within arrays works
