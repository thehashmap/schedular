const schedule = require('node-schedule');

const scheduleList = [
	{
		"text": "textOne",
		"dateTime": "2022-03-28T23:38:00.000+05:30"
    },
    {
		"text": "textTwo",
		"dateTime": "2022-03-28T23:39:00.000+05:30"
    },
    {
		"text": "textThree",
		"dateTime": "2022-03-28T23:40:00.000+05:30"
    },
    {
		"text": "textFour",
		"dateTime": "2022-03-28T23:41:00.000+05:30"
    },
    {
		"text": "textFive",
		"dateTime": "2022-03-28T23:42:00.000+05:30"
    },
    {
		"text": "textSix",
		"dateTime": "2022-03-28T23:43:00.000+05:30"
    },
    {
		"text": "textSeven",
		"dateTime": "2022-03-28T23:44:00.000+05:30"
    },
    {
		"text": "textEight",
		"dateTime": "2022-03-28T23:45:00.000+05:30"
    },
    {
		"text": "textNine",
		"dateTime": "2022-03-28T23:46:00.000+05:30"
    },
    {
		"text": "textTen",
		"dateTime": "2022-03-28T23:47:00.000+05:30"
    }
]

function trigger(text, dateTime) {
    let size = text.length;
    let reverseText = text.split("").reverse().join("");
    let scheduledTime = new Date(dateTime);
    schedule.scheduleJob(scheduledTime, () => {
        setTimeout(function() {
            console.log(reverseText);
        }, 1000 * size);
    })
}

scheduleList.forEach((item,index) => {
    trigger(item.text,item.dateTime);
});
