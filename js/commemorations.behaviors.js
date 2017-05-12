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
//   Drupal.behaviors.commemorationsGallery = {
//     attach: function (context, settings) {
//       // By using the 'context' variable we make sure that our code only runs on
//       // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
//       // we don't run the same piece of code for an HTML snippet that we already
//       // processed previously. By using .once('foo') all processed elements will
//       // get tagged with a 'foo-processed' class, causing all future invocations
//       // of this behavior to ignore them.
//       $('.l-content', context).once('node__content', function () {
// //        Now, we are invoking the previously declared theme function using two
// //        settings as arguments.replace(/ /g,'')
//         $('.gallery').each(function (i) {
//           var $gallery = $(this).text().replace(/ /g, '');
//           $(this).parents('.media').addClass('gallery-' + $gallery);
//           var $galleryNum = $('.gallery-' + $gallery).index();
//           $(this).parents('.media').addClass('gallery-' + $galleryNum);
//         });
//         if ($('.gallery-1').length > 1) {
//           $('.gallery-1').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-2').length > 1) {
//           $('.gallery-2').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-3').length > 1) {
//           $('.gallery-3').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-4').length > 1) {
//           $('.gallery-4').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-5').length > 1) {
//           $('.gallery-5').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-6').length > 1) {
//           $('.gallery-6').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-7').length > 1) {
//           $('.gallery-7').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-8').length > 1) {
//           $('.gallery-8').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-9').length > 1) {
//           $('.gallery-9').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-10').length > 1) {
//           $('.gallery-10').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-11').length > 1) {
//           $('.gallery-11').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-12').length > 1) {
//           $('.gallery-12').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-13').length > 1) {
//           $('.gallery-13').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-14').length > 1) {
//           $('.gallery-14').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-15').length > 1) {
//           $('.gallery-15').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-16').length > 1) {
//           $('.gallery-16').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-17').length > 1) {
//           $('.gallery-17').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-18').length > 1) {
//           $('.gallery-18').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-19').length > 1) {
//           $('.gallery-19').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-20').length > 1) {
//           $('.gallery-20').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-21').length > 1) {
//           $('.gallery-21').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-22').length > 1) {
//           $('.gallery-22').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-23').length > 1) {
//           $('.gallery-23').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-23').length > 1) {
//           $('.gallery-23').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-24').length > 1) {
//           $('.gallery-24').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-25').length > 1) {
//           $('.gallery-25').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-26').length > 1) {
//           $('.gallery-26').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-27').length > 1) {
//           $('.gallery-27').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-28').length > 1) {
//           $('.gallery-28').wrapAll('<div class="image-gallery" data-masonry=\'{ "itemSelector": ".masonry-item", "columnWidth": 200 }\' />');
//         }  
//         if ($('.gallery-29').length > 1) {
//           $('.gallery-29').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-30').length > 1) {
//           $('.gallery-30').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-31').length > 1) {
//           $('.gallery-31').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-32').length > 1) {
//           $('.gallery-32').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-33').length > 1) {
//           $('.gallery-33').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-34').length > 1) {
//           $('.gallery-34').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-35').length > 1) {
//           $('.gallery-35').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-36').length > 1) {
//           $('.gallery-36').wrapAll('<div class="image-gallery" />');
//         }    
//         if ($('.gallery-37').length > 1) {
//           $('.gallery-37').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-38').length > 1) {
//           $('.gallery-38').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-39').length > 1) {
//           $('.gallery-39').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-40').length > 1) {
//           $('.gallery-40').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-41').length > 1) {
//           $('.gallery-41').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-42').length > 1) {
//           $('.gallery-42').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-43').length > 1) {
//           $('.gallery-43').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-44').length > 1) {
//           $('.gallery-44').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-45').length > 1) {
//           $('.gallery-45').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-46').length > 1) {
//           $('.gallery-46').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-47').length > 1) {
//           $('.gallery-47').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-48').length > 1) {
//           $('.gallery-48').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-49').length > 1) {
//           $('.gallery-49').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-50').length > 1) {
//           $('.gallery-50').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-51').length > 1) {
//           $('.gallery-51').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-52').length > 1) {
//           $('.gallery-52').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-53').length > 1) {
//           $('.gallery-53').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-54').length > 1) {
//           $('.gallery-54').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-55').length > 1) {
//           $('.gallery-55').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-56').length > 1) {
//           $('.gallery-56').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-57').length > 1) {
//           $('.gallery-57').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-58').length > 1) {
//           $('.gallery-58').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-59').length > 1) {
//           $('.gallery-59').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-60').length > 1) {
//           $('.gallery-60').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-61').length > 1) {
//           $('.gallery-61').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-62').length > 1) {
//           $('.gallery-62').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-63').length > 1) {
//           $('.gallery-63').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-64').length > 1) {
//           $('.gallery-64').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-65').length > 1) {
//           $('.gallery-65').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-66').length > 1) {
//           $('.gallery-66').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-67').length > 1) {
//           $('.gallery-67').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-68').length > 1) {
//           $('.gallery-68').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-69').length > 1) {
//           $('.gallery-69').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-70').length > 1) {
//           $('.gallery-70').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-71').length > 1) {
//           $('.gallery-71').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-72').length > 1) {
//           $('.gallery-72').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-73').length > 1) {
//           $('.gallery-73').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-74').length > 1) {
//           $('.gallery-74').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-75').length > 1) {
//           $('.gallery-75').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-76').length > 1) {
//           $('.gallery-76').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-77').length > 1) {
//           $('.gallery-77').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-78').length > 1) {
//           $('.gallery-78').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-79').length > 1) {
//           $('.gallery-79').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-80').length > 1) {
//           $('.gallery-80').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-81').length > 1) {
//           $('.gallery-81').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-82').length > 1) {
//           $('.gallery-82').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-83').length > 1) {
//           $('.gallery-83').wrapAll('<div class="image-gallery" />');
//         }  
//         if ($('.gallery-84').length > 1) {
//           $('.gallery-84').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-85').length > 1) {
//           $('.gallery-85').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-86').length > 1) {
//           $('.gallery-86').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-87').length > 1) {
//           $('.gallery-87').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-88').length > 1) {
//           $('.gallery-88').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-89').length > 1) {
//           $('.gallery-89').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-90').length > 1) {
//           $('.gallery-90').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-91').length > 1) {
//           $('.gallery-91').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-92').length > 1) {
//           $('.gallery-92').wrapAll('<div class="image-gallery" />');
//         }
//         if ($('.gallery-93').length > 1) {
//           $('.gallery-93').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-94').length > 1) {
//           $('.gallery-94').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-95').length > 1) {
//           $('.gallery-95').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-96').length > 1) {
//           $('.gallery-96').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-97').length > 1) {
//           $('.gallery-97').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-98').length > 1) {
//           $('.gallery-98').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-99').length > 1) {
//           $('.gallery-99').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-100').length > 1) {
//           $('.gallery-100').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-101').length > 1) {
//           $('.gallery-101').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-102').length > 1) {
//           $('.gallery-102').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-103').length > 1) {
//           $('.gallery-103').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-104').length > 1) {
//           $('.gallery-104').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-105').length > 1) {
//           $('.gallery-105').wrapAll('<div class="image-gallery" />');
//         } 
//         if ($('.gallery-106').length > 1) {
//           $('.gallery-106').wrapAll('<div class="image-gallery" />');
//         } 
//       });
// $('.image-gallery').children('.media[class*="gallery-"]').addClass('masonry-item');
// //------------------------ jQuery gallery improved-----------
// // $('.gallery').each(function (i) {
// //   var $gallery = $(this).text().replace(/ /g, '');
// //   $(this).parents('.media').addClass('gallery-' + $gallery);
// //   var $galleryNum = $('.gallery-' + $gallery).index();
// //   $(this).parents('.media').addClass('gallery-' + $galleryNum);
// // });
// // $('div.media[class*="gallery-"]').css('background-color', 'red');
// // if ($('div.media[class*="gallery-"]').length > 1) {
// //  console.log(this);
// //  if ($('div.media[class*="gallery-"]') === ('div.media[class*="gallery-"]')) {
// //   console.log('here');
// //  $('div.media[class*="gallery-"]').wrapAll('<div class="image-gallery-new" />');
// // }
// // }
// //------------- End --------------
// }
// };

Drupal.behaviors.commemorationsReadMore = {
  attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.middle-wrapper', context).once('readMore', function () {
        var expand = $('<input type="button" class="button" value="Expand"/>');
        $('.read-more').before(expand);
        $('.read-more').slideUp();
        $('.read-more').prev('.button').click(function() {
          if($(this).attr('value') === 'Expand'){
            $(this).attr('value', 'Collapse').next().slideDown();
          }
          else {
            $(this).attr('value', 'Expand').next().slideUp();
          }
        });
      });
    }
  };
  Drupal.behaviors.commemorationsParentHeader = {
  attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.full-width', context).once('parentHeader', function () {
        $('.full-width').find('div.header li.leaf[class*="menu-mlid-"] a').wrap('<div class="background-header" />');
      });
    }
  };
  Drupal.behaviors.commemorationsSummaryRelatedContent = {
  attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.related-content', context).once('summaryRelatedContent', function () {
        $('div.field__items>.field__item').find('.group-summary-text:first-child').parent().addClass('summary-related-content');
      });
    }
  };
  
})(jQuery);

