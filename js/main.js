// Animate Smooth Scroll
$('#view-services').on('click', function() {
    const services = $('#services').position().top;
  
    $('html, body').animate(
      {
        scrollTop: services
      },
      900
    );
  });