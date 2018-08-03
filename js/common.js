$(document).ready ( function(){


    // начать повторы с интервалом 2 сек
    var id_slide = 1;
    if ($(window).width() >= 720 ) {

        var timerId = setInterval(function() {
            id_slide++;
            if (id_slide == 5) {
                id_slide = 1;
            }

            $('.section_4 .descr .slide_v1').hide();
            $('.section_4 .descr .slide_v1[data-slide = '+id_slide+']').show();

            $('.section_4 .navigate .btn').removeClass('active');
            $('.section_4 .navigate .btn[data-slide ='+id_slide+']').addClass('active');
        }, 5000);

    }else {
        $('.section_4 .descr p.btn').click(function () {
            var id = $(this).data('slide');
            $('.section_4 .descr p.btn').removeClass('active');
            $(this).addClass('active');
            $('.section_4 .descr .slide_v1').hide();
            $('.section_4 .descr .slide_v1[data-slide = '+id+']').show();
        });
    }


    //Банер на 4 слайде
    $('.section_4 .navigate .btn').click(function () {
        var id = $(this).data('slide');
        clearInterval(timerId);//Остановка автоматического слайда
        $('.section_4 .navigate .btn').removeClass('active');
        $(this).addClass('active');

        $('.section_4 .descr .slide_v1').hide();
        $('.section_4 .descr .slide_v1[data-slide = '+id+']').show();
    });

    var h = $('.section.section_14').css('height');
    $('.section.section_14 iframe').css('height', h );


    //Модальное окно
    /*$('button[data-toggle = modal]').click(function () {
        $('#exampleModal').show();
    });
    $('.modal .close, .modal .bg, .modal .btn.btn-secondary').click(function () {
        $('.modal').hide();
    });
    */
});