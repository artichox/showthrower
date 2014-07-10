Template.login.events({
  'submit login-button' : () -> 
    e.preventDefault();
    // retrieve the input field values    
    var nickname = t.find('#login_nickname').value.toUpperCase();
    var password = t.find('#login_password').value;

    trimInput(nickname); 
    trimInput(password); 

    if(password == null || password == ""){
      Session.set("alert_level", 'warning');
      Session.set("infoMessage", "Please enter a valid password");
      return;
    }

    if(nickname == null || nickname == ""){
      Session.set("alert_level", 'warning');
      Session.set("infoMessage", "Please enter a the nickname you chose at the hospital");
      return;
    }

    Meteor.loginWithPassword(nickname, password, function(err){
      if (err){
        console.log("error!");
        Session.set("alert_level", 'warning');
        Session.set("infoMessage", "There was a problem logging in: "+ err);
      }
      else{
        Session.set("alert_level", 'success');
        Session.set("infoMessage", "Welcome back!");

        loadJSONintoMongo();
        restoreState(nickname)

        Router.go('/loading');
      }
    });
    
    return false; 
})