PledgeSchema = new SimpleSchema({
    user_id:{
        type:String,    //The id of the user who made this pledge
        optional:false
    },
    amount_pledged:{
        type:Number,    //The amount of money pledged to this campaign
        optional:false
    },
    date_pledged: {
      type: String,     //The date this pledge was made
      optional:false
    },
    campaign_id: {
      type: String,     //The id of the campaign
      optional:false
    }
  });

Pledges.attachSchema(PledgeSchema);

Pledges.helpers({

})


