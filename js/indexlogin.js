if(document.getElementById('pass') != null){


$('.Llogin_btn1').click(function (){
    console.log(key());
    var value=key();
    if(value=1){
        localStorage.setItem('keyword',$('.Llogin_text1').html())
    }
    
})

   function key(){
       var keyword;
    $.ajax({
        url: 'data/login2.php',
        type: 'get',
        dataType: 'json',
        cache: false,
        async: false,
        data: 'act=login&user='+$('.Llogin_text1').val()+'&pass='+$('.Llogin_text2').val(),
        success: function (data){
            alert(data.msg)
            console.log(data);
           
            if(data.err==0){
                $(location).attr('href','http://10.36.135.26//test/dist%20lw/');
                keyword='1'
                
            }
              
            } 
    })
    return keyword;
 
   }



$('.Llogin_btn2').click(function (){
    $.ajax({
        url: 'data/login2.php',
        type: 'get',
        dataType: 'json',
        cache: false,
        data: 'act=add&user='+$('.Llogin_text1').val()+'&pass='+$('.Llogin_text2').val(),
        success: function (data){
            alert(data.msg);
        }
    })
})
}