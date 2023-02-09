$(window).on('scroll', function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn()
    }else{
        $('#up').fadeOut()
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 500)
})

$('#list-link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#list').offset().top}, 1000)
})