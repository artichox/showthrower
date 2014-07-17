/*** -------------------------- GLOBAL VARIABLES -------------------------------***/


/*** -------------------------- GLOBAL HELPERS -------------------------------***/



isDefined= function(value){
  return value != null && value != undefined && !_.isEmpty(value) ; 
}

emptyString = function(value){
  return value == undefined || value == "";
}