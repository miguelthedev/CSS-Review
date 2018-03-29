var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal button');

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function(e) {
    e.preventDefault();
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  });
};

backdrop.addEventListener('click', function() {
  mobileNav.style.display = 'none';
  closeModal();
});

noButton.addEventListener('click', closeModal);

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display =  'none';
}

toggleButton.addEventListener('click', function(e) {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});

// mobileNav.addEventListener('click', function(e) {
//   this.style.display = 'none';
// });