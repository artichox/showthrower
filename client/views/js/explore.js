Template.explore.helpers({
  campaigns: function(){
    if(this == undefined)
      return "";
    console.log("in campaigns")
    return Campaigns.find({}).fetch();
  },

  userLocation: function() {
    if(this == undefined)
      return "";
    console.log("in user location")
    if(!Meteor.user())
      return "";
    return Meteor.user().location();
  }
})