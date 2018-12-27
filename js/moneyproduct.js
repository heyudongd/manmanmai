$(function(){
    var id=$.getUrlParam("productid");
    $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
        type:"get",
        data:{
            productid :id
        },
        dataType:"json",
        success:function(info){
            // console.log(info);
            var htmlStr=template("moneyTip",info);
            $(".containe").html(htmlStr);
        
            // 给评论追加内容
            $("#ctl00_ContentBody_Button1").on("click",function(){
                // 获取文本域的内容
               var tex= $("#ctl00_ContentBody_txt_nr").val();
               $(".list ul").append('<li class="ui-border-b"><div class="userimg"><img src="http://home.manmanbuy.com/upface/face/1466230634_162.jpg"></div><div class="con"><div class="name clearfix"><div class="username">没有了天</div> <div class="time">2018-12-12</div></div><div class="content">'+ tex+'</div></div></li>')
               //清空文本域
               $("#ctl00_ContentBody_txt_nr").val('');
            })
            
        }
    })
})