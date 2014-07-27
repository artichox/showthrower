PledgeSchema = new SimpleSchema({
    user_id:{
        type:String,    //The id of the user who made this pledge
        optional:false
    },
    num_tickets_pledged:{
        type:Number,    //The number of tickets the user pledged to the campaign
        optional:false
    },
    date_pledged: {
      type: String,     //The timestamp for the date this pledge was made
      optional:false
    },
    campaign_id: {
      type: String,     //The id of the campaign the user pledged to
      optional:false
    }
  });

Pledges.attachSchema(PledgeSchema);



