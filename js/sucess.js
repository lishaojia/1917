if(document.getElementById('sucess') != null){
    $(function(){
        $.ajax({
            url: 'data/cart.json',
            type: 'get',
            dataType: 'json',
            cache: false,
            error:function(jqXHR,textStatus,errorThrown) {
                /*错误信息处理*/
                console.log(123);
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            },
            success: function (jsonArr){
                var result = '';
                // console.log(jsonArr);
                //广告
                console.log(233);
                $.each(jsonArr,function (index,item){
                    // arr[index] = item;
                    var oLi = document.createElement("li");
                    $(oLi).attr('code',item.code);
                    oLi.innerHTML += '<a href="#"><div class="pro_img"><img src="' + item["imgUrl"] + '" width="150" height="150"></div><h3 class="pro_name">' + item["proName"] + '</h3></a>';
                    oLi.innerHTML += '<p class="pro_price">' + item["proPrice"] + '元</p>';
                    oLi.innerHTML += '<div class="add_btn"><a>加入购物车</a></div>';
                    $('#ppp').append(oLi);
                });
                var coArr = JSON.parse(sessionStorage.getItem('car')).code;
                // coArr = arronly(coArr);
                // var dty = arronly(coArr);
                // console(arronly(coArr));
                console.log('返回值'+dty);
                rejoin([dty]);
            }
        })
        var header_height = $('.nav').position().top;
        fittop(header_height);
        function fittop(header_height){
            $(document).on('scroll',function(){
                if($(document).scrollTop()>header_height){
                    // console.log(233);
                    $('.header-wrap').css({"position":"fixed","top":"0","left":"0"})
                }else{
                    $('.header-wrap').removeAttr("style");
                }
            })
        }
        
    })
}