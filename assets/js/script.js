//Current season

  //Set calendar slider to current month
document.getElementById("cal").value=new Date().getMonth()

function calSliderVisibility(){
  if(document.getElementById("cal").style.display !== 'flex'){
    document.getElementById("calMonths").style.display='flex';
    document.getElementById("cal").style.display='flex';
    window.scrollTo(0,document.body.scrollHeight);
  }else {
  document.getElementById("cal").style.display = 'none';
  document.getElementById("calMonths").style.display='none';
  }
}


function calSlideFunction(){
  var calSelector = document.getElementById("cal").value;
  console.log(calSelector);

switch (true){
  case (calSelector==0):
    document.body.removeAttribute("class");
    console.log("New Years")
    break;
  case (calSelector==1):
    document.body.removeAttribute("class");
    console.log("Feb")
    break;
  case (calSelector==2):
    document.body.removeAttribute("class");
    console.log("Shamrock")
    document.body.classList.add("march")
    break;
  case (calSelector==3):
    document.body.removeAttribute("class");
    console.log("April")
    break;
  case (calSelector==4):
    document.body.removeAttribute("class");
    console.log("May")
    //Check for May 4 -> set to starwars theme
    // if (new Date().getDate()==4){
    //   document.body.classList.add("may4th")
    // } else {
    document.body.classList.add("may")
    // }
    break;
  case (calSelector==5):
    document.body.removeAttribute("class");
    console.log("June")
    break;
  case (calSelector==6):
    document.body.removeAttribute("class");
    console.log("July")
    break;
  case (calSelector==7):
    document.body.removeAttribute("class");
    console.log("Aug")
    break;
  case (calSelector==8):
    document.body.removeAttribute("class");
    console.log("Sep")
    break;
  case (calSelector==9):
    document.body.removeAttribute("class");
    console.log("Oct")
    document.body.classList.add("october")
    break;
  case (calSelector==10):
    document.body.removeAttribute("class");
    console.log("Nov")
    break;
  case (calSelector==11):
    document.body.removeAttribute("class");
    console.log("Dec")
    break;
}
}

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

  // biography

  function setupTabs() {
    document.querySelectorAll('.tabs__button').forEach(button => {
        button.addEventListener('click', () =>{
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab=${tabNumber}`)

            console.log(sideBar)
            console.log(tabsContainer)
            console.log(tabNumber)
            console.log(tabToActivate)
            sideBar.querySelectorAll('.tabs__button').forEach(button => {
                button.classList.remove('tabs__button--active');
            })

            tabsContainer.querySelectorAll('.tabs__content').forEach(button => {
                button.classList.remove('tabs__content--active');
            })
            button.classList.add('tabs__button--active');
            tabToActivate.classList.add('tabs__content--active')
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs()
})