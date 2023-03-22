import React, { useEffect, useState } from 'react'
import "./Transactions.css"

const Transactions = () => {
  const [data,setData] = useState(JSON.parse(localStorage.getItem("Transactions")) || ["No Data"]);
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("Transactions")) || ["No Data"])
  },[data])
  // console.log(data);
  return (
    <div className='transac'>
      <h3>Transactions:</h3>
      {
        data.map((item)=>{
          return <>{item}<br/></>
        })
      }
    </div>
  )
}

export default Transactions