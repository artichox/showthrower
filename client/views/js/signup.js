Template.signup.events({
  'click #signup_button' : function(e, t){
    e.preventDefault();

    var password = t.find('#password').value,
      confirm = t.find('#confirm_password').value,
      email = t.find('#email').value,
      zip = t.find('#zip_code').value;

    if(email == null || email == "" ){
      Session.set("alert_level", 'warning');
      Session.set("info_message", "Please enter a valid email");
      return;
    }

    if(zip == null || zip == "" ){
      Session.set("alert_level", 'warning');
      Session.set("info_message", "Please enter a zip code");
      return;
    }

    if(password == null || password == ""){
      Session.set("alert_level", 'warning');
      Session.set("info_message", "Please enter a valid password");
      return;
    }

    if(password != confirm){
      Session.set("alert_level", 'warning');
      Session.set("info_message", "Password fields do not match.");
      return;
    }

    Accounts.createUser({
        username:email, 
        password:password, 
        profile: {
          zip_code: zip
        }

      }, function(err){
        if(err){
          Session.set("alert_level", 'danger');
          Session.set("infoMessage", "Oh dear! It appears there was a problem creating your account..." + err); 
          return
        }
        else{
          Session.set("alert_level", 'success');
          Session.set("infoMessage", "Welcome to ShowThrower!");
          
          Router.go("/explore")
        }

      });
  }
})