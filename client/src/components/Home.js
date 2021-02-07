import React,{useState,useEffect} from 'react'
import DoughnutChart from './DoughnutChart'
import Maps from './Maps'

function Home() {
    const [stateName,setStateName]=useState([])
    return (
        <div>
        <Maps/>
        </div>
    )
}

export default Home
