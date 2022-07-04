// $(document).ready(function(){
//     $(".active").click(function(){
    
//         $("#summary").removeClass("empty"); 
//         $("#another").addClass("empty");
//         $("#skill").addClass("empty");
//         $("#education").addClass("empty");
          
//     });
$(document).ready(function(){
    $(".active").click(function(){
    
        $("#summary").removeClass("empty"); 
        $("#another").addClass("empty");
        $("#skill").addClass("empty");
        $("#education").addClass("empty");
          
    });
    $("#ed").click(function(){
    
        $("#education").removeClass("empty");
        $("#summary").addClass("empty");  
        $("#another").addClass("empty");
        $("#skill").addClass("empty");
           
    });
    $("#lang").click(function(){
    
        $("#another").removeClass("empty");
        $("#education").addClass("empty");
        $("#summary").addClass("empty");  
        $("#skill").addClass("empty");
           
    });
    $("#ski").click(function(){
    
        $("#skill").removeClass("empty");
        $("#another").addClass("empty");
        $("#education").addClass("empty");
        $("#summary").addClass("empty");  
       
           
    });
    
});  