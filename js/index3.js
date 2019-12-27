if(document.getElementById('pre') != null){


$(function () { //加载dom再执行
    var preindex=0;
    // var index = 0; // 记录当前小圆点下标
    var isanimate = true; // 是否自动播放
    var interval; // 自动播放定时器
    $('.bot').click(function () {
        $(this).css("border","1px solid black");
        $(this).siblings().css("border","none");
        var index=$(this).attr('index')
       console.log(index);
       if(index<preindex){
        $('.L3_navs').stop().animate({left: ((-preindex) * 600)+((preindex-index)*600)}, 500)
     
       }else if(index>preindex){
        $('.L3_navs').stop().animate({left: ((-preindex)* 600)-((index-preindex)*600)}, 500)
       
       }else{
        $('.L3_navs').stop().animate({left: (-preindex)* 600+0}, 500)
        
       }
       console.log(preindex);
       preindex=index;

    })

    
})
var nav1X=document.querySelector('.nav1X')
var nav1C=document.querySelector('.nav1C')
var return_top=document.querySelector('.return_top')
var times=null;


console.log(nav1X);


$('.nav1X').click(function (){
    var scl=document.body.scrollTop || document.documentElement.scrollTop
    // var times=null;
    times=setInterval(function(){
        scl=scl+50;
        if(scl>=1000){
            clearInterval(times);
            scl=1000;
        }
        document.body.scrollTop=scl;
        document.documentElement.scrollTop=scl;
    },10)
})
$('.nav1C').click(function (){
    var scl=document.body.scrollTop || document.documentElement.scrollTop
    // var times=null;
    times=setInterval(function(){
        scl=scl+50;
        if(scl>=2455){
            clearInterval(times);
            scl=2455;
        }
        document.body.scrollTop=scl;
        document.documentElement.scrollTop=scl;
    },10)
})
$('.return_top').click(function (){
    var scl=document.body.scrollTop || document.documentElement.scrollTop
    // var times=null;
    times=setInterval(function(){
        scl=scl-50;
        if(scl<=0){
            clearInterval(times);
            scl=0;
        }
        document.body.scrollTop=scl;
        document.documentElement.scrollTop=scl;
    },10)
})

function domc(dom){
    var l=0;
    var t=0;
    var cll=dom.clientLeft;
    var clt=dom.clientTop;
    while(dom){
        l=l+dom.clientLeft+dom.offsetLeft;
    t=t+dom.clientTop+dom.offsetTop;
    dom=dom.offsetParent;
    }
   return{left:l-cll,top:t-clt}
}


var minbox=document.querySelector('.L3_imgbox')
var maxbox=document.querySelector('.L3_maxbox')

var mask=document.querySelector('.maskbox')
var maxboximg=document.querySelector('.L3_maxbox img')
var scale1=document.querySelector('.scale1')
var scale2=document.querySelector('.scale2')
var scalep=document.querySelector('.scale p')


$('.scale1').click(function (){
    maxbox.style.display='block';
    mask.style.display='block'
    minbox.style.zIndex='999';
    minbox.style.opacity='0';
    scale1.style.display='none';
    scale2.style.display='block';
    })
$('.scale2').click(function (){
        maxbox.style.display='none';
        minbox.style.zIndex='999';
        minbox.style.zIndex='0';
        minbox.style.opacity='1';
        scale2.style.display='none';
        scale1.style.display='block';
})
// minbox.onmouseleave=function(){
//     maxbox.style.display='none';
//     minbox.style.zIndex='999';
//     minbox.style.zIndex='0';
//     minbox.style.opacity='1';
// }
$('.L3_imgbox').mousemove(function(ev){
    var e=ev||event;
    var left=e.clientX-domc(this).left-mask.clientWidth/2
    var top=e.clientY-domc(this).top-mask.clientHeight/2
    
    if(left<=0){
        left=0;
    }
    if(left>=(minbox.clientWidth-mask.clientWidth)){
        left=minbox.clientWidth-mask.clientWidth
    }
    if(top<=0){
        top=0;
    }
    if(top>=(minbox.clientHeight-mask.clientHeight)){
        top=minbox.clientHeight-mask.clientHeight
    }
    mask.style.left=left+'px';
    mask.style.top=top+'px';

    var scalex=left/(minbox.clientWidth-mask.clientWidth);
    var scaley=top/(minbox.clientHeight-mask.clientHeight);
    var x=scalex*(maxboximg.clientWidth-maxbox.clientWidth);
    var y=scaley*(maxboximg.clientHeight-maxbox.clientHeight);
    console.log(x);
    
    maxboximg.style.left=-x+'px';
    maxboximg.style.top=-y+'px';
})
}