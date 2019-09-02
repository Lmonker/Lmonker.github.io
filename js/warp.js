/* 
* @Author: anchen
* @Date:   2019-08-31 14:35:08
* @Last Modified by:   anchen
* @Last Modified time: 2019-08-31 20:55:15
*/

'use strict';
        window.onload=function(){
                $(document).scrollTop(0);
            }
        var index=0;
        var $li=$('#ul li');
        console.log($li.length)
            $(document).mousewheel(function(e,d){
                if(d<0){
                    index++;
                    if(index>=9){index=12;}
                    gd(index);
                }else{
                    index--;
                    if(index<0){index=0};
                     gdd(index);
                }
            })
            function gd(index){
            switch(index){
                    case 0:$('#li1').css({
                        top:'0px',
                    });
                    break;
                    case 3:$('#li2').css({
                        top:'40px',
                        transition:'1s',
                        opacity:'0.8',
                    });
                        var windowH=$(window).height();
                $('html,body').stop(true).animate({
                    scrollTop:1*windowH,                                    //文档滚动高度
                },500);
                    $('#text2').css({
                        right:'50px',
                        transition:'1s',
                        opacity:'1',
                    });
                    $('#text1').css({
                        right:'-300px',
                        opacity:'0',
                        transition:'0s'
                    });
                    
                    break;
                    case 6:$('#li3').css({
                        top:'80px',
                        transition:'1s',
                        opacity:'0.8',
                    });
                        var windowH=$(window).height();
                $('html,body').stop(true).animate({
                    scrollTop:2*windowH,                                    //文档滚动高度
                },500);
                $('#text3').css({
                        right:'50px',
                        opacity:'1',
                        transition:'1s'
                    });
                $('#text2').css({
                        right:'-300px',
                        opacity:'0',
                        transition:'0s'
                    });
                    
                    break;
                    case 12:$('#li4').css({
                        top:'120px',
                        transition:'1s',
                        opacity:'0.8',
                    });
                        var windowH=$(window).height();
                        $('html,body').stop(true).animate({
                            scrollTop:3*windowH,                                    //文档滚动高度
                        },500);
                        $('#text4').css({
                                right:'50px',
                                opacity:'1',
                                transition:'1s'
                            });
                        $('#text3').css({
                                right:'-300px',
                                opacity:'0',
                                transition:'0s'
                            });
                        // flash();
                    break;
        }
    }
    function gdd(index){
            switch(index){
                    case 0:$('#li1').css({
                        top:'0px',
                    });
                    break;
                    case 3:$('#li2').css({
                        top:'600px',
                        transition:'1s',
                        opacity:'0.3',
                    });
                        var windowH=$(window).height();
                        $('html,body').stop(true).animate({
                            scrollTop:0*windowH,                                    //文档滚动高度
                },500);
                        $('#text1').css({
                        right:'50px',
                        opacity:'1',
                        transition:'1s'
                    });
                $('#text2').css({
                        right:'-300px',
                        opacity:'0',
                        transition:'0s'
                    });
                    
                    break;
                    case 6:$('#li3').css({
                        top:'600px',
                        transition:'1s',
                        opacity:'0.3',
                    });
                        var windowH=$(window).height();
                        $('html,body').stop(true).animate({
                            scrollTop:1*windowH,                                    //文档滚动高度
                },500);
                        $('#text2').css({
                        right:'50px',
                        opacity:'1',
                        transition:'1s'
                    });
                $('#text3').css({
                        right:'-300px',
                        opacity:'0',
                        transition:'0s'
                    });
                    
                    break;
                    case 9:$('#li4').css({
                        top:'600px',
                        transition:'1s',
                        opacity:'0.3',
                    });
                        var windowH=$(window).height();
                $('html,body').stop(true).animate({
                    scrollTop:2*windowH,                                    //文档滚动高度
                },500);
                $('#text3').css({
                        right:'50px',
                        opacity:'1',
                        transition:'1s'
                    });
                $('#text4').css({
                        right:'-300px',
                        opacity:'0',
                        transition:'0s'
                    });
                    
                    break;
        }
    }


            $(window).resize(function(){
                var windowH = $(window).height();
                $(document).scrollTop( index * windowH );
            });   

    // function flash(){
    //     $('#li4').css({
    //                     left:'800px',
                        
    //                     opacity:'1',
    //                 });
    //     $('#li3').css({
    //                     left:'600px',
                        
    //                     opacity:'1',
    //                 });
    //     $('#li2').css({
    //                     left:'400px',
                        
    //                     opacity:'1',
    //                 });
    //     $('#li1').css({
    //                     left:'200px',
                        
    //                     opacity:'1',
    //                 });
    // }