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