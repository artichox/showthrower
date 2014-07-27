Campaigns.helpers({

    timeLeft: function() {
        var timeFromNow = moment(this.date_to_throw).fromNow();
        var parsed = timeFromNow.split(" ");
        var number = parsed[1];
        var unit = parsed[2];
        return {number: number, unit: unit}; 
    },

    percentFunded: function() {
        return 55;
    },

    numBackers: function() {
        if(!isDefined(this.pledges))
            return 0;
        
        return this.pledges.length;
    },

    showTitle: function() {
        return this.show_title;
    },

    dateToThrow: function() {
        var date = this.date_to_throw;
        var parts = date.split("/");
        var day = parts[1];
        var month = getMonth(parseInt(parts[0]));
        var year = parts[2];
        return month + " " + day + ", " + year;
    },

    fundedSoFa: function() {
        return this.funded_so_far;
    }
})

/**************************** HELPERS ***********************************/

var getMonth = function(number) {
    switch(number){
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default: 
            throw new Error("Invalid month number: ", number);

    }
}