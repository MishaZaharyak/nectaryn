function fixedMenu() {
  const windowScroll = window.scrollY;
  const menu = document.querySelector('.topMenu')
  const topOfMenu = menu.offsetTop;
  var fullWidthMenu = $('.fullWidthMenu');

  if (windowScroll > topOfMenu) {
    if (!fullWidthMenu.hasClass('show')) {
      menu.classList.add('fixedNav');
      menu.parentElement.classList.add('fixedNav');
      document.body.classList.add('fixedNav');
    }

  } else {
    menu.classList.remove('fixedNav');
    menu.parentElement.classList.remove('fixedNav');
    document.body.classList.remove('fixedNav');
  }
}

// open mobile submenus
function openMobileSubmenu() {
  var menu = $('.mobile_menu');
  $(menu).find(".main_li > span.arrow").unbind();
          
  $(menu).find(".main_li").each(function() {
    $(this).removeClass("opened_menu");

    if($(this).children("ul").length > 0) {
      $(this).children("ul").slideUp(500);
      $(this).children("span.arrow").on("click", function(event) {

        if(!$(this).parent().hasClass("opened_menu")) {
          $(this).parent().addClass("opened_menu");
          $(this).parent().siblings("li").removeClass("opened_menu");
          
          $(this).siblings("ul").slideDown(500);
          $(this).parent().siblings("li").children("ul").slideUp(500);

          return false;
        }

        else {
          $(this).parent().removeClass("opened_menu");
          $(this).siblings("ul").slideUp(300);
          return false;
        }
      });
    }
  });
}

$(window).scroll(function() {
  // fixed menu 
  fixedMenu();
})

$(document).ready(function() {
  // fixed menu 
  fixedMenu();

  // mobile menu open sub menu
  openMobileSubmenu();

  // feedback input animation
  var feedback = $('.feedback, .registration ');

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
      $(menu).parent().removeClass('fixedNav');

      $(fullWidthMenu).removeClass('hide').addClass('show');

      setTimeout(function() {

        if ($(fullWidthMenu).hasClass('show')) {
          $(fullWidthMenu).addClass('show-active');
          $('body').addClass('opened-menu');
        }
      }, 100)

    } else if (!$(this).hasClass('open')) {
      $(topmenuNav).removeClass('hide');
      $(languages).removeClass('hide');

      $(fullWidthMenu).removeClass('show-active');
      $('body').removeClass('opened-menu');

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

// portfolio grid
var grid = $('.our_works');

if (grid.length) {
  $(document).ready(function() {
      initGrid(grid)
  });

  $(window).resize(function() {
      initGrid(grid)
  })

}

function initGrid(grid) {
  var windowWidth = window.innerWidth;
  var width;

  if (windowWidth > 459) {
    width = 200;

    if (windowWidth > 767) {
      width = 300;
    }

    if (windowWidth > 1099) {
      width = 330;
    }

    $(grid).gridalicious({
      gutter: 10,
      width: width,
      selector: '.item',
      animate: true,
    });
  }
}

var closeWindow;

// open modal window and close it if autoclose set to true
function openModalWindow(selector, autoclose=false) {
  var modalWindow = document.querySelector(selector);
  var blur = document.querySelector('.blur');

  if (autoclose) clearInterval(closeWindow);

  modalWindow.classList.add('open');

  setTimeout(function() {

    if (modalWindow.classList.contains('open')) {
      modalWindow.classList.add('open-active');
      blur.classList.add('active');
      document.body.classList.add('modal-open')
    }
  }, 100)

  if (autoclose) {
    closeWindow = setInterval(function() {
      closeModalWindow(modalWindow)
    }, 4000)
  }
}

// close modal window 
function closeModalWindow(selector) {
  var modal = document.querySelector(selector);
  var blur = document.querySelector('.blur');
  modal.classList.remove('open-active');
  blur.classList.remove('active');
  document.body.classList.remove('modal-open')

  setTimeout(function() {

    if (!modal.classList.contains('open-active')) {
      modal.classList.remove('open');
    }
  }, 500)
}

$('.registration, .register-cont').on('click', function(e) {
  e.stopPropagation();
  var condition = $(e.target).get(0) === $('.inner_cont').get(0) || $(e.target).closest('.inner_cont').length > 0;
  if(!condition) {
    closeModalWindow('.registration')
  }
})

$('#callback_btn').on('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  openModalWindow('.registration');
})
