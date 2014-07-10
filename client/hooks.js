Router.onBeforeAction(logout, {only:['logout']});

var logout = function(pause){
  Session.set("alert_level", "success")
  Session.set("info_message", "See you later!")
  
  Meteor.logout(function(err){
    if(err)
      console.log("There was an error logging out : " , err);
    else{
      Router.go('home')
    }
  })
}