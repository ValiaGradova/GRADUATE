$('.list > div').on('click', function(){
    $(this).children('.list_icon').toggleClass('list_icon-rotate');
    $(this).parent('.list').toggleClass('change-color');
    $(this).next('.list_text').slideToggle(300);
})

$('.selector').on('click', function(){
    $(this).children('.selector-title').toggleClass('text-change');
    $(this).next('.selector-text').slideToggle(300);
})