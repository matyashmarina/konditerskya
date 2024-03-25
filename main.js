

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var name = document.querySelector('#name').value;
  var tel = document.querySelector('#tel').value;
  var choice = document.querySelector('#choice').value;
  
  alert('Name: ' + name + '\nTel: ' + tel + '\nChoice: ' + choice);
});

