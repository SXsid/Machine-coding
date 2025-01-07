// implemt currying (callling one funtion retparter with parmet it will take by itself no need to call it casue it will take only the pasing value resulting(ifnite calls))

//1) wihtout clouser

let result =0

const sum = (a:number)=>{
    if(a===undefined){
        return result
    }
    result +=a;
    return sum
}
//@ts-ignore
console.log(sum(2)(3)());
