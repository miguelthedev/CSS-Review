var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal button');

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('open');     
    backdrop.style.display = 'block';
    setTimeout(() => {
      backdrop.classList.add('open');       
    }, 10);
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
  if(modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(function() {
    backdrop.style.display = 'none';     
  }, 200);
}

toggleButton.addEventListener('click', function(e) {
  backdrop.style.display = 'block';
  mobileNav.classList.add('open');      
  setTimeout(function() {
    backdrop.classList.add('open');
  }, 10)
});