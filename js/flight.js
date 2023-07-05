var companyLogos = {
    "qeshmair": "css/f-img/qeshmAir.png",
    "varesh": "css/f-img/Varesh.png",
  };
  var mockData = [
    {
      destination: "Te",
      companyName: "qeshmair",
      origin: "Ma",
      hourEnd:"17:12",
      hourStart:"20:00",
      terminal:12,
      flightNumber:10,
      capacity:100,
      weightAllowed:60,
      kind:"business",
      price:1500000
    },
    {
      destination: "Tads",
      companyName: "varesh",
      origin: "Msda",
      hourEnd:"07:12",
      hourStart:"10:00",
      Terminal:13,
      flightNumber:11,
      capacity:100,
      weightAllowed:60,
      kind:"business",
      price:2100000
    }
    // more mock ticket objects here...
];
  function isValid(origin, destination, depart, returnD, adults, children) {
    return (
      origin.trim() !== '' &&
      destination.trim() !== '' &&
      depart.trim() !== '' && 
      adults.trim() !== ''
    );
  }
  
  function showToast(message) {
    document.querySelector(".toast").innerHTML = '<p>' + message + '</p>';
    document.querySelector('.toast').style.display = 'block';
    setTimeout(function () {
      document.querySelector(".toast").style.display = 'none';
    }, 1000);
  }
  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("searchbut").addEventListener("click", function (event) {
    event.preventDefault(); // prevent the form from submitting
    var origin = document.getElementById("origin").value;
    var destination = document.getElementById("destination").value;
    var depart = document.getElementById("depart").value;
    var returnD = document.getElementById("return").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    
    if (!isValid(origin, destination, depart, returnD, adults, children)) { 
      showToast('Something is wrong. Please fill the form again.');
    } else {
      
  //  var apiUrl = "http://your-api-url.com?input1=" + encodeURIComponent(origin) + "&input2=" + encodeURIComponent(destination)+ 
  //     "&input3=" + encodeURIComponent(depart)+ "&input4=" + encodeURIComponent(returnD)+ "&input5=" + 
  //     encodeURIComponent(adults)+ "&input6=" + encodeURIComponent(children);
  //     fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => {
      // your code to handle the JSON data goes here

      data = mockData;
      var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = '';

data.forEach(function(ticket) {
  var ticketDiv = document.createElement("div");
  ticketDiv.setAttribute("class", "ticket row");

  var logoDiv = document.createElement("div");
  logoDiv.setAttribute("class", "logo col-auto");

  var companyName = ticket.companyName;
  var logoUrl = companyLogos[companyName];
  var logoElement = document.createElement("img");
  logoElement.src = logoUrl;
  logoElement.classList.add("img-fluid"); // Use Bootstrap class for responsive images
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
  reserveButton.setAttribute("class", "reserve-button btn btn-success");
  reserveButton.textContent = "Reserve";
  
  reserveButton.addEventListener('click', function() {
    // document.body.style.backgroundColor = "pink";
      var newWindow2 = window.open("", "_blank");
      newWindow2.document.write(
        "<html><head><script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.bundle.min.js'></script><script src='bootstrap-5.3.0-alpha3-dist/js/jquery-3.7.0.min.js'></script>"+
        "<script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js'></script>"+
        "<scrip src='https://code.jquery.com/jquery-3.6.0.min.js'>"+'</script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">'+"<link rel='stylesheet' href='bootstrap-5.3.0-alpha3-dist/css/bootstrap.min.css'><link rel='stylesheet' href='css/style2.css'><link rel='stylesheet' href='css/enter.css'><link rel='stylesheet' href='css/details.css'><title>Hotel Details</title></head>"
        +"<body>" +
        '<nav id="header-nav" class="navbar navbar-default">'+
        "<div class='container'>"+
      "<div class='navbar-header'>"+
          "<a href='first.html' class='visible-md visible-lg'>"+
              '<img id="logo-img" class="img-fluid visible-lg" src="'+"css/logo.jpg" +'"alt="logo-img">'+
          "</a>"+
      "</div>"+
      "<div class='navbar-brand '>"+
          "<h1>Online Reservation</h1>"+
      "</div>"+
    "</div>"+
    
  '<div id="header-menu">'+
  '<ul id="nav-list" class="nav navbar-nav">'+
      '<li> <a href="first.html"><p><i class="fa fa-home icon-3x"></i> <br class="hidden-xs"> HOME </p> </a></li>'+
      '<li> <a href="flight.html"><p><i class="fa fa-plane"></i><br class="hidden-xs"> FLIGHT</p></a></li>'+
      '<li><a href="train.html"><p><i class="fa fa-train"></i><br class="hidden-xs"> TRAIN</p></a></li>'+
      '<li><a href="hotel.html"><p><i class="fa fa-hotel"></i><br class="hidden-xs"> HOTEL</p></a></li>'+
      '<li><a href="suite.html"><p><i class="fa fa-building"></i><br class="hidden-xs"> SUITE</p></a></li>'+
  '</ul>'+
'</div>'+     
    "</nav>"+
      '<div id="main-content" class="container">');
      for (let i = 0; i < adults; i++) {
        newWindow2.document.write('<form id="form-div">'+

        '<p>Adult</p>'+
                '<div class="row ">'+
                    '<div class="col-md-6">'+   
                        '<input type="text" class="form-control" id="name" placeholder="name"required >'+
                    '</div>'+
                    '<div class="col-md-6">'+
                        '<input type="text" class="form-control" id="lastName" placeholder="last name" required>'+
                    '</div>'+
                    '<div class="col-md-6">'+
                        '<input type="date" class="form-control" id="birthday" >'+
                    '</div>'+
                    '<div class="col-md-6">'+
                        '<input type="text" class="form-control" id="idNumber" placeholder="id number"required>'+
                    '</div>'+
                    '<div class="col-md-6"> '+
                      '<select class="form-select" id="gender" required>'+
                          '<option value="">Select your gender</option>'+
                          '<option value="male">Male</option>'+
                          '<option value="female">Female</option>'+
                      '</select>'+
                  '</div>'+
                '</div>'+
            '</form>');
      }
      for (let i = 0; i < children; i++) {
        newWindow2.document.write('<form id="form-div">'+

        '<p>child</p>'+
                '<div class="row ">'+
                    '<div class="col-md-6">'+   
                        '<input type="text" class="form-control" id="name" placeholder="name"required >'+
                    '</div>'+
                    '<div class="col-md-6">'+
                        '<input type="text" class="form-control" id="lastName" placeholder="last name" required>'+
                    '</div>'+
                    '<div class="col-md-6">'+
                        '<input type="date" class="form-control" id="birthday" >'+
                    '</div>'+
                    '<div class="col-md-6">'+
                        '<input type="text" class="form-control" id="idNumber" placeholder="id number"required>'+
                    '</div>'+
                    '<div class="col-md-6"> '+
                      '<select class="form-select" id="gender" required>'+
                          '<option value="">Select your gender</option>'+
                          '<option value="male">Male</option>'+
                          '<option value="female">Female</option>'+
                      '</select>'+
                  '</div>'+
                '</div>'+
            '</form>');
      }
      



      newWindow2.document.write("</div></body></html>");

     

      // Generate form fields dynamically for each person
     

      for (let i = 0; i < children; i++) {
        formMarkup += `<h3>Child ${i + 1}</h3>
          <input type="text" id="child-name-${i + 1}" name="child-name-${i + 1}" placeholder="Name">
          <input type="text" id="child-last-name-${i + 1}" name="child-last-name-${i + 1}" placeholder="Last Name"><br>`;
      }

      formMarkup += '<button class="submit-btn" type="submit">Submit</button>';

      // Add form elements to the reservation form
      reservationForm.innerHTML = formMarkup;

      // Optionally, you can add a submit event listener to the form to handle form submission
      reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission (e.g., send data to the server)
      });
    });
  

  var detailsButton = document.createElement("button");
  detailsButton.setAttribute("class", "details-button btn btn-link");
  detailsButton.textContent = "Details";
  detailsButton.addEventListener("click", function() {
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

  var flightNumElement = document.createElement("p");
  flightNumElement.textContent = "Flight Number: " + ticket.flightNumber;
  // flightNumElement.setAttribute("class", "col-md-6 col-sm-12");
  var terminalElement = document.createElement("p");
  terminalElement.textContent = "Terminal: " + ticket.terminal;
  // terminalElement.setAttribute("class", "col-md-6 col-sm-12");
  var weightAllowedElement = document.createElement("p");
  weightAllowedElement.textContent = "Weight Allowed: " + ticket.weightAllowed;
  // weightAllowedElement.setAttribute("class", "col-md-6 col-sm-12");
  var kindElement = document.createElement("p");
  kindElement.textContent = "Kind: " + ticket.kind;
  // kindElement.setAttribute("class", "col-md-6 col-sm-12");
  

  detailsDiv.appendChild(flightNumElement);
  detailsDiv.appendChild(terminalElement);
  detailsDiv.appendChild(weightAllowedElement);
  detailsDiv.appendChild(kindElement);

  ticketDiv.appendChild(logoDiv);
  ticketDiv.appendChild(citiesPriceDiv);
  ticketDiv.appendChild(buttonsDiv);
  ticketDiv.appendChild(detailsDiv);

  resultsDiv.appendChild(ticketDiv);
});
      
    // })
    }
  });
});