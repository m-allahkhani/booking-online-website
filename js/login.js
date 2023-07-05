function isValid(username, password) {
  return username.trim() !== '' && password.trim() !== '';
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
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;

    if (isValid(username, password)) {
      // document.body.style.backgroundColor = 'pink';
      alert('Form submitted successfully!');
      // do the login stuff
    } else {
      showToast('Invalid username or password');
      // document.body.style.backgroundColor = 'red';
    }
  });
});
