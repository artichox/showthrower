
Pledges.helpers({
  campaignTitle: function(){
    if(!isDefined(this.campaign_id))
      return "";

    var campaign = Campaigns.findOne({_id: this.campaign_id});
    
    if(!isDefined(campaign))
      return "";

    return campaign.showTitle();
  },

  ticketsPledged: function(){
    if(!isDefined(this.num_tickets_pledged))
      return {ticket_price: "", num_tickets: 0};

    var campaign = Campaigns.findOne({_id: this.campaign_id});
    
    if(!isDefined(campaign))
      return {ticket_price: "", num_tickets: 0};

    return {ticket_price: campaign.ticketPrice(), num_tickets: this.num_tickets_pledged};
  },

  datePledged: function(){
    if(!isDefined(this.date_pledged))
      return "";

    var date = moment(this.date_pledged);

    return date.format("dddd, MMMM Do YYYY");
  },

})