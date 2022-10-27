let factorial = 1;
let bucle = true;
let j=1;
while (bucle){
    if(j<=10){
        factorial =+ factorial * j;
    }else{
        break;
    }
    j++;    
}
console.log(factorial);