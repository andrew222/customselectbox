(function($) {
    $.fn.customselectbox= function(params) {
        if(typeof params.position != "undefined" ){
            this.filter("select").each(function(){
              var select_elem = this,
                  ul = $("<ul/>").addClass("customselectbox_containter"),
                  span = $("<span/>").addClass("customcustombox"),
                  li;
              $(select_elem).css("display", "none");
              $(select_elem).children("option").each(function(){
                li = transform_option_to_li($(this));
                ul.append(li);
              })
              span.addClass("customselectbox");
              //span.css({
                //width: $(select_elem).css("width"),
                //padding: "10px",
                //background: "#FBFBFB"
              //})
              if(params.position == "bottom"){
                span.html("place select value here")
                span.insertAfter($(select_elem));
                //ul.insertAfter($(select_elem));
              }
            })
        }
    };
    var transform_option_to_li = function(option){
      var li = $("<li/>").attr({
      });
      li.addClass("customselectbox_li")
      li.html(option.text());
      console.log(option);
      return li;
    }
}(jQuery));
