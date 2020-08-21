$(function (){

    'use strict';

    //calculate body padding top // navbar hight
    $('body').css('paddingTop', $('.navbar').innerHeight());

    // add active class on navbar link 
    $('.navbar li a').click(function(){

        $('.navbar li a').removeClass('active');

        $(this).addClass('active');

       // $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });

    //smoothy scroll to element

    $('.navbar li a').click(function (e){
        
        e.preventDefault();

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);

    });
    
    
    
});
