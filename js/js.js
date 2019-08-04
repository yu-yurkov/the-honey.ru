$( document ).ready(function () {


    $('body').on('click','.dropdown-box', function (event) {

        event.stopPropagation();

        if ( $(this).siblings(".dropdown").hasClass("slidein")){
            $('.dropdown').removeClass('slidein');
        }else{
            $('.dropdown').removeClass('slidein');
            $(this).siblings(".dropdown").addClass('slidein');
        }

    });

    $(document).click( function(event){
        if( $(event.target).closest(".dropdown").length)
            return;
        $(".dropdown").removeClass('slidein');
        event.stopPropagation();
    });


    
})

