$(document).ready(function(){
    $(document).on('submit', function(){
        if($("#headercinput").val().toLowerCase() == "random"){
            var r = Math.floor(Math.random() * 255) + 1;
            var g = Math.floor(Math.random() * 255) + 1;
            var b = Math.floor(Math.random() * 255) + 1;
            $("#header").css("background", "rgb(" + r + ", " + g + ", " + b + ")");
        }else if($("#headercinput").val().toLowerCase() == "def"){
            $("#header").css("background", "rgb(100, 0, 255)");
        }else{
            var a;
            switch($("#headercinput").val().toLowerCase()){
                case "piros":
                    a = "red";
                    break;
                case "kék":
                    a = "blue";
                    break;
                case "zöld":
                    a = "green";
                    break;
                case "lila":
                    a = "purple";
                    break;
                case "sárga":
                    a = "yellow";
                    break;
                case "cián":
                    a = "cyan";
                    break;
            }
            
            $("#header").css("background", a);
            
        }
        
        return false;
    })
});

