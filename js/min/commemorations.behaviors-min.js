!function($){Drupal.theme.prototype.commemorationsExampleButton=function(l,a){return $('<a href="'+l+'" title="'+a+'">'+a+"</a>")},Drupal.behaviors.commemorationsExampleBehavior={attach:function(l,a){$(".some-selector",l).once("foo",function(){Drupal.theme("commemorationsExampleButton",a.myExampleLinkPath,a.myExampleLinkTitle).appendTo(this)})}},Drupal.behaviors.commemorationsGallery={attach:function(l,a){$(".l-content",l).once("node__content",function(){$(".gallery").each(function(l){var a=$(this).text().replace(/ /g,"");$(this).parents(".media").addClass("gallery-"+a);var e=$(".gallery-"+a).index();$(this).parents(".media").addClass("gallery-"+e)}),$(".gallery-1").length>1&&$(".gallery-1").wrapAll('<div class="image-gallery" />'),$(".gallery-2").length>1&&$(".gallery-2").wrapAll('<div class="image-gallery" />'),$(".gallery-3").length>1&&$(".gallery-3").wrapAll('<div class="image-gallery" />'),$(".gallery-4").length>1&&$(".gallery-4").wrapAll('<div class="image-gallery" />'),$(".gallery-5").length>1&&$(".gallery-5").wrapAll('<div class="image-gallery" />'),$(".gallery-6").length>1&&$(".gallery-6").wrapAll('<div class="image-gallery" />'),$(".gallery-7").length>1&&$(".gallery-7").wrapAll('<div class="image-gallery" />'),$(".gallery-8").length>1&&$(".gallery-8").wrapAll('<div class="image-gallery" />'),$(".gallery-9").length>1&&$(".gallery-9").wrapAll('<div class="image-gallery" />'),$(".gallery-10").length>1&&$(".gallery-10").wrapAll('<div class="image-gallery" />'),$(".gallery-11").length>1&&$(".gallery-11").wrapAll('<div class="image-gallery" />'),$(".gallery-12").length>1&&$(".gallery-12").wrapAll('<div class="image-gallery" />'),$(".gallery-13").length>1&&$(".gallery-13").wrapAll('<div class="image-gallery" />'),$(".gallery-14").length>1&&$(".gallery-14").wrapAll('<div class="image-gallery" />'),$(".gallery-15").length>1&&$(".gallery-15").wrapAll('<div class="image-gallery" />'),$(".gallery-16").length>1&&$(".gallery-16").wrapAll('<div class="image-gallery" />'),$(".gallery-17").length>1&&$(".gallery-17").wrapAll('<div class="image-gallery" />'),$(".gallery-18").length>1&&$(".gallery-18").wrapAll('<div class="image-gallery" />'),$(".gallery-19").length>1&&$(".gallery-19").wrapAll('<div class="image-gallery" />'),$(".gallery-20").length>1&&$(".gallery-20").wrapAll('<div class="image-gallery" />'),$(".gallery-21").length>1&&$(".gallery-21").wrapAll('<div class="image-gallery" />'),$(".gallery-22").length>1&&$(".gallery-22").wrapAll('<div class="image-gallery" />'),$(".gallery-23").length>1&&$(".gallery-23").wrapAll('<div class="image-gallery" />'),$(".gallery-23").length>1&&$(".gallery-23").wrapAll('<div class="image-gallery" />'),$(".gallery-24").length>1&&$(".gallery-24").wrapAll('<div class="image-gallery" />'),$(".gallery-25").length>1&&$(".gallery-25").wrapAll('<div class="image-gallery" />'),$(".gallery-26").length>1&&$(".gallery-26").wrapAll('<div class="image-gallery" />'),$(".gallery-27").length>1&&$(".gallery-27").wrapAll('<div class="image-gallery" />'),$(".gallery-28").length>1&&$(".gallery-28").wrapAll('<div class="image-gallery" data-masonry=\'{ "itemSelector": ".masonry-item", "columnWidth": 200 }\' />'),$(".gallery-29").length>1&&$(".gallery-29").wrapAll('<div class="image-gallery" />'),$(".gallery-30").length>1&&$(".gallery-30").wrapAll('<div class="image-gallery" />'),$(".gallery-31").length>1&&$(".gallery-31").wrapAll('<div class="image-gallery" />'),$(".gallery-32").length>1&&$(".gallery-32").wrapAll('<div class="image-gallery" />'),$(".gallery-33").length>1&&$(".gallery-33").wrapAll('<div class="image-gallery" />'),$(".gallery-34").length>1&&$(".gallery-34").wrapAll('<div class="image-gallery" />'),$(".gallery-35").length>1&&$(".gallery-35").wrapAll('<div class="image-gallery" />'),$(".gallery-36").length>1&&$(".gallery-36").wrapAll('<div class="image-gallery" />'),$(".gallery-37").length>1&&$(".gallery-37").wrapAll('<div class="image-gallery" />'),$(".gallery-38").length>1&&$(".gallery-38").wrapAll('<div class="image-gallery" />'),$(".gallery-39").length>1&&$(".gallery-39").wrapAll('<div class="image-gallery" />'),$(".gallery-40").length>1&&$(".gallery-40").wrapAll('<div class="image-gallery" />'),$(".gallery-41").length>1&&$(".gallery-41").wrapAll('<div class="image-gallery" />'),$(".gallery-42").length>1&&$(".gallery-42").wrapAll('<div class="image-gallery" />'),$(".gallery-43").length>1&&$(".gallery-43").wrapAll('<div class="image-gallery" />'),$(".gallery-44").length>1&&$(".gallery-44").wrapAll('<div class="image-gallery" />'),$(".gallery-45").length>1&&$(".gallery-45").wrapAll('<div class="image-gallery" />'),$(".gallery-46").length>1&&$(".gallery-46").wrapAll('<div class="image-gallery" />'),$(".gallery-47").length>1&&$(".gallery-47").wrapAll('<div class="image-gallery" />'),$(".gallery-48").length>1&&$(".gallery-48").wrapAll('<div class="image-gallery" />'),$(".gallery-49").length>1&&$(".gallery-49").wrapAll('<div class="image-gallery" />'),$(".gallery-50").length>1&&$(".gallery-50").wrapAll('<div class="image-gallery" />'),$(".gallery-51").length>1&&$(".gallery-51").wrapAll('<div class="image-gallery" />'),$(".gallery-52").length>1&&$(".gallery-52").wrapAll('<div class="image-gallery" />'),$(".gallery-53").length>1&&$(".gallery-53").wrapAll('<div class="image-gallery" />'),$(".gallery-54").length>1&&$(".gallery-54").wrapAll('<div class="image-gallery" />'),$(".gallery-55").length>1&&$(".gallery-55").wrapAll('<div class="image-gallery" />'),$(".gallery-56").length>1&&$(".gallery-56").wrapAll('<div class="image-gallery" />'),$(".gallery-57").length>1&&$(".gallery-57").wrapAll('<div class="image-gallery" />'),$(".gallery-58").length>1&&$(".gallery-58").wrapAll('<div class="image-gallery" />'),$(".gallery-59").length>1&&$(".gallery-59").wrapAll('<div class="image-gallery" />'),$(".gallery-60").length>1&&$(".gallery-60").wrapAll('<div class="image-gallery" />'),$(".gallery-61").length>1&&$(".gallery-61").wrapAll('<div class="image-gallery" />'),$(".gallery-62").length>1&&$(".gallery-62").wrapAll('<div class="image-gallery" />'),$(".gallery-63").length>1&&$(".gallery-63").wrapAll('<div class="image-gallery" />'),$(".gallery-64").length>1&&$(".gallery-64").wrapAll('<div class="image-gallery" />'),$(".gallery-65").length>1&&$(".gallery-65").wrapAll('<div class="image-gallery" />'),$(".gallery-66").length>1&&$(".gallery-66").wrapAll('<div class="image-gallery" />'),$(".gallery-67").length>1&&$(".gallery-67").wrapAll('<div class="image-gallery" />'),$(".gallery-68").length>1&&$(".gallery-68").wrapAll('<div class="image-gallery" />'),$(".gallery-69").length>1&&$(".gallery-69").wrapAll('<div class="image-gallery" />'),$(".gallery-70").length>1&&$(".gallery-70").wrapAll('<div class="image-gallery" />'),$(".gallery-71").length>1&&$(".gallery-71").wrapAll('<div class="image-gallery" />'),$(".gallery-72").length>1&&$(".gallery-72").wrapAll('<div class="image-gallery" />'),$(".gallery-73").length>1&&$(".gallery-73").wrapAll('<div class="image-gallery" />'),$(".gallery-74").length>1&&$(".gallery-74").wrapAll('<div class="image-gallery" />'),$(".gallery-75").length>1&&$(".gallery-75").wrapAll('<div class="image-gallery" />'),$(".gallery-76").length>1&&$(".gallery-76").wrapAll('<div class="image-gallery" />'),$(".gallery-77").length>1&&$(".gallery-77").wrapAll('<div class="image-gallery" />'),$(".gallery-78").length>1&&$(".gallery-78").wrapAll('<div class="image-gallery" />'),$(".gallery-79").length>1&&$(".gallery-79").wrapAll('<div class="image-gallery" />'),$(".gallery-80").length>1&&$(".gallery-80").wrapAll('<div class="image-gallery" />'),$(".gallery-81").length>1&&$(".gallery-81").wrapAll('<div class="image-gallery" />'),$(".gallery-82").length>1&&$(".gallery-82").wrapAll('<div class="image-gallery" />'),$(".gallery-83").length>1&&$(".gallery-83").wrapAll('<div class="image-gallery" />'),$(".gallery-84").length>1&&$(".gallery-84").wrapAll('<div class="image-gallery" />'),$(".gallery-85").length>1&&$(".gallery-85").wrapAll('<div class="image-gallery" />'),$(".gallery-86").length>1&&$(".gallery-86").wrapAll('<div class="image-gallery" />'),$(".gallery-87").length>1&&$(".gallery-87").wrapAll('<div class="image-gallery" />'),$(".gallery-88").length>1&&$(".gallery-88").wrapAll('<div class="image-gallery" />'),$(".gallery-89").length>1&&$(".gallery-89").wrapAll('<div class="image-gallery" />'),$(".gallery-90").length>1&&$(".gallery-90").wrapAll('<div class="image-gallery" />'),$(".gallery-91").length>1&&$(".gallery-91").wrapAll('<div class="image-gallery" />'),$(".gallery-92").length>1&&$(".gallery-92").wrapAll('<div class="image-gallery" />'),$(".gallery-93").length>1&&$(".gallery-93").wrapAll('<div class="image-gallery" />'),$(".gallery-94").length>1&&$(".gallery-94").wrapAll('<div class="image-gallery" />'),$(".gallery-95").length>1&&$(".gallery-95").wrapAll('<div class="image-gallery" />'),$(".gallery-96").length>1&&$(".gallery-96").wrapAll('<div class="image-gallery" />'),$(".gallery-97").length>1&&$(".gallery-97").wrapAll('<div class="image-gallery" />'),$(".gallery-98").length>1&&$(".gallery-98").wrapAll('<div class="image-gallery" />'),$(".gallery-99").length>1&&$(".gallery-99").wrapAll('<div class="image-gallery" />'),$(".gallery-100").length>1&&$(".gallery-100").wrapAll('<div class="image-gallery" />'),$(".gallery-101").length>1&&$(".gallery-101").wrapAll('<div class="image-gallery" />'),$(".gallery-102").length>1&&$(".gallery-102").wrapAll('<div class="image-gallery" />'),$(".gallery-103").length>1&&$(".gallery-103").wrapAll('<div class="image-gallery" />'),$(".gallery-104").length>1&&$(".gallery-104").wrapAll('<div class="image-gallery" />'),$(".gallery-105").length>1&&$(".gallery-105").wrapAll('<div class="image-gallery" />'),$(".gallery-106").length>1&&$(".gallery-106").wrapAll('<div class="image-gallery" />')}),$(".image-gallery").children('.media[class*="gallery-"]').addClass("masonry-item")}},Drupal.behaviors.commemorationsReadMore={attach:function(l,a){$(".middle-wrapper",l).once("readMore",function(){var l=$('<input type="button" class="button" value="Expand"/>');$(".read-more").before(l),$(".read-more").slideUp(),$(".read-more").prev(".button").click(function(){"Expand"===$(this).attr("value")?$(this).attr("value","Collapse").next().slideDown():$(this).attr("value","Expand").next().slideUp()})})}},Drupal.behaviors.commemorationsConflictMenu={attach:function(l,a){$(".left-sidebar-wrapper",l).once("conflictMenu",function(){})}}}(jQuery);