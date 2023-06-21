function isValid( password1,password2,email,phone_num) {
  // if(password1.trim() !== ''){
  //   $('body').css('background-color', 'yellow');
  // }
  // if(password2.trim() !== ''){
  //   $('body').css('background-color', 'red');
  // }
  // if(email.trim() !== ''){
  //   $('body').css('background-color', 'pink');
  // }
  // if(phone_num.trim() !== ''){
  //   $('body').css('background-color', 'orange');
  // }
  if(password2 === password1){
    $('body').css('background-color', 'green');
  }
    return password1.trim() !== '' && password2.trim() !== '' && password1 === password2 
            && email.trim() !== '' && phone_num.trim() !== '';
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
     
     var password1 = $('#password1').val();
     var password2 = $('#password2').val();
     var email = $('#email').val();
     var phone_num = $('#phone').val();  
     
     if (isValid( password1,password2,email,phone_num)) {
      // $('body').css('background-color', 'pink');
      // alert('Form submitted successfully!');
      // do the login stuff
     } else {
      // $('body').css('background-color', 'red');
      showToast('Something is  please fill the form again');
     
     }
    });
   });
  