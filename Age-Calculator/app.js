const container = document.querySelector('.container');
const error = document.querySelector('.error');
const years = document.getElementById('years')
const months = document.getElementById('months')
const days = document.getElementById('days')


function getAge() {
    container.style.backgroundColor = '#ffffff';
    error.style.display = "none";
    const dob = document.getElementById('dob');
    const dobVal = dob.value;
    const dobSep = dobVal.split('-');
    const myYear = dobSep[0];
    const myMonth = dobSep[1];
    const myDay = dobSep[2];

    calcAge(myYear, myMonth, myDay);
}

function calcAge(myYear, myMonth, myDay) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    // Case 1: DOB is Today
    if (currentYear >= myYear && currentMonth == myMonth && currentDay == myDay) {
        container.style.backgroundColor = 'red';
        error.style.display = "block";
        displayAge(0, 0, 0);
        return;
    }
    // Case 2: In DOB day is always less than today
    if (currentYear >= myYear && currentMonth >= myMonth && currentDay >= myDay) {
        let ansYear = currentYear - myYear;
        let ansMonth = currentMonth - myMonth;
        let ansDay = currentDay - myDay;
        displayAge(ansYear, ansMonth, ansDay);
    }
    // Case 3: In DOB current day is  less than DOB
    if (currentYear >= myYear && currentMonth >= myMonth && currentDay < myDay) {
        currentMonth = currentMonth - 1;
        currentDay = currentDay + 30;
        let ansYear = currentYear - myYear;
        let ansMonth = currentMonth - myMonth;
        let ansDay = currentDay - myDay;
        displayAge(ansYear, ansMonth, ansDay);
    }

    // Case 4: In DOB current month and day are less than DOB
    if (currentYear >= myYear && currentMonth < myMonth && currentDay <= myDay) {
        currentMonth = currentMonth - 1;
        currentDay = currentDay + 30;
        currentYear = currentYear - 1;
        currentMonth = currentMonth + 12;
        let ansYear = currentYear - myYear;
        let ansMonth = currentMonth - myMonth;
        let ansDay = currentDay - myDay;
        displayAge(ansYear, ansMonth, ansDay);
    }
    //Case 5: In DOB current month is less than DOB and current day is greater than DOB
    if (currentYear >= myYear && currentMonth < myMonth && currentDay > myDay) {
        currentYear = currentYear - 1;
        currentMonth = currentMonth + 12;
        let ansYear = currentYear - myYear;
        let ansMonth = currentMonth - myMonth;
        let ansDay = currentDay - myDay;
        displayAge(ansYear, ansMonth, ansDay);
    }
}

function displayAge(year, month, day) {
    years.innerText = year;
    months.innerText = month;
    days.innerText = day;
    return;
}

