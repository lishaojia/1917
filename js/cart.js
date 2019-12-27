if(document.getElementById('cart') != null){
    $(function(){
        
        var arr = [];
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
                        $.each(jsonArr,function (index,item){
                            arr[index] = item;
                            var oLi = document.createElement("li");
                            $(oLi).attr('code',item.code);
                            oLi.innerHTML += '<a href="#"><div class="pro_img"><img src="' + item["imgUrl"] + '" width="150" height="150"></div><h3 class="pro_name">' + item["proName"] + '</h3></a>';
                            oLi.innerHTML += '<p class="pro_price">' + item["proPrice"] + '元</p>';
                            oLi.innerHTML += '<div class="add_btn"><a href="http://10.36.135.26//test/dist%20lw/sucess.html">加入购物车</a></div>';
                            $('#box-cont').append(oLi);
                        });
                        var coArr = JSON.parse(sessionStorage.getItem('car')).code;
                        // coArr = arronly(coArr);
                        var dty = arronly(coArr);
                        // console(arronly(coArr));
                        console.log('返回值'+dty);
                        rejoin([dty]);
                    }
                })
        var header_height = $('.nav').position().top;
        // console.log(z);
        fittop(header_height);
        $('#box-cont').on('click','.add_btn',function(){
            var code = $(this).parent().attr('code');//点击获取code
            // 判断当前本地存储是否有加入购物车的商品 ['abc3','abc4']
            if (sessionStorage.getItem('car')) {
                var codeArr = JSON.parse(sessionStorage.getItem('car')).code;
            } else {
                var codeArr = [];
            }
            // 把点击商品的编号放到商品编号数组中
            // console.log(codeArr);
            // codeArr = arronly(codeArr);
            codeArr.push(code);
            // 获取要存储的json字符串 "{code: ['abc3','abc4']}"
            var jsonStr = JSON.stringify({"code":codeArr});
            // 存储到本地数据
            // console.log(jsonStr);
            // sessionStorage.clear();
            sessionStorage.setItem('car',jsonStr);
            // alert('成功加入购物车！');
            // sessionStorage.clear();
            // console.log(arr);
            // rejoin(code);
            $(location).prop('href', '/sucess.html')
        })
        $('#car_a').on('click','#i_check',function(){
            if($(this).hasClass('i_acity')){
                $(this).removeClass('i_acity');
            }else{
                $(this).addClass('i_acity');
            }
            var k = true;
            $.each($('#car_a .check i'),function(index,item){
                // console.log(item);
                // console.log(item);
                // k = false;
                console.log(item);
                // var z = $(item).hasClass('i_acity');
                // console.log(z);
                if(!$(item).hasClass('i_acity')){
                    // console.log(233);
                    $('.car .head_row i').removeClass('i_acity');
                    k = false;
                    console.log(23333);
                    return false;
                }else{
                    $('.car .head_row i').addClass('i_acity');
                }
                console.log(233);
                // // k = true;
                // console.log('end='+k);
            })
            console.log(k);
            // console.log(k);
            // if(!k){
            //     $('.car .head_row i').removeClass('i_acity')
            // }else{
            //     $('.car .head_row i').addClass('i_acity')
            // }
        })
        $('.car .head_row').on('click','i',function(){
            console.log(123);
            if($(this).hasClass('i_acity')){
                $(this).removeClass('i_acity');
                $('.i_check').removeClass('i_acity')
            }else{
                $(this).addClass('i_acity');
                $('.i_check').addClass('i_acity');
            }
        })
        $('#car_a').on('click','.ctrl a',function(){
            $($(this).parent().parent()).remove();
            var co = $(this).attr('code');
            // console.log(co);
            // var nun = 1;
            delall(co);
        })
        $('#car_a').on('click','.num_count .count_d',function(){
            var  i = $(this).next().html();
            if(i==1){
                return;
            }
            var ce = $(this).next().attr('code');
            console.log($(this).next().attr('code'));
            del(ce);
            var i = Number(i)-1;
            var money = i * $(this).parent().parent().prev().children().html();
            // console.log(money);
            // allmoney(money);
            $(this).parent().parent().next().children().html(money);
            $(this).next().html(i);
            // window.location.reload()

        })
        $('#car_a').on('click','.num_count .count_i',function(){
            console.log($(this).prev());
            var code = $(this).prev().attr('code');//点击获取code
            cun(code);
            var  i = $(this).prev().html();
            var i = Number(i)+1;
            $(this).prev().html(i);
            var d = searchcode(code);
            // window.location.reload()
            var money = i * $(this).parent().parent().prev().children().html();
            // console.log(money);
            // allmoney(money);
            $(this).parent().parent().next().children().html(money);
            console.log();
            // console.log('d='+searchcode(code));
        })
        function rejoin(code){
            // console.log(code);
            $.each(arr,function(index,item){
                if(code instanceof Object){
                    // console.log(123);

                    // code = code[0];
                    // console.log('code='+code[0]);
                    $.each(code[0],function(ix,it){
                        // console.dir(it);
                        // console.log('ix='+ix);
                        if(item.code == ix){
                            // console.log(1);
                            var car_add = '';
                            car_add += '<div class="check float-left"> <i class="i_check" id="i_check">√</i></div>';
                            car_add += '<div class="img float-left"><img src="'+ item["imgUrl"]+'" width="80" height="80"></div>';
                            car_add += '<div class="name float-left"><span>'+item.proName+'</span></div>';
                            car_add += '<div class="price float-left"><span>'+item.proPrice+'</span></div>';
                            car_add +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num" code="'+item.code+'">'+it+'</div><div class="count_i">+</div></div> </div>'
                            car_add += '<div class="subtotal float-left"><span>'+item.proPrice*it+'</span></div>'
                            car_add += '<div class="ctrl float-left"><a href="javascript:;"code="'+item.code+'">×</a></div>';
                            $('#car_a').append(`<div class="caradd clearfix">${car_add}</div>`);
                                }
                            })
                }
                if(item.code == code){
                    var car_add = '';
                    car_add += '<div class="check float-left"> <i class="i_check" id="i_check">√</i></div>';
                    car_add += '<div class="img float-left"><img src="'+ item["imgUrl"]+'" width="80" height="80"></div>';
                    car_add += '<div class="name float-left"><span>'+item.proName+'</span></div>';
                    car_add += '<div class="price float-left"><span>'+item.proPrice+'</span></div>';
                    car_add +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div> </div>'
                    car_add += '<div class="subtotal float-left"><span>'+item.proPrice+'</span></div>'
                    car_add += '<div class="ctrl float-left"><a href="javascript:;">×</a></div>';
                    $('#car_a').append(`<div class="caradd clearfix">${car_add}</div>`);
            }
        }
            )
        }
        //获取高
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
        //数组去重
        function arronly(arr){
            var obj = {};
            console.log(arr);
            var len = arr.length
            for(var i = 0;i<len;i++){
                if(obj[arr[i]]){
                    obj[[arr[i]]]++;
                }else{
                    obj[[arr[i]]] = 1;
                }
            }
            console.log(4);
            console.log(obj);
            return obj;
            
        }
        //增加本地数据
        function cun(code){
            if (sessionStorage.getItem('car')) {
                var codeArr = JSON.parse(sessionStorage.getItem('car')).code;
            } else {
                var codeArr = [];
            }
            // 把点击商品的编号放到商品编号数组中
            // console.log(codeArr);
            // codeArr = arronly(codeArr);
            codeArr.push(code);
            // 获取要存储的json字符串 "{code: ['abc3','abc4']}"
            var jsonStr = JSON.stringify({"code":codeArr});
            // 存储到本地数据
            // console.log(jsonStr);
            // sessionStorage.clear();
            sessionStorage.setItem('car',jsonStr);
        }
        //删除本地数据
        function delall(code){
            var codeArr = JSON.parse(sessionStorage.getItem('car')).code;
            for(var j=0;j<codeArr.length;j++){
                console.log(233);
                if (code == codeArr[j]) {
                        // console.log(index);
                        console.log('长='+codeArr.length);
                        codeArr.splice(j,1);
                        j--;
                        // tf;
                        // i--;
                        //删除指定下标的数组元素
                        // return;
                        // return tf;
                    }
            }
        
        
        
        if (codeArr.length == 0) {
            $('.list').append('<li style="line-height: 80px; text-align: center; color: #999;">购物车暂无数据！</li>');
            sessionStorage.removeItem('car');
        } else {
             // 更新本地存储数据
            var jsonStr = JSON.stringify({"code":codeArr});
            sessionStorage.setItem('car',jsonStr);
        }
        }
        function del(code){
                // console.log(code);
                // 获取要删除商品的编号
                // 删除数组元素  pop  unshift  splice(index,1)
                var codeArr = JSON.parse(sessionStorage.getItem('car')).code;
                
                    $.each(codeArr,function (index,item){
                        var i = 0;
                        if (code == item) {
                            console.log(index);
                            console.log('长='+codeArr.length);
                            codeArr.splice(index,1);
                            return false;
                        }
                    });
               
                    // for(var j=0;j<codeArr.length;j++){
                    //     console.log(233);
                    //     if (code == codeArr[j]) {
                    //             // console.log(index);
                    //             console.log('长='+codeArr.length);
                    //             codeArr.splice(j,1);
                    //             j--;
                    //             // tf;
                    //             // i--;
                    //             //删除指定下标的数组元素
                    //             // return;
                    //             // return tf;
                    //         }
                    // }
                
                
                
                if (codeArr.length == 0) {
                    $('.list').append('<li style="line-height: 80px; text-align: center; color: #999;">购物车暂无数据！</li>');
                    sessionStorage.removeItem('car');
                } else {
                     // 更新本地存储数据
                    var jsonStr = JSON.stringify({"code":codeArr});
                    sessionStorage.setItem('car',jsonStr);
                }
                // 删除页面中的节点
                // $(this).parent().remove();
        }
        function searchcode(scode){
            var ned;
            $.each(arr,function(index,item){
                if(item.code == scode){
                    console.log('scode='+item.proPrice);
                    ned = item.proPrice;
                    return false;
                }
            })
            return ned;

        }
        // function allmoney(money){
        //     $('.subtotal span').html(money);
        // }
    })
}

