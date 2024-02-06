//Usamos aqui varia

const imagemVisualizacao = document.getElementById('imagem-visualizacao');

const tituloProduto = document.getElementById('titulo-produto');

const nomeCor = document.getElementById('nome-cor-selecionada');

const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');






//TIPOS OBJETOS PARA DESCREVER AS CORES DOS PRODUTOS EM QUESTÃO

const verdeCipreste = {
    nome: ' Verde-cipreste ',
    pasta: 'imagens-verde-cipreste'
};


const azulInverno = {
    nome: ' Azul-inverno ',
    pasta: 'imagens-azul-inverno'
};


const meiaNoite = {
    nome: ' Meia-noite ',
    pasta: 'imagens-meia-noite'
};
//A vírgula é usada justamente para adicionar outros conteúdo dentro do Objeto.

const estelar = {
    nome: ' Estelar ',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: ' Rosa-claro ',
    pasta: 'imagens-rosa-claro'
};

// Array usamos para habilitar uma Lista



//Abrimos uma Array para acessar as cores e seus itens.
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

//criamos uma variavel tipo constante para conseguir acessar e futuramente alterar os tamanho dos itens
const opcoesTamanho = ['41 mm', '45 mm'];







//A imagem selecionada por padrão é a "1".
let imagemSelecionada = 1;

//O tamanho da imagem selecionado é a "1".
let tamanhoSelecionado = 1;

//A cor selecionada por padrão
let corSelecionada = 1;







//Aqui vamos criar a inteligência para selecionar as imagens a qual serão selecionadas.


function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;   //Aqui estamos chamando o seletor da imagem selecionada através da opção "name", por isso usamos o "querySelector", e também acrescentamos com ":" um estado em específico, ou seja o "Checked", e com a opção "ID" é para identificar qual é o ID da opção selecionada.

    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    //Aqui atualizamos uma variável do tipo Let, justamente para nossa outra variável tipo Const, que está recebendo as informações do ID. Com o CharAt, podemos acessar o primeiro caracter que existe dentro do ID que inclusive está numerado.

    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg';
    //Nesta seção conseguimos localizar a imagem a qual foi seleciona, criamos uma Const para buscar essas imagens e traduzir.........

}






function trocarTamanho() {
    //atualizar variável de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

    //mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva" + opcoesCores[corSelecionada].nome + "para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //Chamamos a viriável a qual criamos, chamamos ela aqui e usamos o INNERTEXT, que serve para atualizar o texto

    //mudar o tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}




function trocarCor() {

     //Atualizar cor selecionada
     const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
     corSelecionada = idOpcaoSelecionada.charAt(0);

    //trocar título da página
    tituloProduto.innerText = "Pulseira loop esportiva" + opcoesCores[corSelecionada].nome + "para caixa de " + opcoesTamanho[tamanhoSelecionado];

    //trocar nome da cor
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;

    //trocar imagens das miniaturas exibidas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg'

    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'

    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg'



    //trocar imagem de visualização
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg';

}




