jQuery(document).ready(function( $ ) {




  $(".top-mnu, .s-open-menu").click(function (e) {
    e.stopPropagation();
  });

  $('.reviews__actions-open ul li a').click(function (e) {
    e.preventDefault();
    let text = $(this).text();
    $('.reviews__actions-selected span').html(text);
    $('.reviews__actions-open').slideUp(300);
    $(".reviews__actions-selected").removeClass('open');
  });

  $('.reviews__actions-selected').click(function () {
    $(this).toggleClass('open');
    $('.reviews__actions-open').slideToggle(300);
  })


  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.top-mnu').toggleClass("open");    
    $('.top__phone').toggleClass("open");    
    $('.top__inf._adr').toggleClass('hide');
  });



  $('.open-menu-close').click(function () {
    $('.s-open-menu').slideUp();
    $('.top-mnu__serv-link').removeClass('active');
    $('body').removeClass('ohi');
  });


  $('.mnu-arrow').click(function () {
    $(this).toggleClass('open');
    $(this).closest('li').toggleClass('current');
    $(this).closest('li').find('.open-menu__inn').slideToggle().toggleClass('show');
  });


  $('.mnu-arrow2').click(function () {
    $(this).toggleClass('open');
    $('.open-menu-parent__ul').slideToggle().toggleClass('show');
  });

  $('.mnu-arrow3').click(function () {
    $(this).toggleClass('open');
    $(this).next('.child-ul__w').slideToggle();
  });
  

  if ($(window).width() >= 1200) {
    $('body').click(function () {
      if( $(".toggle-mnu").hasClass("on") ){
        $(".top-mnu").fadeOut();
      }
      $(this).removeClass("ohi");
      $('.s-open-menu').slideUp();
    });
  }
  
  if ($(window).width() >= 1200) {
    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();


      if (scrollTop > 107) {
        $('.top').addClass('slide');
      }

      if (scrollTop > 500) {
        $('.top').addClass('fixed');
      }

      if (scrollTop < 200) {
        $('.top').removeClass('fixed');
        $('.top').removeClass('slide');
      }
    });
  }//1200

  if ($(window).width() < 1200) {
    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > 107) {
        $('.top').addClass('slide');
      }

      if (scrollTop > 200) {
        $('.top').addClass('fixed');
      }

      if (scrollTop < 100) {
        $('.top').removeClass('fixed');
        $('.top').removeClass('slide');
      }
    });
  }//1200


  if ($(window).width() >= 1200) {
    $('.top-mnu__serv-link').click(function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $('body').toggleClass('ohi');
      $('.s-open-menu').slideToggle();
    });
    $(function () {

      function updateRightBlock($item) {

        // Активный пункт
        $item
        .addClass('current')
        .siblings()
        .removeClass('current');

        // Ссылка и текст
        var $link = $item.children('a');
        var title = $.trim($link.clone().children().remove().end().text());
        var href = $link.attr('href');

        // Клонируем список
        var $list = $item.children('.open-menu__inn').clone();

        // Правый блок
        var $right = $('.open-menu__r-list-item');

        // Очищаем
        $right.empty();

        // Добавляем заголовок
        $right.append(
          $('<a>', {
            href: href,
            class: 'open-menu__title',
            text: title
          })
          );

        // Добавляем список
        $right.append($list);
      }

    // Наведение на пункты меню
      $('.open-menu-parent__ul').on('mouseenter', '> li', function () {
        updateRightBlock($(this));
      });

    // Заполняем при загрузке страницы
      var $current = $('.open-menu-parent__ul > li.current');

      if (!$current.length) {
        $current = $('.open-menu-parent__ul > li:first');
      }

      updateRightBlock($current);

    });
  }

  



  $('.history__sl').slick({            
    infinite: true,    
    slidesToShow: 1,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 10,    
    cssEase: 'ease-out',
    dots: true,
    arrows: true,
    responsive: [

      {
        breakpoint: 640,
        settings: {
          arrows: false,
        }
      },    
    ]
  });

  function reviewsSlider() {
    if ($(window).width() >= 768) {
      if (!$('.mreviews__sl').hasClass('slick-initialized')) {
        $('.mreviews__sl').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 200,
          autoplay: false,
          touchThreshold: 10,
          centerMode: true,
          cssEase: 'ease-out',
          dots: true,
          arrows: true
        });
      }
    } else {
      if ($('.mreviews__sl').hasClass('slick-initialized')) {
        $('.mreviews__sl').slick('unslick');
      }
    }
  }

  reviewsSlider();
  $(window).on('resize', reviewsSlider);


  $('.cphotos__sl').slick({            
    infinite: true,    
    slidesToShow: 3,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 10,    
    cssEase: 'ease-out',
    dots: false,
    arrows: true,
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          variablewidth: true
        }
      },    
    ]
  });

  $('.mpromo__sl').slick({            
    infinite: true,    
    slidesToShow: 2,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 10,    
    cssEase: 'ease-out',
    dots: false,
    arrows: true,
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          variablewidth: false,
          arrows: false,
        }
      },  
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,          
          arrows: false,
        }
      },   
    ]
  });
  
  $('.mdoctors__sl').slick({            
    infinite: true,    
    slidesToShow: 4,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 10,    
    cssEase: 'ease-out',
    dots: false,
    arrows: true,
    responsive: [

      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,          
        }
      },    
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,          
        }
      },    
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          variablewidth: true,
          arrows: false,
        }
      },    
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,          
          arrows: false,
        }
      },    
    ]
  });




  var $slider1 = $('.when__sl');
  /*var $blogRow = $('.blog__row');*/
  
  var slickOptions = {
    // ваши настройки слайдера (пример)
    slidesToShow: 2,
    infinite: true, 
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    variableWidth: false
  };

  function initSlick() {
    if ($slider1.hasClass('slick-initialized')) {
      return; // уже инициализирован
    }
    $slider1.slick(slickOptions);

    
  }

  function destroySlick() {
    if ($slider1.hasClass('slick-initialized')) {
      $slider1.slick('unslick');
    }
  }


  



  function checkWidthAndToggle() {
    var windowWidth = $(window).width();
    if (windowWidth < 991) {
      initSlick();
    } else {
      destroySlick();
    }
  }





  

  // Запускаем при загрузке
  checkWidthAndToggle();

  // Следим за изменением размера окна (с задержкой для оптимизации)
  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      checkWidthAndToggle();
    }, 150);
  });



  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: true,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });




  $('[data-fancybox="mvideo"]').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
      media : {}
    }
  });

