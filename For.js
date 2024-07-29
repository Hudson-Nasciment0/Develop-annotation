/*Estrutura de Repetição - L00P

--FOR

    1) INICIALIZAÇÃO - criar uma variavel e colocar um valor inicial para ela;
    2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
        Ele irá verificar antes de cada iteração
    3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que nosso for ([inicialização]; [condição]; [expressção final]){
        Seu código aqui
        }
*/
// length(tamanho do array) = 3
const users = [ 
    "Maria",
    "Aline",
    "João",
    
]
// users.length => Tamanho do meu array
for (let i = 0; i < users.length; i++){
    console.log(users[i])
}

