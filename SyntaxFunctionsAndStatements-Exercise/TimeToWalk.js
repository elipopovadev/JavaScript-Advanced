function calculateTime(steps, stepsLengthInmeters, speedInKmPerHour ){
    const timeForOneBreak = 500;
    let speedInMetersInSecond = speedInKmPerHour * (1000 / 3600);
    let distanceInMeters = steps * stepsLengthInmeters;   
    let numberOfBreaks = Math.floor(distanceInMeters / timeForOneBreak);
    let timeForBreaksInSeconds = numberOfBreaks * 60;
    let totalTimeInSeconds = Math.round((distanceInMeters / speedInMetersInSecond ) + timeForBreaksInSeconds);
    let totalTimeInMinutes = totalTimeInSeconds / 60; 

    let hours = Math.floor(totalTimeInMinutes / 60); // hours
    let minutes = Math.floor(totalTimeInMinutes % 60); // minutes
    let seconds = Math.round((totalTimeInMinutes - minutes) * 60); // seconds  

console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes+ ":" + (seconds < 10 ? "0" : "") + seconds);
}

calculateTime(4000, 0.60, 5)