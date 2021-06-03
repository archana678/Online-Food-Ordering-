$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle i').toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })
    $('.menu .list .btn').click(function(){
        let src = $(this).attr('data-src');
        $('#menu-img').attr('src',src);
    })
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('nav').addClass('sticky');
        }
        else{
           $('nav').removeClass('sticky');
        }
    })
})
