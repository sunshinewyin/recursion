// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var str = "";

    if (obj == null) {
      str += "null";

    } else if (typeof obj === "number" || typeof obj === "boolean")

    {
      str += obj;

    } else if (typeof obj === "string")

    {
      str += "\"" + obj + "\"";

    } else if (Array.isArray(obj)) {

        if (obj.length === 0) {
          return "[]";

        } else {
          for (var i=0; i<obj.length; i++) {
            str = str + stringifyJSON(obj[i]) + ",";

            }
          if (str.charAt(str.length-1) === ",") {
              str = str.slice(0,str.length-1);
          }
          str = "[" + str + "]";
        }


    } else if (typeof obj === "object") {

        var numOfKeysInObj = Object.keys(obj).length;

        if (numOfKeysInObj === 0) {
            return "{}";

        } else {
            for (var p in obj) {

              if (typeof (obj[p]) == "undefined" || typeof (obj[p]) == "function") {
                str = "{}";
                return str;
              }
              str = str + stringifyJSON(p) + ":" + stringifyJSON(obj[p]) + ",";
              numOfKeysInObj--;

            }
              }
      if (str.charAt(str.length-1) === ",") {
              str = str.slice(0,str.length-1);
            str = "{" + str + "}";
        }
    }

    return str;
};

//to do: (1) figure out how to get rid of trailing commas
