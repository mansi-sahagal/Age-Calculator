document.getElementById('sub_btn').addEventListener('click', function() {
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('date').value);
    let year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter a valid date.");
        return;
    }

    let today = new Date();
    let birthDate = new Date(year, month - 1, day);

    // Calculate the difference in years, months, and days
    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - birthDate.getMonth();
    let ageDay = today.getDate() - birthDate.getDate();

    // Adjust for negative values in month and day
    if (ageDay < 0) {
        ageMonth--;
        ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // get the number of days in the last month
    }
    
    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }

    // Update the output fields
    document.getElementById('sp_year').innerText = ageYear;
    document.getElementById('sp_month').innerText = ageMonth;
    document.getElementById('sp_day').innerText = ageDay;
});