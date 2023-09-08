import React from 'react'

function Table({data}) {

    const [cdata,setCdata]=React.useState(data)
    const keys=Object.keys(data[0])
    const del=(id)=>
    {
        const updateData=data.filter(item=>(item.id!=id))
        setCdata(updateData)
    }
  return (
    <div className='table-responsive m-5'>
        <table id="myTable" className='table table-stripped'>
            <thead className='table table-dark'>
                <tr>
                <th>Id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>IP</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    cdata.map((item,index)=>
                    <tr key={item.id} id={item.id}>
                       {
                         keys.map((k,index)=>
                         <td key={index}>{item[k]}</td>)
                       }
                        <td><button className='btn btn-danger' id={item.id} 
                        onClick={()=>del(item.id)}>Delete</button></td>
                    </tr>)   
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table;
