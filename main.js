
$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $('#nova-tarefa').val();
        $(`<li class="lista-tarefa"> ${nomeTarefa} </li>`).appendTo('ul');

        $('#nova-tarefa').val('');
    });

    $(document).click(function(){

        $('.lista-tarefa').css('text-decoration','line-through');
    })

    
});
