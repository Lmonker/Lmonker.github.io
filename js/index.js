/* 
* @Author: anchen
* @Date:   2019-07-19 22:09:54
* @Last Modified by:   anchen
* @Last Modified time: 2019-07-21 20:11:36
*/
$(function(){
    init();
    
    function init(){
    var linum=5*5*5;
    var X=0;
    for (var i = 0; i<linum; i++) 
    {
        $li=$('<li></li>');
        $li.html('fly');
        var iX,iY,iZ;
        iX=(Math.random()-0.5)*5000;
        iY=(Math.random()-0.5)*5000;
        iZ=(Math.random()-0.5)*5000;
        $li.css({
                'transform' : 'translate3d('+ iX +'px,'+ iY +'px,'+ iZ +'px)'
            });
        $('#main').append($li);
        var timer=setTimeout(function(){
            fangx();
        },30);
    }
    

};
    (function(){
        $('#main li').click(function(ev){
            ev=ev||window.event;
        $('#win').fadeIn(500).css({
            'transform':'rotateY(0deg) scale(1)',
            'transition':'0.5s'
        });
        ev.stopPropagation();                                                    //阻止冒泡
    });
        $('#close').click(function(){
             $('#win').fadeOut(500,function(){
             $(this).css({
                 transform:'rotateY(0deg) scale(0.8)',
             });
         }).css({
             transform:'rotateY(180deg) scale(0.01)',
         });
        });
    $('#lij').click(function(){
        $('#wrap').css({
            'marginLeft':'-100%',
            'transition':'1s',
        });
        $('#main').css({
            'marginLeft':'-300%',
            'transition':'1s',
        });
        $('#bttn').click(function(){
            $('#wrap').css({
            'marginLeft':'0',
            'transition':'1s',
        });
            $('#main').css({
            'marginLeft':'0',
            'transition':'1s',
        });
            timer();
        });
    });})();
    function fangx(){
    var jjX=300,jjY=300,jjZ=600;
    var $li=$('li');
    var firstX=-2*jjX;
    var firstY=-2*jjY;
    var firstZ=-2*jjZ;
    $('#main li').each(function(i){
        var X=(i%25)%5;
        var Y=parseInt((i%25)/5);
        var Z=parseInt(i/25);
        $(this).css({
                'transform' : 'translate3d('+ ( firstX + X*jjX ) +'px,'+ ( firstY + Y*jjY ) +'px,'+ (firstZ + Z*jjZ) +'px)'
            });
    });
};

    shubiao();

    function shubiao(){
    $d=$(document);
    var nowX , lastX , cX , nowY , lastY , cY;
    var roX=0;
    var roY=0;
    var roZ=-3000;
    $d.mousedown(function(ev){
        ev = ev || window.event;
            lastX = ev.clientX;
            lastY = ev.clientY;
        $(this).on('mousemove',(function(ev){
            ev=ev||window.event;
            nowX=ev.clientX;
            nowY=ev.clientY;
            cX=nowX-lastX;
            cY=lastY-nowY;
            roX+=cX*0.2;
            roY+=cY*0.2;
            lastX=nowX;
            lastY=nowY;
            $('#main').css({'transform':'translateZ('+roZ+'px) rotateX('+roY+'deg) rotateY('+roX+'deg)'} );
        }));
    }).mouseup(function(){
        $(this).off('mousemove');
    }).mousewheel(function(e,d){
        var d=arguments[1];
        roZ+=d*50;
        roZ=Math.min(0,roZ);
        roZ=Math.max(-8000,roZ);//-8000<roZ<0
        $('#main').css({'transform':'translateZ('+roZ+'px) rotateX('+roY+'deg) rotateY('+roX+'deg)'});
    });
};
    
    var index=0;
    $('#btn li').click(function(){
        index=$(this).index();
        switch(index){
            case 0:screw();
            break;
            case 1:global();
            break;
            case 2:fangx();
            break;
            case 3:table();
            break;
        }
    });
    function screw(){
        var index=0;
        var firstY=-630;
        $('#main li').each(function(){
            index=$(this).index();
            $(this).css({'transform':'rotateY('+(index*10)+'deg) translateY('+(firstY+index*10)+'px) translateZ(800px)'});
        });
    }

    function global(){
        $('#main li').each(function(){
            index=$(this).index();
            $(this).css({'transform':' rotateX('+(index*10)+'deg) translateY(800px) translateZ(800px)'});
        });
    }
    function table(){
        $('#main li').each(function(){
            index=$(this).index();
            if(index>0&&index<4){
                index+=15;
            }else if(index>3&&index<12){
                index+=24;
            }else if(index>11){
                index+=33;
            }
            var X=(index%17)*150-(9*150);
            var Y=(parseInt(index/17))*200-(4*200);
            $(this).css({
                'transform' : 'translate('+X+'px,'+Y+'px) rotateX(0deg) rotateY(0deg)',
            });
            $('#main').css({
                'transform' : 'translateZ(-3000px) rotateX(0deg) rotateY(0deg)',
                'transition': 'transform 3s ease-in-out'
            });

        });
        timer();
    }
});
    function timer(){
        setTimeout(function(){
            $('#main').css({
                'transition': 'transform 0s ease-in-out'
            });
        },3000);
    };