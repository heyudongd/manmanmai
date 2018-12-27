$(function(){
    var titleId=0;
    // 区域滚动
    var myScroll = new IScroll('.title', {
        scrollX:true,
        crollY:false
    });
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
        type:"get",
        dataType:"json",
        success:function( info ){
            // console.log(info);
            var htmlStr=template("baicaiTip",info);
            $(".title ul").html(htmlStr);  
        }   
    })
    render(titleId);
    //点击高亮并渲染对应数据
    $(".title").on("click","li",function(){
        $(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
       titleId= $(this).data("id");
    //   console.log(titleId);
    render(titleId);
 
      
    })
    //渲染的方法
    function render(titleId){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
            type:"get",
            data:{
                titleid:titleId
            },
            success:function(info){
                console.log(info);
                var htmlStr=template("baicaijiaTip",info);
                $(".list ul").html(htmlStr)
                
            }
        })
    }


    //返回顶部
         //点击时回到顶部
         $(".bai_back").click(function(){
            $("html,body").stop().animate({scrollTop:0},2000);
            //让他瞬间上去 ,让他卷曲的高度为0;
            // $(window).scrollTop(0);
        });
})