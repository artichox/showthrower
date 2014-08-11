Template.campaign.events({
  'click #complete_pledge': function(e, t) {
    e.preventDefault();

    var tickets_pledged = t.find('#numtickets').value;

    if(!isNumeric(tickets_pledged)) {
      Session.set("info_message", "Please enter the number of tickets you would like to pledge");
      Session.set("alert_level", "warning");
    }

    var timestamp = new Date().getTime();
    var userID = Meteor.user()._id;

    var pledge = Pledges.insert({
      user_id: userID, 
      date_pledged: timestamp, 
      campaign_id: this. _id,
      num_tickets_pledged: tickets_pledged
    });
  }
})