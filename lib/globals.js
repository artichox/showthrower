/*** -------------------------- GLOBAL VARIABLES -------------------------------***/


/*** -------------------------- GLOBAL HELPERS -------------------------------***/


isDefined = function(value) {
  var isEmpty = false;
  if(typeof value == Object)
    isEmpty = _.isEmpty(value);

  return value != null && value != undefined && !isEmpty; 
}

emptyString = function(value) {
  return value == undefined || value == "";
}

numberWithCommas = function(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}