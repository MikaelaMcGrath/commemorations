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
        $('.vc-map').slideUp().addClass('collapsed');
        $('.vc-body .map-more').addClass('collapsed');
        $('.vc-body .map-more').click(function() {
          if($(this).hasClass('collapsed')) {
            $(this).parent('.vc-body').next('.vc-map').slideDown().addClass('expanded').removeClass('collapsed');
            $(this).addClass('expanded').removeClass('collapsed').html('<a>Hide map</a>');
          }
          else {
            $(this).parent('.vc-body').next('.vc-map').slideUp().addClass('collapsed').removeClass('expanded');
            $(this).addClass('collapsed').removeClass('expanded').html('<a>View map</a>');
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
        $('.full-width').find('div.header li.leaf[class*="menu-mlid-"] a').wrap('<div class="background-header" />').wrap('<h1>');
      });
    }
  };
  Drupal.behaviors.commemorationsRelatedContent = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.related-content', context).once('RelatedContent', function () {
        $('div.field__items>.field__item').find('.group-summary-text:first-child').parent().addClass('text-summary-related-content');
        $('div.field__items>.field__item').find('.image-paragraph').parent().addClass('image-related-content');
        $('div.field__items>.field__item').find('.paragraphs-item-video').parent().addClass('video-related-content');
        $('div.field__items>.field__item').find('.paragraphs-item-audio').parent().addClass('audio-related-content');
      });
    }
  };
  Drupal.behaviors.commemorationsExtension = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.l-content', context).once('extension', function () {
        $("a:contains('pdf'), a:contains('docx'), a:contains('doc')").html(function(_, html) {
          return html.replace(/(pdf)/g, '<span class="ext-caps">$1</span>').replace(/(docx)/g, '<span class="ext-caps">$1</span>').replace(/(doc)/g, '<span class="ext-caps">$1</span>');
        });
      });
    }
  };
  Drupal.behaviors.commemorationsRandomHome = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.full-width', context).once('randomHome', function () {
        var images = ['1', '2', '3', '4', '5', '6'];
        $('.front .header-home').css({'background-image': 'url(sites/all/themes/custom/commemorations/images/header/home-' + images[Math.floor(Math.random() * images.length)] + '.jpg)'});
      });
    }
  };
  Drupal.behaviors.commemorationsViewMore = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      //$('.view-id-child_content .view-content', context).once('viewMore', function () {
        //$('.more-link').replaceWith($('.views-row-1 .menu-path'));
      //});
      // $('.education', context).once('ed', function () {
      //   var showChar = 256;
      //   var ellipsestext = "...";
      //   var moretext = "See More";
      //   var lesstext = "See Less";
      //   $('.education-body').each(function () {
      //       var content = $(this).html();
      //       if (content.length > showChar) {
      //           var show_content = content.substr(0, showChar);
      //           var hide_content = content.substr(showChar, content.length - showChar);
      //           var html = show_content + '<span class="moreelipses">' + ellipsestext + '</span><span class="remaining-content"><span>' + hide_content + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
      //           $(this).html(html);
      //       }
      //   });

      //   $(".morelink").click(function () {
      //       if ($(this).hasClass("less")) {
      //           $(this).removeClass("less");
      //           $(this).html(moretext);
      //       } else {
      //           $(this).addClass("less");
      //           $(this).html(lesstext);
      //       }
      //       $(this).parent().prev().toggle();
            
      //   });
      // });
    }
  };
  Drupal.behaviors.commemorationsLandscapeImage = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.education', context).once('landscape-image', function () {
        $('.education-image').each(function() {
          var $width = $(this).find('img').attr('width');
          var $height = $(this).find('img').attr('height');
          $(this).addClass($width > $height ? 'landscape' : 'portrait')
        });
        

      });
    }
  };
})(jQuery);

