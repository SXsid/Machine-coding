import  { useEffect, useState, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {tokyoNight,} from "@uiw/codemirror-theme-tokyo-night"
export default function TextGenerate() {
  
  const [data] = useState(staticCode.split(' '));
  const [res, setRes] = useState('');
  const inteval = useRef<number | null>(null);
  let i = 0;
  function handleClick() {

    inteval.current = setInterval(() => {
        
        console.log("ruuning");
        
      if (i < data.length-1) {

        setRes((prev) => prev + ' ' + data[i]);
        i++;
      }
      else{
        console.log("stop");
        
        if(inteval.current) clearInterval(inteval.current)
      }

    }, 100);
  }
  function hadleReset() {
    i = 0;
    setRes("")
    if (inteval.current) clearInterval(inteval.current);
    inteval.current=null
  }
  useEffect(() => {
    return () => {
      if (inteval.current) clearInterval(inteval.current);
    };
  }, []);
  return (
    <div>
        {JSON.stringify(inteval.current)}
      <button disabled={inteval.current}onClick={handleClick}>start</button>
      <button onClick={hadleReset}>reset</button>
      <CodeMirror
      theme={tokyoNight}
        value={res}
        height="500px"
        extensions={[javascript({ jsx: true })]}
      />
    </div>
  );
}
 const staticCode = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 let start = 0;
 let end = arr.length - 1;
 while (start <= end) {
   let mid = Math.floor((start + end) / 2);
   if (arr[mid] === target) {
     return mid;
   }
   if (arr[mid] < target) {
     start = mid + 1;
   }
   if (arr[mid] > target) {
     end = mid - 1;
   }
 }
 return false;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
`;
