/*
  ForEach(intem, index, array)


*/

const users = [
    {name : 'Rodolfo', age: 33, contact: '(19) 94343-3434'},
    {name : 'Paulo', age: 21, contact: '(12) 94343-3434'},
    {name : 'Aline', age: 40, contact: '(13) 94343-3434'},
    {name : 'Maria', age: 12, contact: '(14) 94343-3476'},
]

users.forEach( (item, index) => {
    console.log(index +1, item)
    
});




// For each não tem necessidade de dizer quando ele ira parar como nos outros for que dependem de (break).



        // Estrutura de For Each com Function

// users.forEach(function (item, index){
//     console.log(index, item, array)
    
// });



// For each feito com template Strings  as (``) colocando as variaveis e strings

// users.forEach(function (item, index){
//     console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
    
// });
