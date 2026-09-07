// algo 1 

function valueSwapping(v1,v2){
    let v3;
    v3=v1;
    v1=v2;
    v2=v3;

    return `v1 = ${v1} and v2 = ${v2} `
}

console.log(valueSwapping(10,20));
// algorithme 2 



function getMaxValue(){
    let array=[1,10,5]
    let max=0;
    for(i=0 ; i<array.length;i++){
        if(max<array[i]){
            max=array[i];
        }
    }
return max;
}

console.log(getMaxValue());