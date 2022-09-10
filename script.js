
let container = document.querySelector(".container")
let button = document.querySelector(".saveBtn")


let time = moment();
$("#currentDay").text(time.format('MMMM Do YYYY, HH:mm:ss a'));



function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
      
        $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm:ss a'));
  
     
  
    }, 1000);
  }

  setTime();



  // try to save  just one text  to local storage 
  // local storage = string from data-id!!!
  //only save for 1 box at a time via event.target // event delgation- text area 

  

container.addEventListener("click", function(event){

    if(event.target.matches(".saveBtn")){
        console.log(".container")
    }



} )