var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal button');

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function(e) {
    e.preventDefault();
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';
    // modal.className = 'open' This overrides the class name
    backdrop.classList.add('open');
    modal.classList.add('open');
  });
};

backdrop.addEventListener('click', function() {
  mobileNav.classList.remove('open');
  closeModal();
});

if(noButton) {
  noButton.addEventListener('click', closeModal);
}

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display =  'none';
  backdrop.classList.remove('open');
  if(modal) {
    modal.classList.remove('open');
  }
}

toggleButton.addEventListener('click', function(e) {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
});