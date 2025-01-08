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



//@ with colosru(just to incapluat the data)


const sumb = (a)=>{
    let res =0;
    const inner = (a)=>{
        if(a===undefined){
            return res;
        }
        res+=a;
        return inner
    }
    return inner(a)
}
console.log(sumb(2)(3)(4)());

