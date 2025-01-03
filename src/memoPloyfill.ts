

const product = (num1:number, num2:number) => {
  
  for (let i = 0; i < 400000; i++);
  return num1 * num2;
};

const memo = (fn:(...args:number[])=>number) => {
  
  let res:{
    [key:string]:number
  } ={}
  return function(...args:number[]){
    const key = JSON.stringify(args)
    if(!res[key]){
        res[key]=fn(...args)
    }
    return res[key]
  }
};
const memoProduct = memo(product)

const first = performance.now();
console.log(`Result: `, memoProduct(123893, 1299123));
console.log('Time: ', performance.now() - first);

const second = performance.now();
console.log(`Result:`, memoProduct(123893, 1299123));
console.log('Time: ', performance.now() - second);
