function fixedMenu() {
  const windowScroll = window.scrollY;
  const menu = document.querySelector('.topMenu')
  const topOfMenu = menu.offsetTop;

  (windowScroll > topOfMenu) ? menu.classList.add('fixedNav') : menu.classList.remove('fixedNav');
}

$(window).scroll(function() {
  // fixed menu 
  fixedMenu();
})

$(document).ready(function() {
  // fixed menu 
  fixedMenu();

  // feedback input animation
  var feedback = $('.feedback');

  if (feedback) {
    feedback.find('input').each(function() {
      $(this).on('focus', function() {
        $(this).siblings('label').addClass('focus');

      }).on('focusout', function() {
        console.log($(this).val())
        if ($(this).val() === '') {
          $(this).siblings('label').removeClass('focus');
        } 
      })
    })
  }

  // menu humburger button amination handler
  $('#nav-icon3').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('open');

    const fullWidthMenu = $('.fullWidthMenu');
    const menu = $('.topMenu');
    const topmenuNav = $(menu).find('.navigation');
    const header = $('.header');

    if ($(this).hasClass('open')) {
      
      if ($(topmenuNav).length) $(topmenuNav).addClass('hide');

      $(fullWidthMenu).removeClass('hide').addClass('show');

      setTimeout(function() {

        if ($(fullWidthMenu).hasClass('show')) {
          $(fullWidthMenu).addClass('show-active');
        }
      }, 100)

    } else if (!$(this).hasClass('open')) {
      if ($(topmenuNav).length) $(topmenuNav).removeClass('hide');

      $(fullWidthMenu).removeClass('show-active');

      setTimeout(function() {

        if (!$(fullWidthMenu).hasClass('show-active')) {
          $(fullWidthMenu).removeClass('show').addClass('hide');
        }
        
      }, 500)
    }
  });
});

// navigation menu toggle active class
$(document).on('click', '.navigation a', e => {
  $('.navigation a').each((i, el) => $(el).parent().removeClass('active'))
  $(e.target).parent().addClass('active')
});

// reset active link when click on brand
$('.navbar-brand').on('click', function(e) {
  $('.navigation a').each((i, el) => $(el).parent().removeClass('active'))
})

// pagination active page
// $(document).on('click', '.pagination a:not(.nav-arrow)', function(e) {
//   $('.pagination a').each(function(i, el) {
//     $(el).parent().removeClass('active')
//   })
//   $(e.target).parent().addClass('active')
// });
