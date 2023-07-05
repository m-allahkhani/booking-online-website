var companyLogos = {
  reilgostar: "css/t-img/railGostar.png",
  raja: "css/t-img/raja.png",
};
var mockData = [
  {
    name: "hotel1",
    stars: 5,
    breifAdd: "streetNum",
    fullAdd:"fu u  uuuuuuuu u l address",
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
    fullAdd:"fu u  uuuuuuuu u l address",
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
          nameElement.textContent = hotel.name + "\u00A0"; // Add space after the type

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
          reserveButton.textContent = "Reserve";
          reserveButton.addEventListener("click", function() {
            var newWindow = window.open("", "_blank");
            newWindow.document.write(
              "<html><head><script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.bundle.min.js'></script><script src='bootstrap-5.3.0-alpha3-dist/js/jquery-3.7.0.min.js'></script>"+
              "<script src='bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js'></script>"+
              "<scrip src='https://code.jquery.com/jquery-3.6.0.min.js'>"+'</script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">'+"<link rel='stylesheet' href='bootstrap-5.3.0-alpha3-dist/css/bootstrap.min.css'><link rel='stylesheet' href='css/style2.css'><link rel='stylesheet' href='css/details.css'><title>Hotel Details</title></head>"
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
            '<div id="main-content" class="container">'+
          
              "<h1 class='hotel-name'>" + hotel.name + "</h1>" +
              "<p class='hotel-address'>Address: " + hotel.fullAdd + "</p>" +
              "<p class='hotel-stars'>Stars: " + getStars(hotel.stars) + "</p>" +
          
              "<div id='carouselExampleControls' class='carousel slide' data-bs-ride='carousel'>" +
              "<div class='carousel-inner'>"
            );
          
            // Add carousel items for each picture in the hotel.pictures array
            for (var i = 0; i < hotel.pictures.length; i++) {
              newWindow.document.write(
                "<div id='image' class='carousel-item" + (i === 0 ? " active" : "") + "'>" +
                "<img id='img-main' src='" + hotel.pictures[i] + "' class='d-block w-100' alt='Hotel Picture'>" +
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
          
            newWindow.document.write("</body></html>");
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
