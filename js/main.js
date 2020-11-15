// Animate smooth scroll
$('#view-services').on('click', function(){
    const choosedevice = $('#choose-device').position().top;

   $('html, body').animate({
       scrollTop: choosedevice
   }, 900); 
});

$('#view-phone').on('click', function(){
    const phone = $('#phone').position().top;

   $('html, body').animate({
       scrollTop: phone
   }, 900); 
});

$('#view-pc').on('click', function(){
    const pc = $('#pc').position().top;

   $('html, body').animate({
       scrollTop: pc
   }, 900); 
});

$('#view-console').on('click', function(){
    const console = $('#console').position().top;

   $('html, body').animate({
       scrollTop: console
   }, 900); 
});

$('#view-iphone').on('click', function(){
    const iphone = $('#iphone').position().top;

   $('html, body').animate({
       scrollTop: iphone
   }, 900); 
});

$('#view-android').on('click', function(){
    const android = $('#android').position().top;

   $('html, body').animate({
       scrollTop: android
   }, 900); 
});