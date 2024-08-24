$(document).ready(function(){
    $('#campo-telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        }
    })

    $('.lista-relogios button').click(function(){
        const destino = $('#contato');
        const nomeRelogio = $(this).parent().find('h3').text();

        $('#modelo-relogio').val(nomeRelogio);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})

