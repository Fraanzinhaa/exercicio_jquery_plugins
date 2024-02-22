$(document).ready(function() {
  $('#carousel-imagens').slick({          //inicializando a função slick
    autoplay: true,                       //aqui coloca o comportamento do slide mudando sozinho quando passa o mouse
  }); 

  $('.menu-hamburguer').click(function() {
    $('nav').slideToggle();
  }) //slide toggle ele faz a verificação do slidedown e up

  $('#telefone').mask('(00) 00000-0000')

  //$('#telefone').mask('SSS-0000', {
    //placeholder: 'ABC-1234'
  //}) para placa de carro

  //$('#telefone').mask('(00) 00000-0000', {
    //placeholder: '(12) 34567-890'
  //}) data de nascimento 

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
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false,
      }
    },
    messages: {
      nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function(form) {
      console.log(form)
    },
    invalidHandler: function(evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
      }
    }
  })

  $('.lista-veiculos button').click(function() { //efeito de clicar no botão e ele rolar a pag até contato
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text(); //this vai acessar o pai que é o li (usando a função:parent), depois vamos procurar o elemento usando find sendo o h3, e queremos o que do h3? o texto

    $('#veiculo-interesse').val(nomeVeiculo) //o val serve tanto para recuperar um valor de input como para setar esse valor

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000) //tempo de 1s
  })
});