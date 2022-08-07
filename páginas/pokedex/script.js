var formulario = document.querySelector('form');
var botaoShiny = document.getElementById('botao-shiny');

formulario.addEventListener('submit', function(e){
    // impedindo a pagina de se auto recarregar ao submit
    e.preventDefault();

    // url da api dos pokemons
    let apiPokemon = "https://pokeapi.co/api/v2/pokemon/";

    // valor do formulario
    let nome = document.getElementById("name");

    // unindo a url com o valor do formulario
    apiPokemon = apiPokemon + this.name.value;

    // Transforma os valores em minúsculas
    apiPokemon = apiPokemon.toLocaleLowerCase()

    // id conteudo e imagem
    let resposta = document.getElementById('content');
    let imagem = document.getElementById('imgPokemon');

    let html = '';

    fetch(apiPokemon)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data);
            html = 'Name: ' + data.name + '<br>';
            html += 'Id: ' + data.id + '<br>';
            html += 'Type: ';

            // loop para pegar todos os tipos de um pokemon
            let i = 0;
            while(i < data.types.length){

                if( i < data.types.length - 1){
                    html += data.types[i].type.name + ', ';
                }
                else{
                    html += data.types[i].type.name + '<br>'
                }
                    
                i++;
            }

            html += 'weight: ' + data.weight/10 + 'kg <br>';
            html += 'height: ' + data.height/10 + 'm <br>';

            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado! 😒';
            } else {
                html = err;
            }
            resposta.innerHTML = html;
            imagem.innerHTML = "<img src='" + "./img/error.png" + "'><img src='"
        })

})
