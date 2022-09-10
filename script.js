
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
    

    $("#textarea-09").text(localStorage.getItem('09'))
    $("#textarea-10").text(localStorage.getItem('10'))
    $("#textarea-11").text(localStorage.getItem('11'))
    $("#textarea-12").text(localStorage.getItem('12'))
    $("#textarea-13").text(localStorage.getItem('13'))
    $("#textarea-14").text(localStorage.getItem('14'))
    $("#textarea-15").text(localStorage.getItem('15'))
    $("#textarea-16").text(localStorage.getItem('16'))
    $("#textarea-17").text(localStorage.getItem('17'))

  