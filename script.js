
$(document).ready(function () {
    // button variables
    var clear = document.getElementById("clearbtn");
    var submit = document.querySelectorAll(".saveBtn");

    // current date variable
    var currentDay = moment().format("MMM-DD-YYYY");
    console.log(currentDay)

    // current time variable hr
    var currentTime = moment().format('H');
    var submit = document.querySelectorAll(".saveBtn");
    var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];


    // setting current day to the jumbotron
    $("#currentDay").text("Today is " + currentDay);


    // added callback function to clear the local storage to make a clean slate for the next day
    $(clear).on("click",function(){
        
        localStorage.clear()
    
    });



    //  code block to store data when pushing submit button
    $(submit).on("click", function () {
        var time = $(this).attr("data-time")
        var inputBox = $("#" + time);
        var details = inputBox.val();

        localStorage.setItem(time, details);

    });



    // function containing a for loop to grab from hours array and match up to the hour ID's
    // to get from local storage

    function latestInfo() {
        for (i = 0; i < hours.length; i++) {
            console.log(localStorage.getItem(hours[i]))
            $("#" + hours[i]).text(localStorage.getItem(hours[i]));
            
            // added class colors based on if statement 
            if (parseInt(hours[i]) == currentTime) {
                $("#" + hours[i]).addClass("present");
            }
            else if (parseInt(hours[i]) < currentTime) {
                $("#" + hours[i]).addClass("past");
            }
            else {
                $("#" + hours[i]).addClass("future");
            }
        };

    };

    latestInfo();


    // testing idea of using military time to avoid issue with comparing am/pm
    // 
    console.log(currentTime);
    console.log(parseInt("20") === currentTime);




});
