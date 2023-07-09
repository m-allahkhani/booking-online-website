
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
      var data = {
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_num,
        email: email,
        password: password1,
        address: adddress,
        birthday: birthday,
      };

      //  request to the backend using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/your/backend/endpoint/", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
          } else {
          showToast("Error "+ xhr.status+"Please try again")
          }
        };
        xhr.send(JSON.stringify(data));
      
    } else {
     
      showToast('Please fill the form again.');
    }
  });
});
