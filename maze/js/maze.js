$(document).ready(function(){

    var start = 0;
    $("#start").click(function(){

        start = 1;

        $("#status").text("Click the \"S\" to begin.")
        $("#maze div.boundary").removeClass("youlose");
       
          
            


            $("div.boundary").mouseover(function(){
                if(start==1){

                $("#maze div.boundary").addClass("youlose");
                start =0;
               
                }

                $("#start").click(function(){

                    $("#maze div.boundary").removeClass("youlose");


                });



             



            });

            $("#maze").mouseleave(function(){

                if(start==1){

                    $("#maze div.boundary").addClass("youlose");
                    start =0;
                   
                    }
    
                    $("#start").click(function(){
    
                        $("#maze div.boundary").removeClass("youlose");
    
    
                    });

            });

            $("#end").click(function(){

                if(start==1){
                $("#status").text("You Won!")
                start =0;
                }

                 

            });

        

        }); 
    


});