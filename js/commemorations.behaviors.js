(function ($) {

  /**
   * The recommended way for producing HTML markup through JavaScript is to write
   * theming functions. These are similiar to the theming functions that you might
   * know from 'phptemplate' (the default PHP templating engine used by most
   * Drupal themes including Omega). JavaScript theme functions accept arguments
   * and can be overriden by sub-themes.
   *
   * In most cases, there is no good reason to NOT wrap your markup producing
   * JavaScript in a theme function.
   */
   Drupal.theme.prototype.commemorationsExampleButton = function (path, title) {
    // Create an anchor element with jQuery.
    return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
  };

  /**
   * Behaviors are Drupal's way of applying JavaScript to a page. In short, the
   * advantage of Behaviors over a simple 'document.ready()' lies in how it
   * interacts with content loaded through Ajax. Opposed to the
   * 'document.ready()' event which is only fired once when the page is
   * initially loaded, behaviors get re-executed whenever something is added to
   * the page through Ajax.
   *
   * You can attach as many behaviors as you wish. In fact, instead of overloading
   * a single behavior with multiple, completely unrelated tasks you should create
   * a separate behavior for every separate task.
   *
   * In most cases, there is no good reason to NOT wrap your JavaScript code in a
   * behavior.
   *
   * @param context
   *   The context for which the behavior is being executed. This is either the
   *   full page or a piece of HTML that was just added through Ajax.
   * @param settings
   *   An array of settings (added through drupal_add_js()). Instead of accessing
   *   Drupal.settings directly you should use this because of potential
   *   modifications made by the Ajax callback that also produced 'context'.
   */
   Drupal.behaviors.commemorationsExampleBehavior = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.some-selector', context).once('foo', function () {
        // Now, we are invoking the previously declared theme function using two
        // settings as arguments.
        var $anchor = Drupal.theme('commemorationsExampleButton', settings.myExampleLinkPath, settings.myExampleLinkTitle);

        // The anchor is then appended to the current element.
        $anchor.appendTo(this);
      });
    }
  };
  Drupal.behaviors.commemorationsGallery = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.l-content', context).once('node__content', function () {
        // Now, we are invoking the previously declared theme function using two
        // settings as arguments.replace(/ /g,'')
        $('.gallery').each(function (i) {
          var $gallery = $(this).text().replace(/ /g, '');
          $(this).parents('.media').addClass('gallery-' + $gallery);
          var $galleryNum = $('.gallery-' + $gallery).index();
          $(this).parents('.media').addClass('gallery-' + $galleryNum);
        });
        if ($('.gallery-1').length > 1) {
          $('.gallery-1').wrapAll('<div class="image-gallery" />');
        }
        if ($('.gallery-2').length > 1) {
          $('.gallery-2').wrapAll('<div class="image-gallery" />');
        }
        if ($('.gallery-3').length > 1) {
          $('.gallery-3').wrapAll('<div class="image-gallery" />');
        }
        if ($('.gallery-4').length > 1) {
          $('.gallery-4').wrapAll('<div class="image-gallery" />');
        }
        if ($('.gallery-5').length > 1) {
          $('.gallery-5').wrapAll('<div class="image-gallery" />');
        }
        if ($('.gallery-6').length > 1) {
          $('.gallery-6').wrapAll('<div class="image-gallery" />');
        }
        if ($('.gallery-7').length > 1) {
          $('.gallery-7').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-8').length > 1) {
          $('.gallery-8').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-9').length > 1) {
          $('.gallery-9').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-10').length > 1) {
          $('.gallery-10').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-11').length > 1) {
          $('.gallery-11').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-12').length > 1) {
          $('.gallery-12').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-13').length > 1) {
          $('.gallery-13').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-14').length > 1) {
          $('.gallery-14').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-15').length > 1) {
          $('.gallery-15').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-16').length > 1) {
          $('.gallery-16').wrapAll('<div class="image-gallery" />');
        }
        if ($('.gallery-17').length > 1) {
          $('.gallery-17').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-18').length > 1) {
          $('.gallery-18').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-19').length > 1) {
          $('.gallery-19').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-20').length > 1) {
          $('.gallery-20').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-21').length > 1) {
          $('.gallery-21').wrapAll('<div class="image-gallery" />');
        } 
        if ($('.gallery-22').length > 1) {
          $('.gallery-22').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-23').length > 1) {
          $('.gallery-23').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-23').length > 1) {
          $('.gallery-23').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-24').length > 1) {
          $('.gallery-24').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-25').length > 1) {
          $('.gallery-25').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-26').length > 1) {
          $('.gallery-26').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-27').length > 1) {
          $('.gallery-27').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-28').length > 1) {
          $('.gallery-28').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-29').length > 1) {
          $('.gallery-29').wrapAll('<div class="image-gallery" />');
        }  
        if ($('.gallery-30').length > 1) {
          $('.gallery-30').wrapAll('<div class="image-gallery" />');
        }  
      });
    }
  };
  Drupal.behaviors.commemorationsMasonry = {
    attach: function (context, settings) {
      $('.l-content', context).once('node__content', function () {
        var elem = document.querySelector('.image-gallery');
        var msnry = new Masonry( elem, {
          itemSelector: '.media',
          columnWidth: 300
        });
      });
    }
  };
})(jQuery);
