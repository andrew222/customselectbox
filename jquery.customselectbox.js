(function($) {
    $.fn.customselectbox= function(params) {
        // TODO
        var settings = $.extend({}, params);

        if(typeof settings.position != "undefined" ){
            this.filter("select").each(function(){
              var select_elem = this,
                  ul = $("<ul/>").addClass("customselectbox_container"),
                  span = $("<span/>"),
                  li;
              $(select_elem).css("display", "none");
              $(select_elem).children("option").each(function(){
                li = transform_option_to_li($(this));
                ul.append(li);
              })
              // use default class name if span class name is not special in settings
              if(typeof settings.select_class == "undefined"){
                settings.select_class = "customselectbox";
              }
              span.addClass(settings.select_class);
              // bind event to span
              span.bind({
                hover: span_hover_handler,
                click: span_click_handler
              });
              $("body").bind("click", function(){
                $(".customselectbox_container").hide();
              })
              ul.css("display", "none");
              // set default value in span
              span.html($(this).val());
              if(settings.position == "after"){
                span.insertAfter($(select_elem));
                ul.insertAfter(span);
              }
            })
        }
    };
    var transform_option_to_li = function(option){
      var li = $("<li/>").attr({
      });
      li.addClass("customselectbox_li")
      li.html(option.text());
      li.bind("click", {option: option}, container_options_click_handler);
      return li;
    }
    var span_hover_handler = function(){
      $(this).css("cursor", "pointer");
    }
    var span_click_handler = function(event){
      var container = $(this).siblings(".customselectbox_container");
      if(container.is(":visible")){
        container.hide();
      }else{
        container.show();
      }
      event.stopPropagation(); 
    }
    // dropdown list item click handler
    var container_options_click_handler = function(event){
      var container = $(this).parent(),
          span = container.prev(),
          option = event.data.option;
      span.html($(this).text());
      // set option to select elem
      option.parent().val($(this).text());
    }
}(jQuery));
