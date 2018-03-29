var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal button');

// backdrop.style.display = 'block';
// modal.style.display = 'block';

for(var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function(e) {
    e.preventDefault();
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  });
};

noButton.addEventListener('click', function(e) {
  backdrop.style.display = 'none';
  modal.style.display =  'none';
});

backdrop.addEventListener('click', function(e) {
  backdrop.style.display = 'none';
  modal.style.display =  'none';
});