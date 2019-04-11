$(document).ready(
    function(){

        // // Sticky navigation
        // $('.about-section').waypoint(
        //     function(direction){
        //         if(direction=="down"){
        //             $('nav').addClass('sticky');
        //         }
        //         else{
        //             $('nav').removeClass('sticky');    
        //         }
        //     }, {
        //         offset: '900px'
        //     }
        // ) 

        // // Scroll
        // $('a').click(
        //     function(event){
        //         $('html, body').animate({
        //             scrollTop: $( $.attr(this, 'href') ).offset().top
        //         }, 500);
        //         event.preventDefault();
        //     }
        // )

        // Mobile navigation
        $('.icon__menu').click(
            function(){
                $('.mobileNavigation__content').slideToggle(200);

                if($('.icon__menu').hasClass('fa-bars')){
                    $('.icon__menu').addClass('fa-times');
                    $('.icon__menu').removeClass('fa-bars')
                }
                else{
                    $('.icon__menu').addClass('fa-bars');
                    $('.icon__menu').removeClass('fa-times');
                }
            }

        )

    }
)