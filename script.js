$(document).ready(function(){
    $("#hide").click(function(){
        $(this).hide();
    });
    $(".button1").click(function(){
        $("#show").toggle();
    });
    $(".button2").click(function(){
        $("#po1").fadeOut(1000);
        $("#po2").fadeOut(2000);
        $("#po3").fadeOut(3000);
    });
    $(".button3").click(function(){
        $("#po4").fadeToggle(1000);
        $("#po5").fadeToggle(2000);
        $("#po6").fadeToggle(3000);
    });
    $(".button4").click(function(){
        $("#po7").fadeTo("slow", 0.15);
        $("#po8").fadeTo("slow", 0.4);
        $("#po9").fadeTo("slow", 0.7);
    });
});