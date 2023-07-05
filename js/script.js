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
      Termina:12,
      flghtNum:10,
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
      Termina:13,
      flghtNum:11,
      capacity:100,
      weightAllowed:60,
      kind:"business",
      price:2100000
    }
    // more mock ticket objects here...
];

document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the search button
    var searchButton = document.getElementById('searchbut');
  
    // Attach a click event listener to the search button
    searchButton.addEventListener('click', function(event) {
      event.preventDefault(); // prevent the form from submitting
      // your code to handle form submission goes here
      // document.body.style.backgroundColor = 'red';
      var origin = document.getElementById("origin").value;
      var destination = document.getElementById("destination").value;
      var depart = document.getElementById("depart").value;
      var returnD = document.getElementById("return").value;
      var adults = document.getElementById("adults").value;
      var children = document.getElementById("children").value;
      // var apiUrl = "http://your-api-url.com?input1=" + encodeURIComponent(origin) + "&input2=" + encodeURIComponent(destination)+ 
      // "&input3=" + encodeURIComponent(depart)+ "&input4=" + encodeURIComponent(returnD)+ "&input5=" + 
      // encodeURIComponent(adults)+ "&input6=" + encodeURIComponent(children);
      // fetch(apiUrl)
      // .then(response => response.json())
      // .then(data => {
      // your code to handle the JSON data goes here
      data = mockData;
      var resultsDiv = document.getElementById("results");
      data.forEach(function(ticket) {
        var ticketDiv = document.createElement("div");
ticketDiv.setAttribute("class", "ticket");
        
var logoDiv = document.createElement("div");
logoDiv.setAttribute("class", "logo");
        
var companyName = ticket.companyName;
var logoUrl = companyLogos[companyName];
var logoElement = document.createElement("img");
logoElement.src = logoUrl;
logoDiv.appendChild(logoElement);

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

var priceDiv = document.createElement("div");
priceDiv.setAttribute("class", "price");

var priceElement = document.createElement("h3");
priceElement.textContent = "Price: $" + ticket.price;

var reserveButton = document.createElement("button");
reserveButton.setAttribute("class", "reserve-button");
reserveButton.textContent = "Reserve";

priceDiv.appendChild(priceElement);
priceDiv.appendChild(reserveButton);
        
var detailsButton = document.createElement("button");
detailsButton.setAttribute("class", "details-button");
detailsButton.textContent = "Details";

ticketDiv.appendChild(logoDiv);
ticketDiv.appendChild(citiesDiv);
ticketDiv.appendChild(priceDiv);
ticketDiv.appendChild(detailsButton);
  resultsDiv.appendChild(ticketDiv);
  });

    });
  });
  






