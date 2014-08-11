
Template.user_pledges.helpers({
  userPledges: function () {
    console.log("in the user pledges!");
    if(!isDefined(this))
    return "";

    if(!Meteor.user())
      return "";

    var userpledges = Meteor.user().userPledges();  
    return userpledges;
  }
})