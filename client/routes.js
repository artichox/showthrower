
/**----------------------- CONFIGURATIONS ---------------------- **/

Router.configure({
   layoutTemplate: 'layout',  //can be any template name
   loadingTemplate: 'loading'
});


/**----------------------- ROUTES ---------------------- **/

Router.map(function() { 

  this.route('home', {
    path: '/',
    layoutTemplate: 'homelayout',
    yieldTemplates:{
      'home':{to: 'content'},
    }
  });

  this.route('explore', {
    path: '/explore',
    yieldTemplates:{
      'explore':{to: 'content'},
    }
  });

  this.route('campaign', {
    path: '/campaign',
    yieldTemplates:{
      'campaign':{to: 'content'},
    }
  });

  this.route('extras', {
    path: '/extras',
    yieldTemplates:{
      'extras':{to: 'content'},
    }
  });

  this.route('howitworks', {
    path: '/howitworks',
    layoutTemplate: 'homelayout',
    yieldTemplates:{
      'howitworks':{to: 'content'},
    }
  });

  this.route('createcampaign', {
    path: '/createcampaign',
    yieldTemplates:{
      'createcampaign':{to: 'content'},
    }
  });

  this.route('login', {
    path: '/login',
    yieldTemplates:{
      'login':{to: 'content'},
    }
  });

  this.route('signup', {
    path: '/signup',
    yieldTemplates:{
      'signup':{to: 'content'},
    }
  });

  this.route('logout', {
    path: '/logout',
    onBeforeAction: function(){
      logout()
    }
  })
  
});

var logout = function(pause){
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