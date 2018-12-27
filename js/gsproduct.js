$(function(){
    var shopid =0;
    var areaid=0;
    //需求渲染京东和华北数据 取得两个id渲染商品 一进页面先渲染;
    function tip1(){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getgsshop",
            dataType:"json",
            success:function(info){
                // console.log(info);
                
                var htmlStr=template("tip1",info)
                $(".shop ul").html(htmlStr);
            }
    
        })
    
    }
    tip1();
    function tip2(){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getgsshoparea",
            dataType:"json",
            success:function(info){
                console.log(info);
                
                var htmlStr=template("tip2",info)
                $(".area ul").html(htmlStr);
            }
        })
    }
    tip2();

    function tip3(shopid,areaid){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getgsproduct",
            dataType:"json",
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success:function(info){
                console.log(info);
                
                var htmlStr=template("tip3",info)
                $(".product ul").html(htmlStr);
            }
        })
    }
    //一进页面渲染
    tip3(shopid,areaid);


     //点击显示掩藏
     var flag1=true;
     $(".list li").eq(0).on("click",function(){
         if(flag1){
             $(".shop").show();
             $(this).removeClass("down").addClass("up")
             flag1=false;
         }else{
             flag1=true;
             $(".shop").hide();
             $(this).removeClass("up").addClass("down")
         }
     })

     var flag2=true;
     $(".list li").eq(1).on("click",function(){
         
         if(flag2){
            
             $(".area").show();
             $(this).removeClass("down").addClass("up")
             flag2=false;
         }else{
             flag2=true;
             $(".area").hide();
             $(this).removeClass("up").addClass("down")
         }
     })
     var flag3=true;
     $(".list li").eq(2).on("click",function(){
         if(flag3){
             $(".price").show();
             $(this).removeClass("down").addClass("up")
             flag3=false;
         }else{
             flag3=true;
             $(".price").hide();
             $(this).removeClass("up").addClass("down")
         }
     })
     //获取id
     $(".shop").on("click","li",function(){
         shopid= $(this).data("id");
       $(this).addClass("active").siblings().removeClass("active");
       
        
     })
     $(".area").on("click","li",function(){
         areaid= $(this).data("id");
        console.log(areaid);
        
        $(this).addClass("active").siblings().removeClass("active");

        tip3(shopid,areaid);
        
         
      })

})