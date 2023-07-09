var companyLogos = {
  reilgostar: "css/t-img/railGostar.png",
  raja: "css/t-img/raja.png",
};
var mockData = [
  {
    name: "hotel1",
    stars: 5,
    breifAdd: "streetNum",
    fullAdd: "fu u  uuuuuuuu u l address",
    mainPhoto: "css/images.jfif",
    price: 1500000,
    facilty: ["free breakfast", "free launch", "dinner"],
    pictures: ["css/train.jpg", "css/flight.jpg", "css/hotel.jpg"],
  },
  {
    name: "vila",
    stars: 3,
    facilty: ["free brakfast", "swiming pool"],
    breifAdd: "streetNum",
    fullAdd: "fu u  uuuuuuuu u l address",
    mainPhoto: "css/images.jfif",
    price: 2100000,
    pictures: ["css/flight.jpg", "css/train.jpg", "css/hotel.jpg"],
  },
  // more mock ticket objects here...
];
function isValid(destination, checkIn, checkOut, adults, children, rooms) {
  return (
    checkIn.trim() !== "" &&
    destination.trim() !== "" &&
    checkOut.trim() !== "" &&
    adults.trim() !== "" &&
    rooms.trim() !== ""
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
  document
    .getElementById("searchbut")
    .addEventListener("click", function (event) {
      event.preventDefault(); // prevent the form from submitting

      var destination = document.getElementById("destination").value;
      var checkIn = document.getElementById("check-in").value;
      var checkOut = document.getElementById("check-out").value;
      var adults = document.getElementById("adults").value;
      var children = document.getElementById("children").value;
      var rooms = document.getElementById("rooms").value;

      if (!isValid(destination, checkIn, checkOut, adults, children, rooms)) {
        showToast("Something is wrong. Please fill the form again.");
      } else {
        //  var apiUrl = "http://your-api-url.com?input1=" + encodeURIComponent(origin) + "&input2=" + encodeURIComponent(destination)+
        //     "&input3=" + encodeURIComponent(depart)+ "&input4=" + encodeURIComponent(returnD)+ "&input5=" +
        //     encodeURIComponent(adults)+ "&input6=" + encodeURIComponent(children);
        //     fetch(apiUrl)
        //     .then(response => response.json())
        //     .then(data => {

        data = mockData;
        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";

        data.forEach(function (hotel) {
          var hotelDiv = document.createElement("div");
          hotelDiv.setAttribute("class", "ticket row");

          var logoDiv = document.createElement("div");
          logoDiv.setAttribute("class", "logo col-auto");

          var logoElement = document.createElement("img");
          logoElement.src = hotel.mainPhoto;
          logoElement.classList.add("img-fluid");
          logoDiv.appendChild(logoElement);

          var infoDiv = document.createElement("div");
          infoDiv.setAttribute("class", "info col");

          var detailsDiv = document.createElement("div");
          detailsDiv.setAttribute("class", "details d-flex flex-wrap");

          var nameElement = document.createElement("p");
          nameElement.textContent = hotel.name + "\u00A0";

          var addressElement = document.createElement("p");
          addressElement.textContent = hotel.breifAdd + "\u00A0";

          var starsNumElement = document.createElement("p");
          starsNumElement.textContent = hotel.stars + " stars";

          detailsDiv.appendChild(nameElement);
          detailsDiv.appendChild(addressElement);
          detailsDiv.appendChild(starsNumElement);

          infoDiv.appendChild(detailsDiv);

          var eDiv = document.createElement("div");
          eDiv.setAttribute("class", "d-flex align-items-center");

          var priceElement = document.createElement("p");
          priceElement.setAttribute("class", "price mr-2");
          priceElement.textContent = "Price: $" + hotel.price;

          var reserveButton = document.createElement("button");
          reserveButton.setAttribute("class", "reserve-button btn btn-success");
          reserveButton.textContent = "See and Reserve";

          reserveButton.addEventListener("click", function () {
            var newWindow = window.open("", "_blank");
            newWindow.document.write(
              "<html><head><script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.bundle.min.js'></script><script src='bootstrap-5.3.0-alpha3-dist/js/jquery-3.7.0.min.js'></script>" +
                "<script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js'></script>" +
                "<script src='https://code.jquery.com/jquery-3.6.0.min.js'></script><script src='jsdetailsH.js'>" +
                '</script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">' +
                "<link rel='stylesheet' href='bootstrap-5.3.0-alpha3-dist/css/bootstrap.min.css'><link rel='stylesheet' href='css/style2.css'><link rel='stylesheet' href='css/details.css'><title>Hotel Details</title></head>" +
                "<body>" +
                '<nav id="header-nav" class="navbar navbar-default">' +
                "<div class='container'>" +
                "<div class='navbar-header'>" +
                "<a href='first.html' class='visible-md visible-lg'>" +
                '<img id="logo-img" class="img-fluid visible-lg" src="' +
                "css/logo.jpg" +
                '"alt="logo-img">' +
                "</a>" +
                "</div>" +
                "<div class='navbar-brand '>" +
                "<h1>Online Reservation</h1>" +
                "</div>" +
                "</div>" +
                '<div id="header-menu">' +
                '<ul id="nav-list" class="nav navbar-nav">' +
                '<li> <a href="first.html"><p><i class="fa fa-home icon-3x"></i> <br class="hidden-xs"> HOME </p> </a></li>' +
                '<li> <a href="flight.html"><p><i class="fa fa-plane"></i><br class="hidden-xs"> FLIGHT</p></a></li>' +
                '<li><a href="train.html"><p><i class="fa fa-train"></i><br class="hidden-xs"> TRAIN</p></a></li>' +
                '<li><a href="hotel.html"><p><i class="fa fa-hotel"></i><br class="hidden-xs"> HOTEL</p></a></li>' +
                '<li><a href="suite.html"><p><i class="fa fa-building"></i><br class="hidden-xs"> SUITE</p></a></li>' +
                "</ul>" +
                "</div>" +
                "</nav>" +
                '<div id="main-content" class="container">' +
                "<h1 class='hotel-name'>" +
                hotel.name +
                "</h1>" +
                "<p class='hotel-address'>Address: " +
                hotel.fullAdd +
                "</p>" +
                "<p class='hotel-stars'>Stars: " +
                getStars(hotel.stars) +
                "</p>" +
                "<div id='carouselExampleControls' class='carousel slide' data-bs-ride='carousel'>" +
                "<div class='carousel-inner'>"
            );

            // Add carousel items for each picture in the hotel.pictures array
            for (var i = 0; i < hotel.pictures.length; i++) {
              newWindow.document.write(
                "<div id='image' class='carousel-item" +
                  (i === 0 ? " active" : "") +
                  "'>" +
                  "<img id='img-main' src='" +
                  hotel.pictures[i] +
                  "' class='d-block w-100' alt='Hotel Picture'>" +
                  "</div>"
              );
            }

            newWindow.document.write(
              "</div>" +
                "<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>" +
                "<span class='carousel-control-prev-icon' aria-hidden='true'></span>" +
                "<span class='visually-hidden'>Previous</span>" +
                "</button>" +
                "<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>" +
                "<span class='carousel-control-next-icon' aria-hidden='true'></span>" +
                "<span class='visually-hidden'>Next</span>" +
                "</button>" +
                "</div>"
            );

            // Add unordered list of facility
            newWindow.document.write("<h3>Facility :</h3>");
            newWindow.document.write("<ul class='facility-list'>");
            hotel.facilty.forEach(function (facility) {
              newWindow.document.write("<li>" + facility + "</li>");
            });
            newWindow.document.write("</ul>");

            newWindow.document.write(
              '<div class="col-12 d-flex justify-content-center">' +
                '<button id="submitBtn" type="submit" class="search">Reserve</button></div>'
            );
            newWindow.document.write("</body></html>");
            newWindow.document.close();

            newWindow.onload = function () {
              var submitBtn = newWindow.document.getElementById("submitBtn");

              submitBtn.addEventListener("click", function () {
                // newWindow.document.body.style.backgroundColor = "red";
                // newWindow.document.getElementById("main-content").innerHTML = "";
                var newWindow2 = window.open("", "_blank");
                newWindow2.document.write(
                  "<html><head><script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.bundle.min.js'></script><script src='bootstrap-5.3.0-alpha3-dist/js/jquery-3.7.0.min.js'></script>" +
                    "<script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js'></script>" +
                    "<script src='https://code.jquery.com/jquery-3.6.0.min.js'>" +
                    '</script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">' +
                    "<link rel='stylesheet' href='bootstrap-5.3.0-alpha3-dist/css/bootstrap.min.css'><link rel='stylesheet' href='css/style2.css'><link rel='stylesheet' href='css/enter.css'><link rel='stylesheet' href='css/details.css'><title>Hotel Details</title></head>" +
                    "<body>" +
                    '<nav id="header-nav" class="navbar navbar-default">' +
                    "<div class='container'>" +
                    "<div class='navbar-header'>" +
                    "<a href='first.html' class='visible-md visible-lg'>" +
                    '<img id="logo-img" class="img-fluid visible-lg" src="' +
                    "css/logo.jpg" +
                    '"alt="logo-img">' +
                    "</a>" +
                    "</div>" +
                    "<div class='navbar-brand '>" +
                    "<h1>Online Reservation</h1>" +
                    "</div>" +
                    "</div>" +
                    '<div id="header-menu">' +
                    '<ul id="nav-list" class="nav navbar-nav">' +
                    '<li> <a href="first.html"><p><i class="fa fa-home icon-3x"></i> <br class="hidden-xs"> HOME </p> </a></li>' +
                    '<li> <a href="flight.html"><p><i class="fa fa-plane"></i><br class="hidden-xs"> FLIGHT</p></a></li>' +
                    '<li><a href="train.html"><p><i class="fa fa-train"></i><br class="hidden-xs"> TRAIN</p></a></li>' +
                    '<li><a href="hotel.html"><p><i class="fa fa-hotel"></i><br class="hidden-xs"> HOTEL</p></a></li>' +
                    '<li><a href="suite.html"><p><i class="fa fa-building"></i><br class="hidden-xs"> SUITE</p></a></li>' +
                    "</ul>" +
                    "</div>" +
                    "</nav>" +
                    '<div id="main-content" class="container">' +
                    '<div class="toast" id="form_toast"></div>'
                );

                newWindow2.document.write('<div id="form-section">');

                for (let i = 0; i < adults; i++) {
                  newWindow2.document.write('<form class="form-div">');

                  newWindow2.document.write("<p>Adult</p>");
                  newWindow2.document.write('<div class="row">');
                  newWindow2.document.write('<div class="col-md-6">');
                  newWindow2.document.write(
                    '<input type="text" class="form-control" name="name" placeholder="name" required>'
                  );
                  newWindow2.document.write("</div>");
                  newWindow2.document.write('<div class="col-md-6">');
                  newWindow2.document.write(
                    '<input type="text" class="form-control" name="lastName" placeholder="last name" required>'
                  );
                  newWindow2.document.write("</div>");
                  newWindow2.document.write('<div class="col-md-6">');

                  newWindow2.document.write(
                    '<input type="text" class="form-control" name="birthday" onfocus="(this.type=\'date\')" onblur="(this.type=\'text\')" placeholder="Enter your birthday">'
                  );
                  newWindow2.document.write("</div>");
                  newWindow2.document.write('<div class="col-md-6">');
                  newWindow2.document.write(
                    '<input type="text" class="form-control" name="idNumber" placeholder="id number" required>'
                  );
                  newWindow2.document.write("</div>");
                  newWindow2.document.write('<div class="col-md-6">');
                  newWindow2.document.write(
                    '<select class="form-select" name="gender" required>'
                  );
                  newWindow2.document.write(
                    '<option value="">Select your gender</option>'
                  );
                  newWindow2.document.write(
                    '<option value="male">Male</option>'
                  );
                  newWindow2.document.write(
                    '<option value="female">Female</option>'
                  );
                  newWindow2.document.write("</select>");
                  newWindow2.document.write("</div>");
                  newWindow2.document.write("</div>");

                  newWindow2.document.write("</form>");
                }

                for (let i = 0; i < children; i++) {
                  newWindow2.document.write('<form class="form-div">');

                  newWindow2.document.write("<p>Child</p>");
                  newWindow2.document.write('<div class="row">');
                  newWindow2.document.write('<div class="col-md-6">');
                  newWindow2.document.write(
                    '<input type="text" class="form-control" name="name" placeholder="name" required>'
                  );
                  newWindow2.document.write("</div>");
                  newWindow2.document.write('<div class="col-md-6">');
                  newWindow2.document.write(
                    '<input type="text" class="form-control" name="lastName" placeholder="last name" required>'
                  );
                  newWindow2.document.write("</div>");
                  newWindow2.document.write('<div class="col-md-6">');

                  newWindow2.document.write(
                    '<input type="text" class="form-control" name="birthday" onfocus="(this.type=\'date\')" onblur="(this.type=\'text\')" placeholder="Enter your birthday">'
                  );
                  newWindow2.document.write("</div>");
                  newWindow2.document.write('<div class="col-md-6">');
                  newWindow2.document.write(
                    '<input type="text" class="form-control" name="idNumber" placeholder="id number" required>'
                  );
                  newWindow2.document.write("</div>");
                  newWindow2.document.write('<div class="col-md-6">');
                  newWindow2.document.write(
                    '<select class="form-select" name="gender" required>'
                  );
                  newWindow2.document.write(
                    '<option value="">Select your gender</option>'
                  );
                  newWindow2.document.write(
                    '<option value="male">Male</option>'
                  );
                  newWindow2.document.write(
                    '<option value="female">Female</option>'
                  );
                  newWindow2.document.write("</select>");
                  newWindow2.document.write("</div>");
                  newWindow2.document.write("</div>");

                  newWindow2.document.write("</form>");
                }
                newWindow2.document.write(
                  '<div class="col-12 d-flex justify-content-center">'
                );
                newWindow2.document.write(
                  '<button id="submitBtn" >Submit</button>'
                );
                newWindow2.document.write("</div>");
                newWindow2.document.write("</div>");
                newWindow2.document.write("<script>");
                newWindow2.document.write(
                  'document.getElementById("submitBtn").addEventListener("click", function(event) {'
                );
                newWindow2.document.write("event.preventDefault();");
                newWindow2.document.write("if (validateForm()) {");
                newWindow2.document.write("sendFormData();");
                newWindow2.document.write("}");
                newWindow2.document.write("});");

                newWindow2.document.write("function validateForm() {");
                newWindow2.document.write(
                  'const forms = document.getElementsByClassName("form-div");'
                );
                newWindow2.document.write(
                  "for (let i = 0; i < forms.length; i++) {"
                );
                newWindow2.document.write(
                  'const inputs = forms[i].getElementsByTagName("input");'
                );
                newWindow2.document.write(
                  'const select = forms[i].getElementsByTagName("select")[0];'
                );
                newWindow2.document.write(
                  "for (let j = 0; j < inputs.length; j++) {"
                );
                newWindow2.document.write(
                  'if (inputs[j].hasAttribute("required") && inputs[j].value === "") {'
                );

                newWindow2.document.write(
                  ' document.querySelector("#form_toast").innerHTML = "<p>" +"Please fill in all the required fields."+ "</p>";' +
                    'document.querySelector("#form_toast").style.display = "block";' +
                    "setTimeout(function () {" +
                    'document.querySelector("#form_toast").style.display = "none";' +
                    "}, 1000);"
                );

                newWindow2.document.write("return false;");
                newWindow2.document.write("}");
                newWindow2.document.write("}");
                newWindow2.document.write(
                  'if (select.hasAttribute("required") && select.value === "") {'
                );

                newWindow2.document.write(
                  ' document.querySelector("#form_toast").innerHTML = "<p>" +"Please select a gender."+ "</p>";' +
                    'document.querySelector("#form_toast").style.display = "block";' +
                    "setTimeout(function () {" +
                    'document.querySelector("#form_toast").style.display = "none";' +
                    "}, 1000);"
                );
                newWindow2.document.write("return false;");
                newWindow2.document.write("}");
                newWindow2.document.write("}");
                newWindow2.document.write("return true;");
                newWindow2.document.write("}");

                newWindow2.document.write("function sendFormData() {");
                newWindow2.document.write("try {");
                newWindow2.document.write(
                  'const forms = document.getElementsByClassName("form-div");'
                );
                newWindow2.document.write("const data = [];");
                newWindow2.document.write(
                  "for (let i = 0; i < forms.length; i++) {"
                );
                newWindow2.document.write(
                  'const inputs = forms[i].getElementsByTagName("input");'
                );
                newWindow2.document.write(
                  'const select = forms[i].getElementsByTagName("select")[0];'
                );
                newWindow2.document.write("const formData = {");
                newWindow2.document.write("name: inputs[0].value,");
                newWindow2.document.write("lastName: inputs[1].value,");
                newWindow2.document.write("birthday: inputs[2].value,");
                newWindow2.document.write("idNumber: inputs[3].value,");
                newWindow2.document.write("gender: select.value");
                newWindow2.document.write("};");
                newWindow2.document.write("data.push(formData);");
                newWindow2.document.write("}");

                newWindow2.document.write("console.log(data);"); // Modify this line to send data to your Django backend

                // newWindow2.document.write(`fetch('/your-django-endpoint', {
                //   method: 'POST',
                //   headers: {
                //     'Content-Type': 'application/json',
                //   },
                //   body: JSON.stringify(data),
                // })
                //   .then(response => {
                //     if (!response.ok) {
                //       throw new Error('Network response was not ok');
                //     }
                //     return response.json();
                //   })
                //   .then(result => {
                //     // Handle the response from the Django backend
                //     console.log(result);
                //   }`);

                newWindow2.document.write("} catch (error) {");

                newWindow2.document.write(
                  ' document.querySelector("#form_toast").innerHTML = "<p>" +"An error occurred while sending the data."+ "</p>";' +
                    'document.querySelector("#form_toast").style.display = "block";' +
                    "setTimeout(function () {" +
                    'document.querySelector("#form_toast").style.display = "none";' +
                    "}, 1000);"
                );

                newWindow2.document.write("   console.error(error);");
                newWindow2.document.write("}");

                newWindow2.document.write(
                  'document.querySelector("#form_toast").innerHTML = "<p>" +"Reserve Successfully!"+ "</p>";' +
                    'document.querySelector("#form_toast").style.backgroundColor = "green";' +
                    'document.querySelector("#form_toast").style.display = "block";' +
                    "setTimeout(function () {" +
                    'document.querySelector("#form_toast").style.display = "none";' +
                    'document.querySelector("#form_toast").style.backgroundColor = "rgb(240, 78, 78)";' +
                    "}, 2000);"
                );
                // newWindow2.document.write("window.location.href = 'first.html';");
                newWindow2.document.write("}");
                newWindow2.document.write("</script>");

                newWindow2.document.write("</div></body></html>");
              });
            };
          });

          function getStars(numStars) {
            var stars = "";
            for (var i = 0; i < numStars; i++) {
              stars += "&#9733; ";
            }
            return stars;
          }

          var spacerElement = document.createElement("div");
          spacerElement.style.flexGrow = "1"; // Add this line to create flexible space

          eDiv.appendChild(priceElement);
          eDiv.appendChild(spacerElement); // Add the spacer element
          eDiv.appendChild(reserveButton);

          hotelDiv.appendChild(logoDiv);
          hotelDiv.appendChild(infoDiv);
          hotelDiv.appendChild(eDiv);

          resultsDiv.appendChild(hotelDiv);
        });

        // })
      }
    });
});
