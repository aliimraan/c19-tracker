import React,{useState,useEffect} from 'react'
import '../App.css'

function Boxes({color,bg,title,item,total}) {
    const [number,setNumber]=useState('')
    const [all,setAll]=useState('')
   useEffect(()=>{
        setAll(total)
        setNumber(item)
   },[item,total])
    return (
        <div className="boxes" style={{backgroundColor:bg}}>
            <div className="boxes-heading" style={{color:color}}>{title}</div>
            <p style={{color:color}}>{number===''?all:number}</p>
        </div>
    )
}

export default Boxes
