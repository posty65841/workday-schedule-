




let time = moment();
$("#currentDay").text(time.format('MMMM Do YYYY, HH:mm:ss a'));



function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
      
        $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm:ss a'));
  
     
  
    }, 1000);
  }

  setTime();