/************************************/

/*  $('.wrapper').prepend('<span class="eye-3"></span>');
  const url = window.location.href;
  const match = url.match(/(\d+-?\d*)\.html$/);
  const pg = match[1];
  $('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

  $('.eye-3').click(function (e) {
    e.preventDefault();  
    $('body').toggleClass('active');    
    $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
    $('body:not(.active)').css('background-image', "unset");
  });*/

/************************************/

  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });
    
  }

  popup('.link', '.modal-overlay_1', '.modal-close_1');
  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.link3', '.modal-overlay_3', '.modal-close_3');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 250}, 400);
    return false;
  });


  $('.to-top').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800); // 800ms - время анимации
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.to-top').show(400);
    }
    else {
     $('.to-top').hide();
   }
 });

  if($('select').length) {
    $('select').each(function () {
      $(this).select2({
        minimumResultsForSearch: -1,
        dropdownParent: $(this).parent()
      });
    });
  }

  function showHide(elem) {
    let block = $(elem);    
    var button = block.find('.toggle');
    button.html(button.data('text'));
    button.click(function(e){
      e.preventDefault();      
      let desc = $(this).prev();      
      desc.toggleClass('more');
      var swap = $(this).data('swap');
      var text = $(this).data('text');
      $(this).data('text', swap);
      $(this).data('swap', text);
      $(this).html(swap);
    });
  }

  showHide('.open-element');
  showHide('.reviews__top');


  $('.banner video').on('error', function() {
    $(this).hide(); // скрываем видео при ошибке, показывается картинка-заглушка
  });


  $('.accordion-item').click(function () {
    $(this).find('.accordion-header').toggleClass('active-header'); $(this).find('.accordion-content').slideToggle().toggleClass('open-content');
  });


  $(function () {

    function tableMobile() {

      $('.content__table').each(function () {

        const $wrapper = $(this);
        const $table = $wrapper.find('table');
        let $mobile = $wrapper.find('.table-mobile');

        if ($(window).width() <= 768) {

                // Создаем мобильную версию только один раз
          if (!$mobile.length) {

            $mobile = $('<div class="table-mobile"></div>');

            $table.find('thead tr').children().each(function (colIndex) {

              const $group = $('<div class="table-mobile__group"></div>');

              $group.append(
                $('<div class="table-mobile__title"></div>').html($(this).html())
                );

              $table.find('tbody tr').each(function () {
                $group.append(
                  $('<div class="table-mobile__item"></div>')
                  .html($(this).children().eq(colIndex).html())
                  );
              });

              $mobile.append($group);

            });

            $table.after($mobile);
          }

          $table.hide();
          $mobile.show();

        } else {

          $table.show();

          if ($mobile.length) {
            $mobile.hide();
          }

        }

      });

    }

    let resizeTimer;

    tableMobile();

    $(window).on('resize', function () {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(function () {
        tableMobile();
      }, 100);
    });

  });


// Функция для управления cookie-уведомлением
  function initCookieConsent() {
    const $cookieBanner = $('.cookies');
    const $acceptButton = $('.cookies__btn');

  // Ключ для хранения в localStorage
    const STORAGE_KEY = 'cookie_consent_accepted';

  // Проверяем, давал ли пользователь согласие ранее
    const hasConsent = localStorage.getItem(STORAGE_KEY);

  // Если согласие не было дано, показываем баннер
    if (!hasConsent) {
    // Добавляем небольшой таймаут для плавного появления (опционально)
      setTimeout(() => {
        $cookieBanner.addClass('show');
      }, 500);
    }

  // Обработчик клика по кнопке "Ok"
    $acceptButton.on('click', function() {
    // Скрываем баннер
      $cookieBanner.removeClass('show');

    // Сохраняем информацию о согласии в localStorage
      localStorage.setItem(STORAGE_KEY, 'true');
    });
  }

  initCookieConsent();


  let inputFile = document.querySelector('#fileMulti');
  let imgWrapper = document.querySelector('.addform_file-label span');


  function download2(input) {
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
/*  reader.onload = function () {    
imgWrapper.innerHTML = file.name;
}*/
    reader.onload = ev => {
      const src = ev.target.result
      imgWrapper.innerHTML = `${file.name}`
    }
  }


  if ($('#fileMulti').length) {
    inputFile.addEventListener("change", function () {
      download2(this);
    });
  }


}); //ready

