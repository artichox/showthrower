/*** ------------------------ LOAD TEST DATA ---------------------****/

//LOAD_TEST_DATA is defined in definitions.js
if(Meteor.isServer){
  var Fiber = Npm.require('fibers');

  if(LOAD_TEST_DATA){
    console.log("Loading the test data from data.json into mongo....");
    Fiber(function() {
      var testfile = Assets.getText('data.json');
      var data = JSON.parse(testfile);
      
      //If the server is empty, then load in some sample campaigns
      if(Campaigns.find({}).fetch().length == 0){
        var campaigns = data.campaigns;
        for(var i = 0; i< campaigns.length; i++){
          var campaign = campaigns[i];
          Campaigns.insert(campaign, function(err){
            if(err)
              throw new Error("There was an error inserting test data into db: ", err);
          });
        }
      }
    }).run();
  }
}