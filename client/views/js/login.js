Template.login.events({
  'click #login-button' : function(e, t){
    e.preventDefault();

    // retrieve the input field values    
    var username = t.find('#username').value;
    var password = t.find('#password').value;

    username.trim()
    password.trim() 

    if(password == null || password == ""){
      Session.set("alert_level", 'warning');
      Session.set("info_message", "Please enter a valid password");
      return;
    }

    if(username == null || username == ""){
      Session.set("alert_level", 'warning');
      Session.set("info_message", "Please enter your email");
      return;
    }

    Meteor.loginWithPassword(username, password, function(err){
      if (err){
        Session.set("alert_level", 'warning');
        Session.set("info_message", "Hmmm... there appears to have been a problem logging in: ",  err);
      }
      else{
        Router.go('explore');
      }
    });
    
    return false; 
  }
})