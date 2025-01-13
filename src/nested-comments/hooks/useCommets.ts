import { useState } from "react"
import { dataProp } from "../data"



export default function useComments(comments:dataProp[]){
    const [data,setData]=useState(comments)
    return{
        comments
    }
}