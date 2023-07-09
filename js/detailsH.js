// document.body.style.backgroundColor = "red";

document.addEventListener("DOMContentLoaded", function () {
  
  // var submitButton = document.getElementById("submitBtn");
  document.querySelector('#submitBtn').addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
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
      newWindow2.document.write('<option value="male">Male</option>');
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
      newWindow2.document.write('<option value="male">Male</option>');
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
});

