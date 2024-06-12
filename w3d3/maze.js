$(document).ready(function(){
        let fault=false;
        let start=true;
    $("#start").click(function(){
        if(start===true){
            $(".boundary").removeClass('youlose');
            $("#status").text('Go!');
        }
        fault=false;
        start=true;
        $(".boundary").mouseover(function(){
            if(start===true){
                $(".boundary").addClass('youlose');
                fault=true;
            }
        });

        $("#end").mouseover(function(){
            if(start===true){
                if(fault!==true){
                    $("#status").text("You win");
                } else {
                    $("#status").text("You lose");
                }
            }
            start=false;
        });
    
        $("#maze").mouseleave(function(){
            if(start===true){
            $(".boundary").addClass('youlose');
            $("#status").text("You lose");
            }
            start=false;
        });
    
        $(".boundary").removeClass('youlose');
        $("#status").text('Go!');
        
    });
});