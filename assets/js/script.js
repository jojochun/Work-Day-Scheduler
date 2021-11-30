// Display current day and time using moment.js
var timeNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(timeNow);
$("#currentDay").html(timeNow);

// load HTML  and CSS first
$(document).ready(function () {

    // get button, add eventListener to saveBtn. listen for input of text and time
    $(".saveBtn").on("click", function () {
        // get nearby values
        console.log(this);
        var text = $(this).siblings(".text-input").val();
        var time = $(this).parent().attr("id");

        // save to local storage
        localStorage.setItem(time, text);
    })

    // load data (if any) from localStorage for each hour of the day
    // repeat for all timeblocks
    $("#8-clock").children(".text-input").val(localStorage.getItem("8-clock"));
    $("#9-clock").children(".text-input").val(localStorage.getItem("9-clock"));
    $("#10-clock").children(".text-input").val(localStorage.getItem("10-clock"));
    $("#11-clock").children(".text-input").val(localStorage.getItem("11-clock"));
    $("#12-clock").children(".text-input").val(localStorage.getItem("12-clock"));
    $("#13-clock").children(".text-input").val(localStorage.getItem("13-clock"));
    $("#14-clock").children(".text-input").val(localStorage.getItem("14-clock"));
    $("#15-clock").children(".text-input").val(localStorage.getItem("15-clock"));
    $("#16-clock").children(".text-input").val(localStorage.getItem("16-clock"));
    $("#17-clock").children(".text-input").val(localStorage.getItem("17-clock"));



    // function to determine whether given timeblock is past, present or future
    // 2.  loop through timeblocks and compare to currentHour to determine if it's past, present or future

    $(".time-block").each(function () {

        currentTime = moment().format("HH")
        console.log(currentTime)
        var time = $(this).children(".hour").text()
        console.log(time)

        var timeFormat = moment(time, "hh:mma").format("HH")
        console.log(timeFormat)
        if (currentTime === timeFormat) {

            $(this).addClass("present")
        }
        else if (currentTime > timeFormat) {
            $(this).addClass("past")


        }
        else {

            $(this).addClass("future")
        }
    })
})
