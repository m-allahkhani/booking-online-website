var companyLogos = {
  reilgostar: "css/t-img/railGostar.png",
  raja: "css/t-img/raja.png",
};
var mockData = [
  {
    destination: "Teggg",
    companyName: "raja",
    origin: "Ma",
    hourEnd: "17:12",
    hourStart: "20:00",
    traintNumber: 10,
    capacity: 100,
    cabinNumber: 60,
    generalFacility: "generalFacility",
    cabinFacility: "cabinFacility",
    price: 1500000,
  },
  {
    destination: "Tads",
    companyName: "reilgostar",
    origin: "Msda",
    hourEnd: "07:12",
    hourStart: "10:00",
    traintNumber: 10,
    capacity: 200,
    cabinNumber: 60,
    generalFacility: "generalFacility",
    cabinFacility: "cabinFacility",
    price: 2100000,
  },
  // more mock ticket objects here...
];
function isValid(origin, destination, depart, returnD, adults, children, type) {
  return (
    origin.trim() !== "" &&
    destination.trim() !== "" &&
    depart.trim() !== "" &&
    adults.trim() !== ""
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
      var origin = document.getElementById("origin").value;
      var destination = document.getElementById("destination").value;
      var depart = document.getElementById("depart").value;
      var returnD = document.getElementById("return").value;
      var adults = document.getElementById("adults").value;
      var children = document.getElementById("children").value;
      var type = document.getElementById("train-type").value;

      if (
        !isValid(origin, destination, depart, returnD, adults, children, type)
      ) {
        showToast("Something is wrong. Please fill the form again.");
      } else {
        // comment
        // const params = new URLSearchParams();
        // params.append("origin", origin);
        // params.append("destination", destination);
        // params.append("depart", depart);
        // params.append("return", returnD);
        // params.append("adults", adults);
        // params.append("children", children);
        // params.append("type", type);
        // var apiUrl = "http://your-api-url.com?" + params.toString();
        // fetch(apiUrl)
        //   .then(function (response) {
        //     if (!response.ok) {
        //       throw new Error("Network response was not ok");
        //     }
        //     return response.json();
        //   })
        //   .then((data) => {
            // comment
            data = mockData;
            var resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";

            data.forEach(function (ticket) {
              var ticketDiv = document.createElement("div");
              ticketDiv.setAttribute("class", "ticket row");

              var logoDiv = document.createElement("div");
              logoDiv.setAttribute("class", "logo col-auto");

              var companyName = ticket.companyName;
              var logoUrl = companyLogos[companyName];
              var logoElement = document.createElement("img");
              logoElement.src = logoUrl;
              logoElement.classList.add("img-fluid");
              logoDiv.appendChild(logoElement);

              var citiesPriceDiv = document.createElement("div");
              citiesPriceDiv.setAttribute("class", "cities-price col");

              var citiesDiv = document.createElement("div");
              citiesDiv.setAttribute("class", "cities");

              var originElement = document.createElement("h3");
              originElement.setAttribute("class", "city");
              originElement.textContent = ticket.origin;

              var hourSeparator = document.createElement("span");
              hourSeparator.setAttribute("class", "hour-separator");
              hourSeparator.textContent = " - ";

              var destinationElement = document.createElement("h3");
              destinationElement.setAttribute("class", "city");
              destinationElement.textContent = ticket.destination;

              var startTimeElement = document.createElement("span");
              startTimeElement.setAttribute("class", "hour");
              startTimeElement.textContent = ticket.hourStart;

              var endTimeElement = document.createElement("span");
              endTimeElement.setAttribute("class", "hour");
              endTimeElement.textContent = ticket.hourEnd;

              citiesDiv.appendChild(originElement);
              citiesDiv.appendChild(startTimeElement);
              citiesDiv.appendChild(hourSeparator);
              citiesDiv.appendChild(destinationElement);
              citiesDiv.appendChild(endTimeElement);

              var priceElement = document.createElement("h3");
              priceElement.setAttribute("class", "price");
              priceElement.textContent = "Price: $" + ticket.price;

              citiesPriceDiv.appendChild(citiesDiv);
              citiesPriceDiv.appendChild(priceElement);

              var buttonsDiv = document.createElement("div");
              buttonsDiv.setAttribute("class", "buttons col");

              var reserveButton = document.createElement("button");
              reserveButton.setAttribute(
                "class",
                "reserve-button btn btn-success"
              );
              reserveButton.textContent = "Reserve";

              reserveButton.addEventListener("click", function () {
                // document.body.style.backgroundColor = "pink";
                var newWindow2 = window.open("", "_blank");
                newWindow2.document.write(
                  "<html><head><script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.bundle.min.js'></script><script src='bootstrap-5.3.0-alpha3-dist/js/jquery-3.7.0.min.js'></script>" +
                    "<script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js'></script>" +
                    "<scrip src='https://code.jquery.com/jquery-3.6.0.min.js'>" +
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

              var detailsButton = document.createElement("button");
              detailsButton.setAttribute(
                "class",
                "details-button btn btn-link"
              );
              detailsButton.textContent = "Details";
              detailsButton.addEventListener("click", function () {
                var detailsDiv = ticketDiv.getElementsByClassName("details")[0];
                if (detailsDiv.style.display === "none") {
                  detailsDiv.style.display = "block";
                } else {
                  detailsDiv.style.display = "none";
                }
              });

              buttonsDiv.appendChild(reserveButton);
              buttonsDiv.appendChild(detailsButton);

              var detailsDiv = document.createElement("div");
              detailsDiv.setAttribute("class", "row details");
              detailsDiv.style.display = "none";

              var trainNumElement = document.createElement("p");
              trainNumElement.textContent =
                "Train Number: " + ticket.traintNumber;
              var cabinNumberElement = document.createElement("p");
              cabinNumberElement.textContent =
                "Cabin Number: " + ticket.cabinNumber;
              var generalFacilityElement = document.createElement("p");
              generalFacilityElement.textContent =
                "General Facility: " + ticket.generalFacility;
              var cabinFacilityElement = document.createElement("p");
              cabinFacilityElement.textContent =
                "cabinFacility: " + ticket.cabinFacility;

              detailsDiv.appendChild(trainNumElement);
              detailsDiv.appendChild(cabinNumberElement);
              detailsDiv.appendChild(generalFacilityElement);
              detailsDiv.appendChild(cabinFacilityElement);

              ticketDiv.appendChild(logoDiv);
              ticketDiv.appendChild(citiesPriceDiv);
              ticketDiv.appendChild(buttonsDiv);
              ticketDiv.appendChild(detailsDiv);

              resultsDiv.appendChild(ticketDiv);
            });

            // comment
          // })
          // .catch(function (error) {
          //   showToast(error);
          // });
        // comment
      }
    });
});
