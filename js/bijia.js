$(function(){
    //获取商品id
    var productId=$.getUrlParam("productid");
    console.log(productId);
    
    $.ajax({
        url:"http://127.0.0.1:9090/api/getproduct",
        type:"get",
        data:{
            productid:productId
        },
        dataType:"json",
        success:function( info ){
            console.log(info);
            var htmlStr=template("tip",info);
            $(".product-bijia").html(htmlStr)

            var htmlStr1=template("tpl3",info);
            
            $(".bijia-api").html(htmlStr1)
            
        }
        
    })
});
$(function(){
    var productId=$.getUrlParam("productid");
    $.ajax({
        url:"http://127.0.0.1:9090/api/getproductcom",
        type:"get",
        data:{
            productid:productId
        },
        dataType:"json",
        success:function( info ){
            console.log(info);
            var htmlStr=template("tpl2",info);
            $(".product-list").html(htmlStr)

            
        }
        
    })
})