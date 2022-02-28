/* Sequencia de passos:
1. Criar Id para os botões de sessão (1 a 4)
2. Selecionar esses botões no jv
3. Interceptar o evento de clique
4. Recuperar o Id adicionado
*/

const listaOpcoes = document.querySelector('.secaoDetalhesConta_opcoesTransacao')

listaOpcoes.addEventListener('click', identificarOpcoes)

function identificarOpcoes(event){
    
    //identificando onde ocorreu o clique
    const li = event.target

    //verificando se é uma LI
    if(li.tagName == 'LI') {
        
        //recuperando o ID
        const id = li.id
        console.log(id)

        //selecionando a secao usando o id do clique do usuário
        const secaoEscolhida = document.querySelector(`div[data-id="${id}"]`)
       
        removerSecao()

        secaoEscolhida.classList.add('mostrar')
    }
}

function removerSecao(){
    const divs = document.querySelectorAll('.secaoTransacao .container div')

    for(let i = 0; i < divs.length; i++) {
        divs[i].classList.remove('mostrar')
    }
}