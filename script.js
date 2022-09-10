
let container = document.querySelector(".container")
let button = document.querySelector(".saveBtn")


let time = moment();  //sets current time of day 
$("#currentDay").text(time.format('MMMM Do YYYY, HH:mm:ss a'));



function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
      
        $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm:ss a'));
  
     
  
    }, 1000);
  }

  setTime();



  // try to save  just one text  to local storage 
 
  //only save for 1 box at a time via event.target // event delgation- text area 
//if present time color = red
//if past color = white
// if future color = green 
  

  $(".saveBtn").on("click", function(){ // saves what is in the text area to local storage 
    let text = $(this).siblings('textarea').val();
    let time = $(this).siblings('div').text();
    localStorage.setItem(time, text)
    
    console.log(text)
    })
    

$("#textarea-9").text(localStorage.getItem(09))