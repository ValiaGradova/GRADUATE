$('.modal-overlay').on('click', function(){
    if($(e.target).closest('.modal').leangth == 0){
        $(this).fadeOut();
    }
})

$('.close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut();
})

$('#open-modal').on('click', function(){
    $('.modal-overlay').fadeIn();
})