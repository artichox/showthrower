isDefined= function(value){
  return value != null && typeof value != 'undefined' && !_.isEmpty(value)
}