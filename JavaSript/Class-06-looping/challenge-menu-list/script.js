// Faça um Menu com as seguintes opções:
/*
Digite a opção desejada:
1 - Cadastrar item
- Poder cadastrar itens enquanto não cancelar
- Alertar usuário para adicionar item caso não informe
- Mostrar mensagem de sucesso junto do nome ao cadastrar
- Fazer alerta de item cadastrado caso ele já esteja cadastrado
2 - Ver itens cadastrados
- Mostrar itens cadastrados
- Alertar caso a lista esteja vazia
3 - Remover item cadastrado
- Alertar caso a lista esteja vazia
- Poder remover itens pelo nome enquanto não cancelar
- Remover item automaticamente caso só tenha um na lista
- Mostrar mensagem de sucesso junto do nome ao remover
- Alertar usuário caso o item informado não seja encontrado
4 - Sair do programa
*/

const listItens = []
let menuOption

while (true) {
    menuOption = prompt(`
    Digite a opção desejada:
    1 - Cadastrar item
    2 - Ver itens cadastrados
    3 - Remover item cadastrado
    4 - Sair do programa
    `)

    if (menuOption === '4' || menuOption === null) {
        break;
    }

    if (menuOption === '') {
        alert("Por favor, escolha uma opção!")
        continue;
    }

    switch (menuOption) {
        case '1':
           while (true) {
            let item = prompt("Digite o nome do item")
                                    
                if (item === null) {
                    break;
                }

                if (item === '') {
                    alert("Por favor, digite o nome para cadastrar!")
                    continue;
                }

                if (listItens.includes(item)) {
                    alert("Item já cadastrado!")
                    
                } else {
                    listItens.push(item)
                    alert(`"${item} cadastrado com sucesso!"`)
                }

            }
    
            break;

        case '2':
            if (listItens.length == 0) {
                alert('Lista vazia!')
            } else {
                alert(listItens)
            }
            break;

         case '3':
                if (listItens.length == 1) {
                    alert(`${listItens[0]} removido com sucesso!`)
                    listItens.pop()
                    break;
                }
             
            while (true) {           
                if (listItens.length == 0) {
                alert('Lista vazia!')
                break;
             } else {
                let item = prompt('Digite o nome para remover:') 
                
                if (item === null) {
                    break;
                }

                if (item === '') {
                    alert("Por favor, digite o nome para cadastrar!")
                    continue;
                }

                if (listItens.includes(item)) {
                    listItens.splice(listItens.indexOf(item), 1)
                alert(`"${item}" foi removido!`)
                } else {
                    alert("Item não encontrado!")
                }
            }
        }
            break;
        default:
            break;
    
    }
    console.log(listItens)
}
alert("Programa cancelado!")