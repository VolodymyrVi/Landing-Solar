$(function(){

    $('.info-tabs__item').on('click', function(e){
        e.preventDefault();
        $('.info-tabs__item').removeClass('info-tabs__item--active');
        $(this).addClass('info-tabs__item--active');
    });

});