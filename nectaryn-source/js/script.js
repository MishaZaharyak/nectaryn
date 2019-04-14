function fixedMenu() {
  const windowScroll = window.scrollY;
  const menu = document.querySelector('.topMenu')
  const topOfMenu = menu.offsetTop;
  var fullWidthMenu = $('.fullWidthMenu');

  if (windowScroll > topOfMenu) {
    if (!fullWidthMenu.hasClass('show')) menu.classList.add('fixedNav');

  } else {
    menu.classList.remove('fixedNav');
  }
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

    var fullWidthMenu = $('.fullWidthMenu');
    var menu = $('.topMenu');
    var topmenuNav = $(menu).find('.navigation');
    var languages = $(menu).find('.languages');

    if ($(this).hasClass('open')) {
      
      $(topmenuNav).addClass('hide');
      $(languages).addClass('hide');
      $(menu).removeClass('fixedNav');

      $(fullWidthMenu).removeClass('hide').addClass('show');

      setTimeout(function() {

        if ($(fullWidthMenu).hasClass('show')) {
          $(fullWidthMenu).addClass('show-active');
        }
      }, 100)

    } else if (!$(this).hasClass('open')) {
      $(topmenuNav).removeClass('hide');
      $(languages).removeClass('hide');

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
