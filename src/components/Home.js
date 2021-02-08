import React,{useState,useEffect} from 'react'
import DoughnutChart from './DoughnutChart'
import Hero from './Hero'
import Maps from './Maps'

function Home() {
    const [stateName,setStateName]=useState([])
    return (
        <div className="main_class">
        <Hero/>
        <Maps/>
        </div>
    )
}

export default Home
