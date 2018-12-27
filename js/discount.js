$(function(){
   var productid= $.getUrlParam("productid")
    $.ajax({
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
        data:{
            productid:productid
        },
        dataType:"json",
        success:function( info ){
            console.log( info );
            var htmlStr=template("disTip",info);
            console.log(htmlStr);
            
            $(".containe").html(htmlStr)
        }   
    })
})