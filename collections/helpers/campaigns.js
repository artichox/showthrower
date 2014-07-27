Campaigns.helpers({

    timeLeft: function() {
        if(!isDefined(this.date_to_throw))
            return {number: 0, unit: "days"};

        var timeFromNow = moment(this.date_to_throw).fromNow();
        var parsed = timeFromNow.split(" ");
        var number = parsed[1];
        var unit = parsed[2];
        return {number: number, unit: unit}; 
    },

    percentFunded: function() {
        if(!isDefined(this.funded_so_far) || !isDefined(this.goal))
            return 0;

        return this.funded_so_far / this.goal;
    },

    numBackers: function() {
        if(!isDefined(this.pledges))
            return 0;
        
        return this.pledges.length;
    },

    showTitle: function() {
        if(!isDefined(this.show_title))
            return "";

        return this.show_title;
    },

    dateToThrow: function() {
        if(!isDefined(this.date_to_throw))
            return "";

        var date = this.date_to_throw;
        var parts = date.split("/");
        var day = parts[1];
        var month = getMonth(parseInt(parts[0]));
        var year = parts[2];
        return month + " " + day + ", " + year;
    },

    fundedSoFar: function() {
        if(!isDefined(this.funded_so_far))
            return "";

        return "$" + numberWithCommas(this.funded_so_far);
    },

    getGoal: function() {
        if(!isDefined(this.goal))
            return "";

        return "$" + numberWithCommas(this.goal);
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