$(function(){
   var  ul=$(".category ul")

    $.ajax({
        url:"http://127.0.0.1:9090/api/getcategorytitle",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlStr=template("titleTip",info);
            ul.html(htmlStr)
            // id=.data("");
            // console.log(id);
          
    
        }
    }) 
});
//点击切换箭头方向和下拉隐藏商品信息
;(function(){
    
        $(document).on("click", ".cate", function(){
            var a = $(this).find("a");
             if(a.data("flag")) {
                
                     a.data("index","你好");
                     $.ajax({
                         url: "http://127.0.0.1:9090/api/getcategory?titleid=" + a.data("titleid"),
                         type: "get",
                         dataType: "JSON",
                         success: function (data) {
                             console.log(data);
                             a.parents(".cate").find(".category-goods").html(template("Tip2", data));
                             
                         }
                     });
                 
                 a.removeClass("down").addClass("up");
                 a.parents(".cate").find(".category-goods").show();
                a.data("flag",false);
             }
                 else{
                             a.removeClass("up").addClass("down");
                             a.parents(".cate").find(".category-goods").hide();
                             a.data("flag",true);
                    }
        });
    })();
    