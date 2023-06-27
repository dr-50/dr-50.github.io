
// About Me (biography/bio) activate/inactivate past/current/future buttons
function bioActivate(event) {
  
  //remove active class from paragraphs
  var elements = document.querySelector('.details-card').querySelectorAll('.active');
  [].forEach.call(elements, function(els){
    els.classList.remove('active')
  });
  //add active class to selected
  selectedValue = event.target.innerHTML
  activeParagraph = document.getElementsByClassName(selectedValue);
  activeParagraph[0].className += ' active'

  //remove active class from buttons
  var elems = document.querySelector('.bio-nav-cards').querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  //add active class to selected button
  event.target.className += ' active';
  

}


//page navigation activate/inactive aboutme/portfoio/contactme/resume
function navActivate(element){




  //remove active class from button
  var elements = document.querySelector('.nav-cards').querySelectorAll('.active');
  [].forEach.call(elements, function(els){
    els.classList.remove('active')
  })
  
  //add active class to button
  event.target.className += ' active'


    //remove active class from detail-card body(switch view from nav)
    var elems = document.querySelectorAll('.details-card');
    [].forEach.call(elems, function(el){
      el.classList.remove('active')
    })
    //add active class to selected nav (switch view from nav)
    //used a switch to identify button clicked id and align with order of expected results. Enhancements needed to increase logic ere
    var el = element.id
    console.log(el)
    switch(el){
      case "1":
        //since getElementsByClassName returns a collection of elements must included [0]
        document.getElementsByClassName("details-card bio")[0].className += ' active';
        break;
      case "2":
  
        document.getElementsByClassName("details-card portfolio")[0].classList += ' active';
        break;
      case "3":
        document.getElementsByClassName("details-card contact")[0].className += ' active';
  
        break;
      case "4":
        
        document.getElementsByClassName("details-card resume")[0].className += ' active';
        document.getElementById('resume-preview').contentWindow.location.reload();
  
    }

}


function copyContact(element){
  var copyText = element.previousElementSibling.innerHTML
  var copyTextLen = copyText.length
  navigator.clipboard.writeText(copyText.substring(2,copyTextLen))
}


// contact me dial functions
const dial = document.getElementById('dialContainer')

// dial.addEventListener(
//   "mouseenter",
//   (element) => {
//     console.log(element.target.querySelector('quarter'))
//     // highlight the mouseenter target
//     document.getElementById('dialValue').innerHTML = 'Changed'
//   }
// );

function dialSelectorPhone(){
    document.getElementById('dialValue').innerHTML = '920-493-8001'
} 

function dialSelectorEmail(){
    document.getElementById('dialValue').innerHTML = 'DevonRoss50@yahoo.com'
} 

function dialSelectorGit(){
    var dialValue = document.getElementById('dialValue')
    dialValue.innerHTML='';
    var a = document.createElement('a')
    a.setAttribute('href', 'https://github.com/dr-50/')
    a.innerHTML = 'https://github.com/dr-50/'
    dialValue.appendChild(a);
} 

function dialSelectorLinkedIn(){
    var dialValue = document.getElementById('dialValue')
    dialValue.innerHTML='';
    var a = document.createElement('a')
    a.setAttribute('href', 'https://www.linkedin.com/in/devon-ross-2ab446202/')
    a.innerHTML = 'https://www.linkedin.com/in/devon-ross-2ab446202/'
    dialValue.appendChild(a);
    // document.getElementById('dialValue').innerHTML = 'https://www.linkedin.com/in/devon-ross-2ab446202/'
} 
