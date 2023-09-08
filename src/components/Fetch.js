import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Customers from './customers.json'
import Table from './Table.js'

function Fetch()
{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
    setPosts(Customers)},[])
    return (
       <Table data={Customers}/>
    )
}
export default Fetch;
