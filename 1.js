$(function (){

    'use strict';
    //smoothy scroll to element

    $('.navbar li a').click(function (e){
        
        e.preventDefault();

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
            

    });
    
});
