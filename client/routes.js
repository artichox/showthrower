
/**----------------------- HOOKS ----------------------------- **/

Router.onBeforeAction(requireLogin, {except: ['passwordrecovery', 'signup', 'login', 'home', 'explore', 'howitworks', 'loading']});

/**----------------------- CONFIGURATIONS ------------------- **/

Router.configure({
   layoutTemplate: 'layout',  //can be any template name
   loadingTemplate: 'loading'
});


/**----------------------- ROUTES -------------------------- **/

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
    path: '/campaign/:_id',
    yieldTemplates:{
      'campaign':{to: 'content'},
    },
    data: function() {
      var campaign = Campaigns.findOne({_id: this.params._id});
      if (!isDefined(campaign)) 
        return {};
      else
        return campaign;
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

  this.route('profile', {
    path: '/userprofile',
    yieldTemplates:{
      'userprofile':{to: 'content'},
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
