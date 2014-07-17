CampaignSchema = new SimpleSchema({

    show_title:{
        type:String,
        optional:false
    },
    artist:{
        type:String,    //This will be the ID of an artist object
        optional:false
    },
    venue:{
        type:String,    //This will be the ID of a venue object
        optional:false
    },
    links:{             //These are links to soundcloud/etc
        type:[String],  //This is an array of url strings 
        optional:true
    },

    date_to_throw:{     //The date that this campaign will take place
        type:String,    //String of the format mm/dd/yyyy
        optional:false
    },
    goal:{
        type:Number,    //This will be the ID of the associated goal object
        optional:false
    },
    video:{             //This is a video link to display
        type:String,
        optional:true
    },
    image:{             //This is an image url to display, if no video is provided
        type:String,
        optional:true
    },
    date_created:{
        type:String,    //This is the UTC date
        optional:false
    },
    creator:{           //This is the ID of the user object of the person who created this campaign
        type:String,
        optional:false
    },
    pledges:{           //This will be an array of pledge object IDs made so far
        type:String,
        optional:true
    },
    followers:{         //This will be an array of user objects who are following this campaign
        type:String,
        optional:true
    },
    funded_so_far: {
        type: Number,
        optional: false
    },
    description: {          //This is a summary/description of the campaign
        type: String, 
        optional:true
    },
    ticket_price: {
        type: Number,
        optional:true
    }
});

Campaigns.attachSchema(CampaignSchema);

Campaigns.helpers({
    days_to_go: function(){
        return 21;
    },

    percent_funded: function(){
        return 55;
    },

    num_backers: function(){
        if(!isDefined(this.pledges))
            return 0;
        
        return this.pledges.length;
    }
})
