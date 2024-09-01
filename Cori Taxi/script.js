
//nav-bar scroll function//
$(window).scroll(function() {
  if (window.scrollY > 600) {
      $(".nav-bar").css({
        "padding": "1px 1px",
        "box-shadow": "0px 10px 20px #000",
        "background-color": "#694322",
        "border-bottom": "1px solid #fff",
      });
  } else {
      $(".nav-bar").css({
          "border-bottom": "2px solid #fff",
          "transition": "0.3s",
          "padding": "25px 25px",
          "box-shadow": "none",
          "background-color": "#000",
          "box-shadow": "0px 10px 20px #000"
      });
  }
});



 // About Us Read More Button
 $('#toggleAboutUsFull').click(function() {
  $('#aboutUsFullContainer').slideDown('slow'); 
  $('#aboutUsFullContainer').get(0).scrollIntoView({ behavior: 'smooth' });
});



// About Us navbar button
$('#toggleAboutUsFullMenu').click(function() {
  $('#aboutUsFullContainer').slideDown('slow'); 
  $('#aboutUsFullContainer').get(0).scrollIntoView({ behavior: 'smooth' });
});



//Services button hidden container//
  $(document).ready(function() {
    $('#servicesLink').click(function(event) {
      event.preventDefault(); 
      $('#serviceContainer').slideDown('slow'); 
      $('#serviceContainer').get(0).scrollIntoView({ behavior: 'smooth' });
    });
  });



// Vehicles Button//
$('#toggleVehicles').click(function() {
  $('#containerVehicles').slideDown('slow', function() {
      $('#containerVehicles').get(0).scrollIntoView({ behavior: 'smooth' });
  });
});



//HIDDEN MAIN FORM//
document.querySelectorAll('.booknow').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('booking-form-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  });

});
document.getElementById('close-button').addEventListener('click', function() {
  document.getElementById('booking-form-container').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('booking-form-container').reset(); 
});

document.querySelector('.submitbutton').addEventListener('click', function(event) {
  event.preventDefault(); 
  document.getElementById('booking-form-container').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('booking-form-container').reset(); 
});



//MAIN FORM DATE INPUT PIKADAY//
var picker = new Pikaday({
  field: document.getElementById('date-input'),
  format: 'MM/DD',
  toString(date, format) {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    return `${month}/${day}`;
  },
  parse(dateString, format) {
    const [month, day] = dateString.split('/');
    return new Date(new Date().getFullYear(), month - 1, day);
  }
});



//TOP-BUTTON//
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollThreshold = 500; 

  if (window.scrollY > scrollThreshold) {
    document.getElementById("myButton").style.display = "block";
  } else {
    document.getElementById("myButton").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//Footer hidden Booking Terms button// 
$('#toggleBookingtermscontainer').click(function(event) {
  event.preventDefault();

  $('#bookingtermscontainer').slideDown('slow', function() {
      $('html, body').animate({
          scrollTop: $('#bookingtermscontainer').offset().top
      }, 'slow');
  });
});



//Footer hidden privacy policy button// 
$(document).ready(function() {
  $('#togglePrivacyPolicyContainer').click(function(event) {
      event.preventDefault();
      
      $('#privacypolicycontainer').slideDown('slow', function() {
          $('html, body').animate({
              scrollTop: $('#privacypolicycontainer').offset().top
          }, 'slow');
      });
  });
});



//Footer hidden Terms and conditions button// 
$(document).ready(function() {
  $('#toggleTermsAndConditionsContainer').click(function(event) {
      event.preventDefault();
      
      $('#termsandconditionscontainer').slideDown('slow', function() {
          $('html, body').animate({
              scrollTop: $('#termsandconditionscontainer').offset().top
          }, 'slow');
      });
  });
});



//Footer hidden cookies button// 
    $(document).ready(function() {
        $('#toggleCookiesContainer').click(function(event) {
            event.preventDefault();
            
            $('#cookiescontainer').slideDown('slow', function() {
                $('html, body').animate({
                    scrollTop: $('#cookiescontainer').offset().top
                }, 'slow');
            });
        });
    });