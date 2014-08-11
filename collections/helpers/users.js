Meteor.users.helpers({
  location: function(){
    if(!isDefined(this) || !Meteor.user())
      return "";
    
    return this.profile.zip_code;
  },

  userPledges: function() {
    if(!isDefined(this) || !Meteor.user())
      return [];

    var pledges = Pledges.find({user_id: this._id}).fetch();
    console.log("Finding the user pledges", pledges);

    if(!isDefined(pledges))
      return [];
    
    return pledges;
  }
})