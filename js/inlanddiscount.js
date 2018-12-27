$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getinlanddiscount",
        type:"get",
        dataType:"json",
        success:function( info ){
            console.log(info);
            var htmlStr=template("inlandTip",info);
            $(".discount").html(htmlStr);            
        }
    })
})