/*
IF (SE)
Else (Se não)
Else if (SE ENTÃO)
 */

const temperature = 30

if(temperature === 36){
    console.log("Você está saudável")
}

else if( temperature > 36 && temperature <=40){
    console.log("Está com febre")
}

else if(temperature > 40){
    console.log("Está com muita febre")
}

else{
    console.log("Está com hipotermia")
}