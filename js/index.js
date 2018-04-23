//modal btn
$('.js-click-modal').click(function(){
    console.log($('.js-click-modal'));
  $('.stock-list').addClass('modal-open');
});

$('.js-close-modal').click(function(){
  $('.stock-list').removeClass('modal-open');
});

//accordion
$(document).ready(function() {
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

