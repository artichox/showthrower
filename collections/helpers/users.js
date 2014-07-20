Meteor.users.helpers({
  location : function(){
    if(!isDefined(this) || !Meteor.user())
      return "";
    
    return this.profile.zip_code;
  }
})