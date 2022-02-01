export default function timeSince(timeStamp) {
    try {
        var now = new Date(),
            secondsPast = (now.getTime() - timeStamp) / 1000;
        if (secondsPast < 60) {
            return parseInt(secondsPast) + 's';
        }
        if (secondsPast < 3600) {
            return parseInt(secondsPast / 60) + 'm';
        }
        if (secondsPast <= 86400) {
            return parseInt(secondsPast / 3600) + 'h';
        }
        if (secondsPast > 86400) {
            let day = timeStamp.getDate();
            let month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
            let year = timeStamp.getFullYear() === now.getFullYear() ? "" : " " + timeStamp.getFullYear();
            return day + " " + month + year;
        }
    } catch(e) {
        console.log('timeSince function error: ' + e)
    }

    // To get the current date:
    // const currentTimeStamp = new Date().getTime();

    // Test out the function
    // console.log(timeSince(1640385590740))

    // Last updated
    // let hourAndMinute = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
};