var companyLogos = {
    "reilgostar": "css/t-img/railGostar.png",
    "raja": "css/t-img/raja.png",
  };
  var mockData = [
    {
      destination: "Teggg",
      companyName: "raja",
      origin: "Ma",
      hourEnd:"17:12",
      hourStart:"20:00",
      traintNumber:10,
      capacity:100,
      cabinNumber:60,
      generalFacility:"generalFacility",
      cabinFacility:"cabinFacility",
      price:1500000
    },
    {
      destination: "Tads",
      companyName: "reilgostar",
      origin: "Msda",
      hourEnd:"07:12",
      hourStart:"10:00",
      traintNumber:10,
      capacity:200,
      cabinNumber:60,
      generalFacility:"generalFacility",
      cabinFacility:"cabinFacility",
      price:2100000
    }
    // more mock ticket objects here...
];
  function isValid(origin, destination, depart, returnD, adults, children,type) {
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
    var type = document.getElementById("train-type").value;
    
    if (!isValid(origin, destination, depart, returnD, adults, children,type)) { 
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

  var trainNumElement = document.createElement("p");
  trainNumElement.textContent = "Train Number: " + ticket.traintNumber;
  // flightNumElement.setAttribute("class", "col-md-6 col-sm-12");
  var cabinNumberElement = document.createElement("p");
  cabinNumberElement.textContent = "Cabin Number: " + ticket.cabinNumber;
  // terminalElement.setAttribute("class", "col-md-6 col-sm-12");
  var generalFacilityElement = document.createElement("p");
  generalFacilityElement.textContent = "General Facility: " + ticket.generalFacility;
  // weightAllowedElement.setAttribute("class", "col-md-6 col-sm-12");
  var cabinFacilityElement = document.createElement("p");
  cabinFacilityElement.textContent = "cabinFacility: " + ticket.cabinFacility;
  // kindElement.setAttribute("class", "col-md-6 col-sm-12");
  

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
      
    // })
    }
  });
});