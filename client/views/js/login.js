Template.login.events({
  'click #login-button' : function(){
    e.preventDefault();

    console.log("Im in!")
    // retrieve the input field values    
    var email = t.find('#email').value;
    var password = t.find('#password').value;

    email.trim()
    password.trim() 

    if(password == null || password == ""){
      Session.set("alert_level", 'warning');
      Session.set("info_message", "Please enter a valid password");
      return;
    }

    if(email == null || email == ""){
      Session.set("alert_level", 'warning');
      Session.set("info_message", "Please enter your email");
      return;
    }

    Meteor.loginWithPassword(email, password, function(err){
      if (err){
        console.log("error!");
        Session.set("alert_level", 'warning');
        Session.set("info_message", "Hmmm... there appears to have been a problem logging in: "+ err);
      }
      else{

        Router.go('explore');
      }
    });
    
    return false; 
  }
})