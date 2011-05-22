var popup = function(json){
    if(!json.name){
        json.name = "default";
    }
    last_popup = json.name;
    if(popup_popups[json.name]){
        popup_popups[json.name].remove();
    }

    var $div = $("<div>");
    $div.css({
        "left":json.left,
        "top":json.top
    }).addClass("popup");
     

    var $closeArea = $("<div>").css({

    }).text("×");
    var $area = $("<div>").html(json.html);

    $div.append($area);
    if(json.target){
        json.target.append($div);
    }else{
        $("body").append($div);
    }

    popup_popups[json.name] = $div;
}
var last_popup = "default";
var popup_popups = {};
var popup_close = function(){
    if(popup_popups[last_popup]){
        popup_popups[last_popup].remove();
    }
}
