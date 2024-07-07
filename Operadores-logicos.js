
/* 
Operadores Lógicos

&& -> E -> Pessoa Exigente /  Pessoa Obediente
    
    true && true = true
    true && false = false
    false && false = false

|| -> Ou -> Tanto faz / Filho Espertinho

    true || true = true
    true || false = true
    false || false = false

! -> Negação

    !true = false
    !false = true

*/



const digitarASenha = true
const digitarOtoken = true
const numeroDaconta = true

if(digitarASenha && digitarOtoken && numeroDaconta) {
     console.log("Logado com sucesso")

    
 }

 else{
     console.log("Autenticação FALHOU")

 }