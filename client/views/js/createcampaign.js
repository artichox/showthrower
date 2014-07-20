// Template.createcampaign.rendered = function() {
//   $('.datepicker').datepicker();
// }

Template.createcampaign.events({
  'changeDate ': function(e){
    //if(e.date.valueof() > e.date.
  },

  'click #submit-button' : function(e,t){
    e.preventDefault();

    var show_title = t.find($('#show_title')).value.trim(),
      artist = t.find($('#artist')).value.trim(),
      goal = t.find($('#goal')).value.trim(),
      venue = t.find($('#venue')).value.trim(),
      date_to_throw = t.find($('#date_to_throw')).value.trim(),
      image = t.find($('#image')).value.trim(),
      description = t.find($('#description')).value.trim(),
      ticket_price = t.find($('#ticket_price')).value.trim(),
      video = t.find($('#video')).value.trim();

    //Check for proper inputs
    if (emptyString(artist)) {
      notify("Please enter a valid artist name", "warning");
      return;
    }

    if (emptyString(goal)) {
      notify("Please enter a valid goal", "warning");
      return;
    }

    if (emptyString(venue)) {
      notify("Please enter a valid venue name", "warning");
      return;
    }

    if (emptyString(show_title)) {
      notify("Please enter a valid show title", "warning");
      return;
    }

    if (emptyString(date_to_throw) || !correctDateFormat(date_to_throw)) {
      notify("Please enter a valid throw date", "warning");
      return;
    }

    if (emptyString(image)) {
      console.log("This is the image: ", image)
      notify("Please enter a proper image url for the campaign thumbnail", "warning");
      return;
    }

    if (emptyString(video)) {
      notify("Please enter a valid video url for the campaign page", "warning");
      return;
    }

    //Remove any commas in the goal amount
    goal = goal.replace (/,/g, "");

    var today = new Date().getTime();
    var creator = Meteor.user()._id;

    console.log("This is the current user: ", Meteor.user());
    console.log("This is the creator id: " ,creator);
    
    //Create the campaign
    var campaign = {
      show_title : show_title,
      artist : artist,
      venue : venue,
      date_to_throw : date_to_throw,
      goal : goal,
      image: image,
      video: video, 
      date_created: today, 
      creator: creator,
      funded_so_far: 0,
      description: description,
      ticket_price: ticket_price
    };
    
    var _id = Campaigns.insert(campaign, function(err) {
      if (err) {
        throw new Error("There was an error inserting a campaign into the campaigns collection");
      }
    });

    console.log(JSON.stringify(campaign));
    notify("Campaign successfully submitted! Rock on. Here's your campaign page.")

    Router.go("campaign",{_id: _id});
  } 
})