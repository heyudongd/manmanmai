$(function(){
   var couponid= $.getUrlParam("couponid");
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcouponproduct",
        data:{
            couponid:couponid
        },
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlStr=template("couponproductTip",info);
            $(".coupon-list").html(htmlStr);


            var htmlstr=template("tp",info);
            console.log(htmlstr);
            
            $(".modal .swiper-wrapper").html(htmlstr);
            
        }
    })
    // 点击显示模态框
    $(".coupon-list").on("click","li a",function(){
        $(".modal").show();
    })



    // 初始化轮播图
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },

  })        
    
})
