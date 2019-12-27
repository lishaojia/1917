if(document.getElementById('lowprice') != null){





//添加数据





l_loaddata();
// phonenumchange()




$('.L2_sort_menu_title').click(function(){
    l_loaddata();
    // phonenumchange()
})



//添加数据
        //型号价格范围选择
        var phones_a=document.querySelectorAll('.phones a')
        console.log(phones_a);

        var shops=document.querySelectorAll('.shop')
        console.log(shops);

        var h5s=document.querySelectorAll('.shop h5')
        console.log(h5s);
        
        $('.phones a').on("click",function(){
            // $(this).addClass('on').siblings().removeClass('on');
            localStorage.removeItem('lgoods');
            if (localStorage.getItem('password')) {
                var pass_word = JSON.stringify(localStorage.getItem('password'))
                if(pass_word!==1){
                    $(location).attr('href','http://localhost/test/day36test/dist/indexlogin.html');
                }
            } 
            $("#lowprice").attr("checked",false)
            $("#midprice").attr("checked",false)
            $("#highprice").attr("checked",false)
            var y=$(this).html().slice(0,8)
            var results = '';
            var typecodeall=[];
            console.log(y);
            
            $('h5').each(function(index,elenment){
                var num=$(this).html().slice(0,8)
                console.log(num);
               
                if(num==y){
                    var typecode=$(this).parent().parent().attr('lcode');      
                }
                typecodeall.push(typecode);
                console.log(typecodeall);
               
                   var jsonStr = JSON.stringify({"L_code":typecodeall});
                   $('.L2_section_shops').empty();
                  
                    localStorage.setItem('lgoods',jsonStr);
                
                })
                    if (localStorage.getItem('lgoods')) {
                        
                        var codeArr = JSON.parse(localStorage.getItem('lgoods')).L_code;
                        // console.log(codeArr);
                        
                         }
                            $.ajax({
                                url: 'data/goods.json',
                                type: 'get',
                                dataType: 'json',
                                cache: false,
                                success: function (jsonArr){
                                  
                                    $.each(codeArr,function (i,lcode){
                                        $.each(jsonArr,function (index,item){
                                            if (lcode == item.lcode){
                                                results += `<div class="shop " lcode="${item.lcode}">
                                        <div class="shop_box">
                                            <a href="http://10.36.135.26//test/dist%20lw/index3.html"><img src="${item.imgurl[0]}" alt=""></a>
                                        </div>
                                        <div class="shop_scoll">
                                            <div class="_color"></div>
                                            <h5>${item.type}</h5>
                                            <p>${item.price}</p>
                                        </div>
                                        </div>`;
                                            }
                                        })
                                    })
                                 
                                    $('.L2_section_shops').append(results);
                                    // phonenumchange()
                                    changebox();
                                }
                              
                                })
                               
                            
                               
            
})

//                 }
           
//             })
//            ;
              
//         })
// //手机价格选择
                
        $("#lowprice").change(function(){
            
            /*chekbox选中返回true，否则为false*/
            var check = $(this).is(":checked");
            console.log(check);
             var results = '';
            var typecodeall=[];
            if(check){
                $("#midprice").attr("checked",false)
                $("#highprice").attr("checked",false)
                AA(3000,4000)
                
            }else{
                window.event.stopPropagation();
                l_loaddata();
            }
            // phonenumchange()
            changebox()
        })

        $("#midprice").change(function(){
            /*chekbox选中返回true，否则为false*/
            var check = $(this).is(":checked");
            if(check){
                $("#lowprice").attr("checked",false)
                $("#highprice").attr("checked",false)
                AA(4000,7000)
               
            }else{
                l_loaddata();
            }
            // phonenumchange()
            changebox()
        })



        $("#highprice").change(function(){
            /*chekbox选中返回true，否则为false*/
            var check = $(this).is(":checked");
            if(check){
                $("#midprice").attr("checked",false)
                $("#lowprice").attr("checked",false)
                AA(7000,12000)
                
            }else{
                l_loaddata();
            }
            // phonenumchange()
            changebox()
            
        })
            

// //图片切换
        
        

// //图片切换

//价格升降排序
$(".pricebox").toggle( clickHandler1, clickHandler2 )
   

    function clickHandler1(){
        let array = [];
        let defaultArray = [];
        let prev;
        let after;

        console.log(1);
        // $(this).addClass(`sortBtn${index+1}`);
        $('.shop').each(function (index) {
            array[index] = $(this);
            defaultArray[index] = $(this);
           

            for(let i=0;i<array.length;i++){
                for (let j=0;j<array.length-i-1;j++){
                    prev = parseFloat(array[j].find('.shop_scoll').children('p').html().slice(1,6))
                    after = parseFloat(array[j+1].find('.shop_scoll').children('p').html().slice(1,6))
                    if(parseFloat(prev) < parseFloat(after)){
                        console.log(prev,after);
                        let temp = array[j+1];
                        array[j+1]=array[j];
                        array[j]=temp;
                    }
                }
            }
        })
        $('.L2_section_shops').empty();
        for(let i=0;i<array.length;i++){
            $('.L2_section_shops').append(array[i])
        }
        // phonenumchange()
        changebox();
        
    }


    function clickHandler2(){
        let array = [];
        let defaultArray = [];
        let prev;
        let after;

        console.log(2);
         // $(this).addClass(`sortBtn${index+1}`);
        $('.shop').each(function (index) {
            array[index] = $(this);
            defaultArray[index] = $(this);
            console.log(array);
            
            for(let i=0;i<array.length;i++){
                for (let j=0;j<array.length-i-1;j++){
                    prev = parseFloat(array[j].find('.shop_scoll').children('p').html().slice(1,6))
                    after = parseFloat(array[j+1].find('.shop_scoll').children('p').html().slice(1,6))
                    if(parseFloat(prev) > parseFloat(after)){
                        console.log(prev,after);
                        let temp = array[j+1];
                        array[j+1]=array[j];
                        array[j]=temp;
                    }
                }
            }
        })
        $('.L2_section_shops').empty();
        for(let i=0;i<array.length;i++){
            $('.L2_section_shops').append(array[i])
        }
        // phonenumchange()
        changebox();
    }
}
 //价格升降排序      

    
       
     

 //_______________________________________________________________________________________//       
   





   
        


