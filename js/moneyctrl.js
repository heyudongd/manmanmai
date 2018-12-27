$(function(){
    var page=1;
    var flag =true;
    var num;
    function render(page){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getmoneyctrl",
            dataType:"json",
            data:{
                pageid:page
            },
            success:function(info){
                console.log(info);
                var htmlStr=template("tipd",info);
                $(".product").html(htmlStr);


                if(flag){
                    var count=info.pagesize;
                    var size=info.totalCount;
                    num=Math.ceil(size/count);
                    info.num=num;
                    info.page=page;
                    // console.log(info);
                    var htmlstr=template("productTip1",info);
                    // console.log(htmlstr);
                    
                    $("#selectPage").html(htmlstr);
                }
            }
        })
    }
    render(page);
    $("#selectPage").find("option").eq(page-1).prop("selected",true);

    $(".prev").on("click",function(){
        flag = false;
        // alert(2)
        page--;
        if(page<=0){
           page =num;
        }
        render(page)
        $("#selectPage").find("option").eq(page-1).prop("selected",true);
    })
    $(".next").on("click",function(){
        flag = false;
        // alert(2)
        page++;
        if(page>num){
           page =1;
        }
        render(page)
        $("#selectPage").find("option").eq(page-1).prop("selected",true);
    })

    $(document).on("change", "select", function(){
       
        var  index = $(this).find("option:selected").data("index")
        
        
        render(index+1);
       
        flag = false;
    })

})