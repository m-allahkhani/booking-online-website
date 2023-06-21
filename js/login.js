function isValid(username, password) {
  return username.trim() !== '' && password.trim() !== '';
 }

 function showToast(message) {
  $(".toast").html('<p>'+message+'</p>');
  $('.toast').show();
  setTimeout(function() {
    $(".toast").hide();
  }, 1000);
 }

 jQuery(document).ready(function($) {
  $('#submitBtn').click(function() {
   var username = $('#username').val();
   var password = $('#password').val();

   if (isValid(username, password)) {
    // $('body').css('background-color', 'pink');
    alert('Form submitted successfully!');
    // do the login stuff
   } else {
    showToast('Invalid username or password');
    // $('body').css('background-color', 'red');
   }
  });
 });
