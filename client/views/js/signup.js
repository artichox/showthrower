Template.signup.events({
  'click #signup_button' : function(e, t){
    e.preventDefault();

    var password = t.find('#password').value,
      confirm = t.find('#confirm_password').value,
      username = t.find('#username').value,
      zip = t.find('#zip_code').value,
      email = t.find('#email').value;

    //Trim input
    email.trim()
    password.trim()
    zip.trim()
    username.trim()

    //Verify Inputs

    if(username == null || username == "" ){
      Session.set("alert_level", 'warning');
      Session.set("info_message", "Please enter a valid username");
      return;
    }

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
        username:username, 
        password:password, 
        profile: {
          zip_code: zip,
          email:email
        }

      }, function(err){
        if(err){
          Session.set("alert_level", 'danger');
          Session.set("info_message", "Oh dear! It appears there was a problem creating your account..." + err); 
          return
        }
        else{
          Session.set("alert_level", 'success');
          Session.set("info_message", "Welcome to ShowThrower!");
          
          Router.go("/explore")
        }

      });
  }
})