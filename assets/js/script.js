
// About Me (biography/bio) activate/inactivate
function bioActivate(event) {
  var elems = document.querySelector('.bio-nav-cards').querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  //add active class
  console.log(event.target.className)
  event.target.className += ' active';
  

  //remove active class from paragraphs
  var elements = document.querySelector('.details-card').querySelectorAll('.active');
  [].forEach.call(elements, function(els){
    els.classList.remove('active')
  });
  //add active class to selected
  selectedValue = event.target.innerHTML
  activeParagraph = document.getElementsByClassName(selectedValue);
  activeParagraph[0].className += ' active'

}

// function menuActivate(event){
//   var elms = document.querySelector('.details-card').querySelectorAll('.active');
//   [].forEach.call(elms, function(el) {
//     el.classList.remove('active');
//   });
//   event.target.class += active
// }