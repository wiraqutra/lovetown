var pin = function(json){
    
    var $div = $("<div>").
    css({
        "top":json.top - 28,
        "left":json.left - 28
    }).
    addClass("pin")
    .click(function(e){
        var clickedX = e.pageX - json.target.get(0).offsetLeft;
        var clickedY = e.pageY - json.target.get(0).offsetTop;
        console.debug(e);
        var html = "";
        html = "<div>" + json.data + "</div>"
        var j = {"left":clickedX,"top":clickedY,"html":html,"target":json.target};
        popup(j);
    });
    $div.text(json.name);
    console.debug(json);

    $div.appendTo(json.target);
}

