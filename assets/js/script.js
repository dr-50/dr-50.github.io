// NavBar
function openNav() {
    document.getElementById("mySidepanel").style.width = "375px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  window.addEventListener('click', function(e){
    if (!document.getElementById('mySidepanel').contains(e.target) && (!document.getElementById('openbtn').contains(e.target))){
    document.getElementById("mySidepanel").style.width = "0";
  } 
  })
  // End NavBar

  //display color change
  var timelineItem = document.getElementsByClassName("timeline-item");
  var resumeDownload = document.getElementsByClassName("resume-download");
 
  function darkDisplay(){
      
      document.body.classList.remove("colorful-display-color");
      document.body.classList.add("dark-display-color");
      $(timelineItem).removeClass("timeline-colorful-display");
      $(timelineItem).addClass("timeline-dark-display");
      $(resumeDownload).addClass("dark-display-color");
  }

  function colorfulDisplay(){
      document.body.classList.remove("dark-display-color");
      document.body.classList.add("colorful-display-color");
      $(timelineItem).removeClass("timeline-dark-display");
      $(timelineItem).addClass("timeline-colorful-display");
      $(resumeDownload).addClass("dark-display-color");
  }