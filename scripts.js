$(document).ready(function(){
    $(document).on('submit', function(){
        if($("#headercinput").val() == "random"){
            var r = Math.floor(Math.random() * 255) + 1;
            var g = Math.floor(Math.random() * 255) + 1;
            var b = Math.floor(Math.random() * 255) + 1;
            $("#header").css("background", "rgb(" + r + ", " + g + ", " + b + ")");
        }else if($("#headercinput").val() == "def"){
            $("#header").css("background", "rgb(100, 0, 255)");
        }else{

            $("#header").css("background", $("#headercinput").val());
            
        }
        
        return false;
    })
});

