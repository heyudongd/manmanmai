$(function(){
    var ul = $(".menu").find("ul");
    $.ajax({
        url:"http://127.0.0.1:9090/api/getindexmenu",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlStr=template("menuTip",info)
            // console.log(htmlStr);
            ul.html(htmlStr);
            //点击更多展开相应数据
            for(var i = 9;i<13;i++){
                ul.find("li").eq(i-1).addClass("hide");
            }
            ul.find("li").eq(7).click(function(){
                $(this).siblings(".hide").toggle();
                return false;
            });
            
        }

    })
    $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        type:"get",
        dataType:"json",
        success:function( info ){
            console.log(info);
            var htmlStr=template("menuTip2",info)
            $(".product ul").html(htmlStr);
            
        }
    })
})