Meteor.users.helpers({
  location : function(){
    if(!isDefined(this) || !Meteor.user())
      return "";
    
    return this.profile.zip_code;
  },

  userPledges: function(){
    if(!isDefined(this) || !Meteor.user())
      return [];

    var pledges = Pledges.find(user_id: this._id).fetch();
    if(!isDefined(pledges))
      return [];
    
    return pledges;
  }
})