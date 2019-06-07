$(document).ready(function(){

    $("#start").click(function(){

        $("#maze div.boundary").removeClass("youlose");
       
          
            


            $("div.boundary").mouseover(function(){

                $("#maze div.boundary").addClass("youlose");
                $("div.example").append("<h4></h4>");
                $("div.example h4").text("You Lost!");
                $(".example h4").css({"color":"red", "margin": "auto"});

                $("#start").click(function(){

                    $("#maze div.boundary").removeClass("youlose");


                });



             



            });

            $("#end").click(function(){
                $("div.example").append("<h4></h4>");
                $("div.example h4").text("You Won!");
                $(".example h4").css({"color":"blue", "margin": "auto"});
                

            });

        

        }); 
    


});