//global output string
var output = ""
//make array containing the data
//data is already in ascending order
const parkData = [109, 119, 121, 142, 154, 191, 195, 212, 215, 270];
//measurements reused
var sum, minimum, maximum, median, mean;

//show statistics is clicked
function showStatistics()
{
    //output raw data
    output += "The numbers of state parks in the ten states with the most are:<br/>";
    parkData.forEach(element => {
        output += element + ", "
    });
    output += "<br/><br/>";

    //calculate measures of center
    output += "Measures of Center:<br/>";
    measuresCenter();

    //calculate measures of spread
    output += "Measures of Spread:<br/>";
    measuresSpread();

    //calculate measures of position
    output += "Measures of Position:<br/>";
    measuresPosition();

    document.getElementById("output").innerHTML = output;
}

function measuresCenter()
{
    //calculate mean
    //get sum of values
    sum = 0;
    parkData.forEach(element => {
        sum = sum + element;
    });
    //divide sum by number of terms for mean
    mean = sum/parkData.length;
    output += "The mean number is: " + mean + "<br/>";
    
    //calculate median 
    //take the average of the two middle numbers
    median = (parkData[parkData.length / 2] + parkData[parkData.length / 2 - 1]) / 2;
    output += "The median number is: " + median + "<br/>";
    
    //calculate mode
    var modeValue = 0;
    var maxCount = 1, i, j;
    //loop through values
    for (i = 0; i < parkData.length; ++i) {
        var count = 0;
        for (j = 0; j < parkData.length; ++j) {
            if (parkData[j] == parkData[i]){++count};
        }
        //value is mode if count is higher than previous max
        if (count > maxCount) {
            maxCount = count;
            modeValue = parkData[i];
        }
    }
    //output
    if (modeValue == 0) {
        output += "There is no mode<br/>";
    }
    else{
        output += "The mode is: " + modeValue + "<br/>"; 
    }
    
    //Calculate midrange
    //find max and min values
    //array is sorted so find first and last
    minimum = parkData[0];
    maximum = parkData[parkData.length - 1];
    var midrange = (minimum + maximum) / 2;
    output += "The midrange is: " + midrange + "<br/><br/>";
}

function measuresSpread()
{
    //calculate range, maximum - minimum
    var range = maximum - minimum;
    output += "The range is: " + range + "<br/>";
   
    //calculate variance
    //find the sum of f(x - mean)^2
    var varianceSumBeforeDivision = 0;
    parkData.forEach(element => {
        varianceSumBeforeDivision = varianceSumBeforeDivision + Math.pow((element - mean), 2);
    });
    //divide by number of terms minus 1
    var variance = varianceSumBeforeDivision / (parkData.length - 1);
    output += "The variance is: " + variance + "<br/>";
     
    //calculate standard deviation
    //take square root of variance
    var standardDeviation = Math.sqrt(variance);
    output += "The standard deviation is: " + standardDeviation + "<br/><br/>"; 
}

function measuresPosition()
{
    //mimimum, lower quartile, median, upper quartile, and maximum
        //output minimum
        output += "The minimum is: " + minimum + "<br/>";
        
        //find lower quartile
        const bottomOfData = new Array();
        //get bottom half of data
        var i;
        for(i = 0; i < parkData.length / 2; i++){
            bottomOfData[i] = parkData[i];
        }
        //find median of bottom half
        var lowerQ = bottomOfData[(bottomOfData.length/2) - .5];
        output += "The lower quartile is: " + lowerQ + "<br/>";
        
        //output median
        output += "The median is: " + median + "<br/>";
        
        //find upper quartile
        const topOfData = new Array();
        //get top half of data
        for( i = 5; i < parkData.length; i++){
            topOfData[i - 5] = parkData[i];
        }
        //find median of top half
        var upperQ = topOfData[(topOfData.length/2) - .5];
        output += "The upper quartile is: " + upperQ + "<br/>";
        
        //output maximum
        output += "The maximum is: " + maximum + "<br/><br/>";
}