$('.js-click-modal').click(function(){
    console.log($('.js-click-modal'));
  $('.stock-list').addClass('modal-open');
});

$('.js-close-modal').click(function(){
  $('.stock-list').removeClass('modal-open');
});

// после загрузки страницы
$(document).ready(function(){
    // запускаем отображение аккордеона
    makeAccordion();    
    // при клике по заголовку
    $('.accordion-title').click(function(){
        // снимаем со всех div`ов класс active
        $('.accordion').each(function(){
            $(this).removeClass('active');
        });
        // задаем родительскому div`у класс active
        $(this).parent().addClass('active');
        // запускаем отображение аккордеона
        makeAccordion();
    });
});
// функция для отображения аккордеона. Сворачивает и разворачивает
function makeAccordion(){
    var speed = 300; // скорость анимации
    // перебираем все блоки аккордеона
    $('.accordion').each(function(){
        if($(this).hasClass('active')){
            // если находим активный, то разворачиваем его
            $(this).find('.content').slideDown(speed);
        }else{
            // не активный сворачиваем
            $(this).find('.content').slideUp(speed);
        }
    });
}