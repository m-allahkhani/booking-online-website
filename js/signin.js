function isValid(
  password1,
  password2,
  email,
  phone_num,
  first_name,
  last_name,
  adddress,
  birthday
) {
  return (
    password1.trim() !== "" &&
    password2.trim() !== "" &&
    password1 === password2 &&
    email.trim() !== "" &&
    phone_num.trim() !== "" &&
    first_name.trim() !== "" &&
    last_name.trim() !== "" &&
    adddress.trim() !== "" &&
    birthday.trim() !== ""
  );
}

function showToast(message) {
  document.querySelector(".toast").innerHTML = "<p>" + message + "</p>";
  document.querySelector(".toast").style.display = "block";
  setTimeout(function () {
    document.querySelector(".toast").style.display = "none";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#submitBtn").addEventListener("click", function () {
    var password1 = document.querySelector("#password1").value;
    var password2 = document.querySelector("#password2").value;
    var email = document.querySelector("#email").value;
    var phone_num = document.querySelector("#phone").value;
    var first_name = document.querySelector("#firstName").value;
    var last_name = document.querySelector("#lastName").value;
    var adddress = document.querySelector("#adddress").value;
    var birthday = document.querySelector("#birthday").value;
    if (
      isValid(
        password1,
        password2,
        email,
        phone_num,
        first_name,
        last_name,
        adddress,
        birthday
      )
    ) {
      document.body.style.backgroundColor = 'pink';
      const params = new URLSearchParams();
      params.append("phone_num", phone_num);
      params.append("password1", password1);
      params.append("password2", password2);
      

      //coment
      var apiUrl = "http://your-api-url.com?" + params.toString()+"enspoint string";
      fetch(apiUrl)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(function (data) {
          // document.querySelector("#form_toast").innerHTML = (
          //   <p> +"Reserve Successfully!"+ </p>
          // );
          // document.querySelector("#form_toast").style.backgroundColor = "green";
          // document.querySelector("#form_toast").style.display = "block";
          // setTimeout(function () {
          //   document.querySelector("#form_toast").style.display = "none";
          //   document.querySelector("#form_toast").style.backgroundColor =
          //     "rgb(240, 78, 78)";
          // }, 6000);
          //  console.log(data);

          showToast("login successful!");
          // window.location.href = "first.html";
        })
        .catch(function (error) {
          showToast(error);
        });
      //coment

      //coment
      // document.querySelector("#form_toast").innerHTML = (
      //   <p> +"Reserve Successfully!"+ </p>
      // );
      // document.querySelector("#form_toast").style.backgroundColor = "green";
      // document.querySelector("#form_toast").style.display = "block";
      // setTimeout(function () {
      //   document.querySelector("#form_toast").style.display = "none";
      //   document.querySelector("#form_toast").style.backgroundColor =
      //     "rgb(240, 78, 78)";
      // }, 6000);
      //  console.log(data);
      // window.location.href = "first.html";
      //coment
      showToast("1111");
      

    } else {
      showToast("Please fill the form again.");
      
    }
  });
});
