
let button = document.querySelector(".saveBtn")

let time = moment();  //sets current time of day 
$("#currentDay").text(time.format('MMMM Do YYYY, HH:mm:ss a'));

function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function () {

    $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm:ss a'));



  }, 1000);
}

setTime();

function timeSlotColorChange() {
  let currentTime = moment().hours()
  let timeBlock = $(".timeSlot")
  timeBlock.each(function () {
    let hour = parseInt($(this).attr("id"))
    if (hour === currentTime) {
      $(this).children(".col-10").attr("class", "present col-10")

    } else if (currentTime > hour) {
      $(this).children(".col-10").attr("class", "past col-10")

    } 
    else {
      $(this).children(".col-10").attr("class", "future col-10")
    }
    
  })

}      

timeSlotColorChange();


$(".saveBtn").on("click", function () { // saves what is in the text area to local storage 
  let text = $(this).siblings('textarea').val();
  let time = $(this).siblings('div').text();
  localStorage.setItem(time, text)

  console.log(text)
})


$("#textarea-09").text(localStorage.getItem('09'))
$("#textarea-10").text(localStorage.getItem('10'))
$("#textarea-11").text(localStorage.getItem('11'))
$("#textarea-12").text(localStorage.getItem('12'))
$("#textarea-13").text(localStorage.getItem('13'))
$("#textarea-14").text(localStorage.getItem('14'))
$("#textarea-15").text(localStorage.getItem('15'))
$("#textarea-16").text(localStorage.getItem('16'))
$("#textarea-17").text(localStorage.getItem('17'))

