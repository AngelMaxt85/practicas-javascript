let inicial = 1;
let final = 100;
let cont = inicial;

for(inicial; inicial < final; inicial++){
    if(inicial % 3 === 0){
        if(inicial % 5 === 0){
            console.log("caera la republica");
        }else{

            console.log("fizz");
        }
    }
    else{
        if(inicial % 5 === 0){
            console.log("fuzz");
            inicial++;
        }
        console.log(inicial);
    }
}


