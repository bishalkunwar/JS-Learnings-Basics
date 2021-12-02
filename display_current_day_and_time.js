const dateAndTime = async() => {

    try {
        const today = new Date();
        const day = today.getDay;
        const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        console.log(`Today is : ${daylist[day]}.`);

        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        let prepand = (hour >= 12) ? "PM" : "AM";
        hour = (hour >= 12) ? hour - 12 : hour; // if hour >= 12 then hour == hour -12 else hour == hour.

        if (hour === 0 && prepand === "PM") { // the case at hour++ at 12 where case of hour ==0
            if (minute === 0 && second === 0) { //the case at hour && minute && second === 0. PM
                hour = 12;
                prepand = 'Noon';
            } else {
                hour = 12;
                prepand = 'PM';
            }
        }

        if (hour === 0 && prepand === 'AM') {
            if (minute === 0 && second === 0) {
                hour = 12;
                prepand = 'Midnight';
            } else {
                hour = 12;
                prepand = 'AM';
            }
        }

        console.log(`Current Time is: ${hour} : ${minute} : ${second} :: ${prepand}`);
    } catch (err) {
        console.log(err);
        //return err;
    }
    //return;
};

console.log("Hello Man, What's up buddy");
dateAndTime();
//console.log(dateAndTime);
//console.log("Hello World" + dateAndTime());