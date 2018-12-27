$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrandtitle",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlStr=template("brandTip",info);
            // console.log(htmlStr);
            
            $(".category-title").html(htmlStr)
            

        }
    })
})