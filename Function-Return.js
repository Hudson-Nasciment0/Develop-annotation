
// Função void (vazia). não retorna nada.
// Função return, retorna um valor para quem chamou a função


// function sum(value, value2){ //void
//     console.log( value, value2)
// }

// function sum(value, value2){
//     const result = value + value2
//     return result
// }




/*
        Calculo Desconto: 

        Todos os Produtos Acima de R$ 30,00 tem desconto de 10%

*/



const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0
const finalValue = 

function calculetDiscount(price, discount){
        const result =  (price * discount) / 100
        return result
}


cart.forEach(value => {

        if(value > 30){
                const discount = calculetDiscount(value, 10)
                finalValueWithDiscount = finalValueWithDiscount + (value - discount)
        }else{
                finalValueWithDiscount += value
        }
        
        
});
console.log(`O valor final da compra foi de : R$ ${finalValueWithDiscount}, 
porém você teve desconto, irá pagar apenas R$ ${finalValueWithDiscount},
você economizou ${finalValueWithDiscount}`)
















// let finalValue = 0



// /*         R$ 250,00 // 7% =  R$ 17,5
//         250 * 7 -> 1750 / 100 

// */

// function calculetDiscount(price, discount){
//         const result = (price * discount) / 100
//         return result
// }



// cart.forEach(value => {
//         if(value > 30){
//                 const discount = calculetDiscount(value, 10)
//                 finalValue = finalValue + (value - discount)
//         }else{
//                 finalValue += value
//         }
        
        

        
// });
// console.log(finalValue)




























