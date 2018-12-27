$(function(){
  var brandtitleid= $.getUrlParam("brandtitleid")
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbrand",
    dataType:"json",
    data:{
        brandtitleid:brandtitleid 
    },
    success:function(info){
        // console.log(info);
        var htmlStr=template("brandTip",info);
        // console.log(htmlStr);
        $(".type").html(htmlStr)
        

    }
})

$.ajax({
    url:"http://127.0.0.1:9090/api/getbrandproductlist",
    dataType:"json",
    data:{
        brandtitleid:brandtitleid,
        pagesize:4

    },
    success:function(info){
        console.log(info);
        var htmlStr=template("brandTip1",info);
        // console.log(htmlStr);
        $(".sale").html(htmlStr)

        if(info.result[0]!=undefined){
            var name="<p>"+info.result[0].productName+"</p>";
            var img=info.result[0].productImg;
            var str =img+""+name;
            //最新评论
            $.ajax({
                type:"get",
                url:"http://127.0.0.1:9090/api/getproductcom",
                dataType:"JSON",
                data:{
                    productid:info.result[0].productId
                },
                success:function(info){
                    info.str = str;
                    console.log(info);
                    
                   
                    $(".comment").html(template("tip3",info));
                }
            });
        }


        

    }
})

})