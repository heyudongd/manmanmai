$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcoupon",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlStr=template("couponTip",info);
            console.log(htmlStr);
            
            $(".coupon").html(htmlStr)
            

        }
    })
})