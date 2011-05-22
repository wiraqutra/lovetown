$(document).ready(function(){
    $(".machitarget").bind("contextmenu", function(e){
        var json = {};
        var clickedX;
        var clickedY;
        var html="";
        html += "<div id='addPin'>ピンを追加する</div>";
        clickedX = e.pageX - this.offsetLeft;
        clickedY = e.pageY - this.offsetTop;
        json = {"left":clickedX, "top":clickedY, "html":html, "target":$(this)};
        popup(json);
        return false;
    });

    $(".popup").live("mouseover", function(){
        $(this).css("backgroundColor", "blue");
        $(this).css("color","#FFF");
    });
    $(".popup").live("mouseout", function(){
        $(this).css("backgroundColor", "#FFF");
        $(this).css("color","#000");
    });	
    
    $("#addPin").live("click", function(){
        $("#dialog-form").dialog( "open" );
        popup_close();
    });
    $(function() {
        // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
        $( "#dialog:ui-dialog" ).dialog( "destroy" );
        
        var name = $( "#image" ),
            email = $( "#tags" ),
            password = $( "#comment" ),
            allFields = $( [] ).add( name ).add( email ).add( password ),
            tips = $( ".validateTips" );

        function updateTips( t ) {
            tips
                .text( t )
                .addClass( "ui-state-highlight" );
            setTimeout(function() {
                tips.removeClass( "ui-state-highlight", 1500 );
            }, 500 );
        }

        function checkLength( o, n, min, max ) {
            if ( o.val().length > max || o.val().length < min ) {
                o.addClass( "ui-state-error" );
                updateTips( "Length of " + n + " must be between " +
                    min + " and " + max + "." );
                return false;
            } else {
                return true;
            }
        }

        function checkRegexp( o, regexp, n ) {
            if ( !( regexp.test( o.val() ) ) ) {
                o.addClass( "ui-state-error" );
                updateTips( n );
                return false;
            } else {
                return true;
            }
        }
        
        $( "#dialog-form" ).dialog({
            autoOpen: false,
            height: 300,
            width: 350,
            modal: true,
            buttons: {
                "OK": function() {
                    var bValid = true;
                    allFields.removeClass( "ui-state-error" );

                    //bValid = bValid && checkLength( image, "image", 3, 16 );
                    //bValid = bValid && checkLength( tags, "tags", 6, 80 );
                    //bValid = bValid && checkLength( comment, "comment", 5, 16 );

                    //bValid = bValid && checkRegexp( image, /^[a-z]([0-9a-z_])+$/i, "Username may consist of a-z, 0-9, underscores, begin with a letter." );
                    // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
                    //bValid = bValid && checkRegexp( tags, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. ui@jquery.com" );
                    //bValid = bValid && checkRegexp( comment, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

                    if ( bValid ) {
                        $( "#users tbody" ).append( "<tr>" +
                            "<td>" + image.val() + "</td>" + 
                            "<td>" + tags.val() + "</td>" + 
                            "<td>" + comment.val() + "</td>" +
                        "</tr>" ); 
                        $( this ).dialog( "close" );
                    }
                },
                "キャンセル": function() {
                    $( this ).dialog( "close" );
                }
            },
            close: function() {
                allFields.val( "" ).removeClass( "ui-state-error" );
            }
        });

        //$( "#create-user" )
        //   .button()
        //    .click(function() {
        //        $( "#dialog-form" ).dialog( "open" );
        //});
    });
	return;
    $(".machitarget").click(function(e){
        var json = {};
        var clickedX;
        var clickedY;
        var html="";
        html += "<div>コメントなどが表示されます。</div>";
        clickedX = e.pageX - this.offsetLeft;
        clickedY = e.pageY - this.offsetTop;
        json = {"left":clickedX,"top":clickedY,"html":html,"target":$(this)};
        popup(json);
    });
});
