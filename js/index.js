console.log(document.getElementById('a-1'));
// var z;
if(document.getElementById('a-1') != null){
    $(function(){
        var z;
        var header_height;
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            },
        });
        $.ajax({
            url: 'data/all.json',
            type: 'get',
            dataType: 'json',
            cache: false,
            error:function(jqXHR,textStatus,errorThrown) {
                /*错误信息处理*/
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            },
            success: function (jsonArr){
                var result = '';
                var results = '';
                var results1 = '';
                var results2 = '';
                var results3 = '';
                var results4 = '';
                var results5 = '';
                var results6 = '';
                var results7 = '';
                var otheradd = '';
                otheradd = `<div class="scroll-l">
                <p btn_name="a1"><img src="https://res.samsungeshop.com.cn/resources/activityReleased/70f8993c-b387-4bec-847c-9a106fbd660a/images/leftbanner_01.jpg?20191221141947"></p>
                <p btn_name="a2"><img src="https://res.samsungeshop.com.cn/resources/activityReleased/70f8993c-b387-4bec-847c-9a106fbd660a/images/leftbanner_02.jpg?20191221141947">
                </p><p btn_name="a3"><img src="https://res.samsungeshop.com.cn/resources/activityReleased/70f8993c-b387-4bec-847c-9a106fbd660a/images/leftbanner_05.jpg?20191221141947">
                </p><p btn_name="a4"><img src="https://res.samsungeshop.com.cn/resources/activityReleased/70f8993c-b387-4bec-847c-9a106fbd660a/images/leftbanner_03.jpg?20191221141947"></p>
                <p btn_name="a5"><img src="https://res.samsungeshop.com.cn/resources/activityReleased/70f8993c-b387-4bec-847c-9a106fbd660a/images/leftbanner_04.jpg?20191221141947"></p></div>
            <div class="scroll-r"></div>`
                // console.log(jsonArr);
                //广告
                $.each(jsonArr.ad,function (index,item){
                    if(index < 1){
                        result += `<div class="banner-left">
                                <a href=${item.url}>
                                    <img src=${item.pcImg} alt="">
                                </a>
                                </div>
                            `;
                    }else{
                        results += `
                                <a href=${item.url}>
                                    <img src=${item.pcImg} alt="">
                                </a>
                            `;
                    }
                    
                });
                // $('.banner-wrap').html(result);
            $('.banner-wrap').html(`${result}<div class="banner-right">${results}</div>${otheradd}`);
                // console.log(jsonArr.hot[0].categorys[0].items);
                $.each(jsonArr.hot[0].categorys[0].items,function (index,item){
                    if(index>1){
                        results2 += `<div class="hotsell-cont">
                        <a href=${item.url}>
                            <p><img src=${item.tag} alt=""></p>
                            <p><b>${item.title}</b></p>
                            <p><span>${item.subtitle}</span></p>
                            <p><strong>${item.salesprice}</strong></p>
                            <p><img src="${item.pcImgpc}" alt=""></p>
                        </a>
                    </div>`;
                    }else{
                        results1 += `<div class="hotsell-cont">
                        <a href=${item.url}>
                            <p><img src=${item.tag} alt=""></p>
                            <p><b>${item.title}</b></p>
                            <p><span>${item.subtitle}</span></p>
                            <p><strong>${item.salesprice}</strong></p>
                            <p><img src="${item.pcImgpc}" alt=""></p>
                        </a>
                    </div>`;
                    }
                    
                });
                // console.log(results2);
                $('.hotsell-left').html(results1);
                $('.hotsell-right').html(results2);
                console.log(jsonArr.sphon[0].categorys);
                $.each(jsonArr.sphon[0].categorys[0].items,function (index,item){
                    results3 += `
                    <div>
                        <a href=${item.url}>
                            <p><img src="${item.pcImgpc}" alt=""></p>
                            <p><span>${item.title}</span></p>
                            <p><span>${item.subtitle}</span></p>
                            <p><strong>${item.salesprice}</strong></p>
                        </a>
                    </div>`;
                });
                // $('.banner-wrap').html(results1);
                $('#a-1 .sp-right').html(results3);
                $('#a-1 .sp-left').html(`<a href=${jsonArr.sphon[0].categorys[0].floorurl}>
                <img src=${jsonArr.sphon[0].categorys[0].floorKv} alt="">
            </a>`)
                $.each(jsonArr.wear[0].categorys[0].items,function (index,item){
                    results4 += `
                    <div>
                        <a href=${item.url}>
                            <p><img src="${item.pcImgpc}" alt=""></p>
                            <p><span>${item.title}</span></p>
                            <p><span>${item.subtitle}</span></p>
                            <p><strong>${item.salesprice}</strong></p>
                        </a>
                    </div>`;
                });
                // $('.banner-wrap').html(results1);
                $('#a-2 .sp-right').html(results4);
                $('#a-2 .sp-left').html(`<a href=${jsonArr.wear[0].categorys[0].floorurl}>
                <img src=${jsonArr.wear[0].categorys[0].floorKv} alt="">
            </a>`)
                $.each(jsonArr.fit[0].categorys[0].items,function (index,item){
                    results5 += `
                    <div>
                        <a href=${item.url}>
                            <p><img src="${item.pcImgpc}" alt=""></p>
                            <p><span>${item.title}</span></p>
                            
                            <p><strong>￥${item.salesprice}</strong></p>
                        </a>
                    </div>`;
                });
                // $('.banner-wrap').html(results1);
                $('#a-3 .sp-right').html(results5);
                $('#a-3 .sp-left').html(`<a href=${jsonArr.fit[0].categorys[0].floorurl}>
                <img src=${jsonArr.fit[0].categorys[0].floorKv} alt="">
            </a>`)
                // console.log(jsonArr.computer[0].categorys[0].items)
                $.each(jsonArr.computer[0].categorys[0].items,function (index,item){
                    results6 += `
                    <div>
                        <a href=${item.url}>
                            <p><img src="${item.pcImgpc}" alt=""></p>
                            <p><span>${item.title}</span></p>
                            <p><span>${item.subtitle}</span></p>
                            <p><strong>${item.salesprice}</strong></p>
                        </a>
                    </div>`;
                });
                // $('.banner-wrap').html(results1);
                $('#a-4 .sp-right').html(results6);
                $('#a-4 .sp-left').html(`<a href=${jsonArr.computer[0].categorys[0].floorurl}>
                <img src=${jsonArr.computer[0].categorys[0].floorKv} alt="">
            </a>`)
                // console.log(jsonArr.smarthome[0].categorys[0].items)
                $.each(jsonArr.smarthome[0].categorys[0].items,function (index,item){
                    results7 += `
                    <div>
                        <a href=${item.url}>
                            <p><img src="${item.pcImgpc}" alt=""></p>
                            <p><span>${item.title}</span></p>
                            <p><strong>${item.salesprice}</strong></p>
                        </a>
                    </div>`;
                });
                // $('.banner-wrap').html(results1);
                $('#a-5 .sp-right').html(results7);
                $('#a-5 .sp-left').html(`<a href=${jsonArr.smarthome[0].categorys[0].floorurl}>
                <img src=${jsonArr.smarthome[0].categorys[0].floorKv} alt="">
            </a>`)
            z = $('.banner-wrap').position().top;
            header_height = $('.header-wrap').position().top;
            }
            
        });
        var h_l
        // console.log($("#a-1").scrollTop())
        $('.banner-wrap').on('click','p',function(){
            // console.log($('#a-2').position())
            // console.log($('#a-3').position())
            switch($(this).attr('btn_name')){
                case 'a1':
                $('html').scrollTop($('#a-1').position().top);
                break;
                case 'a2':
                $('html').scrollTop($('#a-2').position().top);
                break; 
                case 'a3':
                $('html').scrollTop($('#a-3').position().top);
                break; 
                case 'a4':
                $('html').scrollTop($('#a-4').position().top);
                break; 
                case 'a5':
                $('html').scrollTop($('#a-5').position().top);
                break; 
            }
            // var r_name = $(this).attr('btn_name');
            // h_l= $('#'+r_name).position();
            // console.log(h_1);
            // $('html').scrollTop(h_l)
            // $(this).scrollTop();
        })
        $(document).on('scroll',function(){
            // console.log(123);
            if($(document).scrollTop()>z){
                $('.scroll-l').css({"position":"fixed","top":"70px","left":"0"})
            }else{
                $('.scroll-l').removeAttr("style");
            }
            // console.log(z);
            if($(document).scrollTop()>header_height){
                // console.log(233);
                $('.header-wrap').css({"position":"fixed","top":"0","left":"0"})
            }else{
                $('.header-wrap').removeAttr("style");
            }
        })
        // -----------------下拉菜单------------------------
       
        $('#sec-1 ul li').on('mouseenter',function(){
            console.log($(this).attr('n'));
            console.log(123);
            $(this).siblings().removeClass('blue');
            $(this).addClass('blue');
            var num = $(this).attr('n')-1;
            $.ajax({
                url: 'data/all.json',
                type: 'get',
                dataType: 'json',
                cache: false,
                error:function(jqXHR,textStatus,errorThrown) {
                    /*错误信息处理*/
                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                },
                success: function (jsonArr){
                    var nnn = 'sphon';
                    pajaxzz(num,jsonArr,nnn);
                }
            })
        })
        $('#a-3 .phoneall ul li').on('mouseenter',function(){
            console.log($(this).attr('n'));
            console.log(123);
            $(this).siblings().removeClass('blue');
            $(this).addClass('blue');
            var num = $(this).attr('n');
            $.ajax({
                url: 'data/all.json',
                type: 'get',
                dataType: 'json',
                cache: false,
                error:function(jqXHR,textStatus,errorThrown) {
                    /*错误信息处理*/
                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                },
                success: function (jsonArr){
                    a_3jaxzz(num,jsonArr);
                }
            })
        })
        // ----------------增加----------------------
        function pajaxzz(n,jsonArr){
            var results3 ='';
            // console.log(`jsonArr.${na}[0].categorys[n].items`);
            $.each(jsonArr.sphon[0].categorys[n].items,function (index,item){
                results3 += `
                <div>
                    <a href=${item.url}>
                        <p><img src="${item.pcImgpc}"></p>
                        <p><span>${item.title}</span></p>
                        <p><span>${item.subtitle}</span></p>
                        <p><strong>${item.salesprice}</strong></p>
                    </a>
                </div>`;
            // results3 += `<p>123</p>`;
            });
            // $('.banner-wrap').html(results1);
            $('#a-1 .sp-right').html(results3);
            $('#a-1 .sp-left').html(`<a href=${jsonArr.sphon[0].categorys[n].floorurl}>
                <img src=${jsonArr.sphon[0].categorys[n].floorKv} alt="">
            </a>`)
        }
        function a_3jaxzz(n,jsonArr){
            var results3 ='';
            // console.log(`jsonArr.${na}[0].categorys[n].items`);
            $.each(jsonArr.fit[0].categorys[n].items,function (index,item){
                results3 += `
                <div>
                    <a href=${item.url}>
                        <p><img src="${item.pcImgpc}"></p>
                        <p><span>${item.title}</span></p>
                        <p><strong>${item.salesprice}</strong></p>
                    </a>
                </div>`;
            // results3 += `<p>123</p>`;
            });
            // $('.banner-wrap').html(results1);
            $('#a-3 .sp-right').html(results3);
            $('#a-3 .sp-left').html(`<a href=${jsonArr.fit[0].categorys[n].floorurl}>
                <img src=${jsonArr.fit[0].categorys[n].floorKv} alt="">
            </a>`)
        }
    });


    $('.w_phone1').hover(function(){
        console.log(123);
        $('.index1').slideDown(150);
    },function(){
        $('.index1').stop().slideUp(150);

    })
    $('.code1').on('mouseenter',function(){
        $('.index1').stop()
        $('.index1').css('display','block');
    })
    $('.code1').on('mouseleave',function(){
        $('.index1').stop().slideUp(150);
    })


    
    $('.w_phone2').hover(function(){
        console.log(123);
        $('.index2').slideDown(150);
    },function(){
        $('.index2').stop().slideUp(150);

    })
    $('.code2').on('mouseenter',function(){
        $('.index2').stop()
        $('.index2').css('display','block');
    })
    $('.code2').on('mouseleave',function(){
        $('.index2').stop().slideUp(150);
    })


    $('.w_phone3').hover(function(){
        console.log(123);
        $('.index3').slideDown(150);
    },function(){
        $('.index3').stop().slideUp(150);

    })
    $('.code3').on('mouseenter',function(){
        $('.index3').stop()
        $('.index3').css('display','block');
    })
    $('.code3').on('mouseleave',function(){
        $('.index3').stop().slideUp(150);
    })
}


    
