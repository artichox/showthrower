/**----------------------- ROUTER HELPERS ---------------------- **/

logout = function(pause){
  Session.set("alert_level", "success")
  Session.set("info_message", "See you later!")
  console.log("made it into the logout function")
  
  Meteor.logout(function(err){
    if(err)
      console.log("There was an error logging out : " , err);
    else{
      Router.go('home')
    }
  })
}

/**----------------------- HOOK HELPERS ---------------------- **/

requireLogin  = function(pause){
  if(!( Meteor.user()|| Meteor.loggingIn() )) {
      Router.go('login')
      return
    }
};