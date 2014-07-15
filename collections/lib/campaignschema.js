Schema.CampaignSchema = new SimpleSchema({

    show-title:{
        type=String,
        optional=false
    },
    artist:{
        type=String,    //This will be the ID of an artist object
        optional=false
    },
    venue:{
        type=String,    //This will be the ID of a venue object
        optional=false
    },
    links:{             //These are links to soundcloud/etc
        type=[String],  //This is an array of url strings 
        optional=false
    }
    date_to_throw:{     //The date that this campaign will take place
        type=Date,      
        optional=false
    },
    goal:{
        type=String,    //This will be the ID of the associated goal object
        optional=false
    },
    video:{             //This is a video link to display
        type=String,
        optional=true
    },
    image:{             //This is an image url to display, if no video is provided
        type=String,
        optional=true
    },
    date_created:{
        type=String,    //This is the UTC date
        optional=false
    },
    creator:{           //This is the ID of the user object of the person who created this campaign
        type=String,
        optional=false
    },
    pledges:{           //This will be an array of pledge object IDs made so far
        type=String,
        optional=false
    },
    followers:{         //This will be an array of user objects who are following this campaign
        type=String,
        optional=false
    },

});

Campaigns.attachSchema(Schema.CampaignSchema);
