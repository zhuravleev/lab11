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
    $(".button5").click(function(){
        $(".slide").slideUp();
    });
    $(".button6").click(function(){
        $(".slide1").slideToggle();
    });
    $(".button7").click(function(){
        var div = $(".animate");
        div.animate({height: '200px', opacity: '0.4'}, "slow");
        div.animate({width: '200px', opacity: '0.8'}, "slow");
        div.animate({height: '50px', opacity: '0.4'}, "slow");
        div.animate({width: '50px', opacity: '0.8'}, "slow");
    }); 
    $(".button8").click(function(){
        alert("Мои ФИО: " + $("#hide").text());
    });
    $(".button9").click(function(){
        alert("Код таблицы: " + $("#tbl").html());
    });
    $(".button10").click(function(){
        alert("Ссылка на место обучения: " + $("#link").attr("href"));
    });
    $(".button11").click(function(){
        $("#Aia").append(" отличное")
    });
    $(".button12").click(function(){
        $("#Bel").prepend("Очень высокая ")
    });
    $(".button").click(function(){
        $("p").addClass("white");
    });
});