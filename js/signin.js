
function isValid(password1, password2, email, phone_num,first_name,last_name,adddress,birthday) {
  return password1.trim() !== '' && password2.trim() !== '' && password1 === password2 
          && email.trim() !== '' && phone_num.trim() !== ''&& first_name.trim() !== ''
          && last_name.trim() !== ''&& adddress.trim() !== ''&& birthday.trim() !== '';
}

function showToast(message) {
  document.querySelector(".toast").innerHTML = '<p>'+message+'</p>';
  document.querySelector('.toast').style.display = 'block';
  setTimeout(function() {
    document.querySelector(".toast").style.display = 'none';
  }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#submitBtn').addEventListener('click', function() {

    var password1 = document.querySelector('#password1').value;
    var password2 = document.querySelector('#password2').value;
    var email = document.querySelector('#email').value;
    var phone_num = document.querySelector('#phone').value;  
    var first_name = document.querySelector('#firstName').value;
    var last_name = document.querySelector('#lastName').value;
    var adddress = document.querySelector('#adddress').value;
    var birthday = document.querySelector('#birthday').value;
    if (isValid(password1, password2, email, phone_num,first_name,last_name,adddress,birthday)) {
      // document.body.style.backgroundColor = 'pink';
   
      // do the login stuff
    } else {
      // document.body.style.backgroundColor = 'red';
      showToast('Something is wrong. Please fill the form again.');
    }
  });
});
