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
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);
     
       //coment
      // var apiUrl = "http://your-api-url.com?" + params.toString();
      // fetch(apiUrl)
      //   .then(function (response) {
      //     if (!response.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return response.json();
      //   }).then(function(response) {
      //     if (!response.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return response.json();
      //   })
      //   .then(function(data) {
      //     document.querySelector("#form_toast").innerHTML = <p> +"Reserve Successfully!"+ </p>
      //                   document.querySelector("#form_toast").style.backgroundColor = "green";
      //                   document.querySelector("#form_toast").style.display = "block";
      //                   setTimeout(function () { 
      //                   document.querySelector("#form_toast").style.display = "none";
      //                   document.querySelector("#form_toast").style.backgroundColor = "rgb(240, 78, 78)";
      //                   }, 6000);
      //    //  console.log(data);
      //    window.location.href = 'first.html'; 
      //   })
      //   .catch(function(error) {
      //     showToast(error);
      //   });
        //coment

     
      alert('Form submitted successfully!');
    
    } else {
      showToast('Invalid username or password');
      // document.body.style.backgroundColor = 'red';
    }
  });
});