function boxchange(){
    var boximg=[];
    if (localStorage.getItem('lgoods')) {
                
        var codeArr = JSON.parse(localStorage.getItem('lgoods')).L_code;
        // console.log(codeArr);
        
         }
    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        dataType: 'json',
        async: false,
        cache: false,
        success: function (jsonArr){
           
              
            $.each(codeArr,function (j,lcode){
                $.each(jsonArr,function (index,item){
                    if (lcode == item.lcode){
                        console.log(item);
                        
                      boximg.push(item)
                    //   console.log(boximg);
                      
                    }
                })
            })           
        }
        })
        return boximg;
   }

//    function localStorageAdd(){
//     var L_codeArr = [];
//     $('.shop').each(function(index){
//         var L_code = $(this).attr('lcode');
//     console.log(L_code);
//     L_codeArr.push(L_code);
//     var jsonStr = JSON.stringify({"L_code":L_codeArr});
//     localStorage.setItem('lgoods',jsonStr);
//     })
//    }
   

// }

function AA(a,b){
    localStorage.removeItem('lgoods');
    var results = '';
    var typecodeall=[];
    $(".shop p").each(function (index,element) {//遍历每个对象
                    
        var num=parseInt($(this).html().slice(1,6)) 
        console.log(num);
        
        if((num>=a&num<=b)){ 
            var typecode=$(this).parent().parent().attr('lcode');   
    }
        typecodeall.push(typecode);
        console.log(typecodeall);
        
           var jsonStr = JSON.stringify({"L_code":typecodeall});
           $('.L2_section_shops').empty();
           localStorage.removeItem('lgoods');
            localStorage.setItem('lgoods',jsonStr);
        
        })
            if (localStorage.getItem('lgoods')) {
                
                var codeArr = JSON.parse(localStorage.getItem('lgoods')).L_code;
                // console.log(codeArr);
                
                 }
                    $.ajax({
                        url: 'data/goods.json',
                        type: 'get',
                        dataType: 'json',
                        cache: false,
                        success: function (jsonArr){
                          
                            $.each(codeArr,function (i,lcode){
                                $.each(jsonArr,function (index,item){
                                    if (lcode == item.lcode){
                                        results += `<div class="shop " lcode="${item.lcode}">
                                <div class="shop_box">
                                    <a href="http://10.36.135.26//test/dist%20lw/index3.html"><img src="${item.imgurl[0]}" alt=""></a>
                                </div>
                                <div class="shop_scoll">
                                    <div class="_color"></div>
                                    <h5>${item.type}</h5>
                                    <p>${item.price}</p>
                                </div>
                                </div>`;
                                    }
                                })
                            })
                            // $('.L2_section_shops').empty();
                            $('.L2_section_shops').append(results);
                            
                        }
                      
                        })



                        
}
function changebox(){
    $(".shop_box a img").each(function (index2) {
   
    
        $(this).on('mouseenter',function(){
            console.log(1);
        var i=0;
        var box_img= boxchange();
        var _this=this;
        var timess=null; 

        console.log(index2);
        timess=setInterval(function(){ 
                i+=1;
                console.log(box_img);
                
                $(_this).attr('src',box_img[index2].imgurl[i]);
                if(i==2){
                    i=0;
                }
            },500)
        
            $('.shop_box img').on('mouseleave',function(){
                clearInterval(timess);
                $(this).attr('src',box_img[index2].imgurl[0]);
            })
        })
    })
} 




function l_loaddata(){
    
    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (jsonArr){
            var typecodeall=[];
            var results = '';
            $.each(jsonArr,function (index,item){
                results += `<div class="shop " lcode="${item.lcode}">
                <div class="shop_box">
                    <a href="http://10.36.135.26//test/dist%20lw/index3.html"><img src="${item.imgurl[0]}" alt=""></a>
                </div>
                <div class="shop_scoll">
                    <div class="_color"></div>
                    <h5>${item.type}</h5>
                    <p>${item.price}</p>
                </div>
                </div>`;
    
                localStorage.removeItem('lgoods');
          
            typecodeall.push(item.lcode);
            var jsonStr = JSON.stringify({"L_code":typecodeall});
             localStorage.setItem('lgoods',jsonStr);
    
                  
            });
            $('.L2_section_shops').html(results);
         
           
            // $('.shop').each(function(index){
            //     typecode=$('this').attr('lcode');  
               
       
          
            changebox()
    
        }
        
        })
}


function phonenumchange(){
    var lcodeArr='';
    
    if(localStorage.getItem('lgoods')){
        
        lcodeArr = JSON.parse(localStorage.getItem('lgoods')).L_code;
        console.log(lcodeArr);  
        $('.phonenum').html(lcodeArr.length)
        
       
    }
}



