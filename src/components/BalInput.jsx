import React, { useState } from 'react'
import "./BalInput.css"

const BalInput = () => {
    const [balance,setBalance] = useState(JSON.parse(localStorage.getItem("amount")) || 0);
    const [transac,setTransac] = useState(JSON.parse(localStorage.getItem("Transactions")) || [])
    const handleadd=()=>{
        let ipval = document.getElementById("inputval").value;
        if(ipval>0 ){
            let tot = Number(ipval)+Number(balance);
            localStorage.setItem("amount",JSON.stringify(tot))
            setBalance(tot);
            const d = new Date();
            let data = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}T ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}Z - ${ipval} - Add`
            let arr = [...transac,data];
            localStorage.setItem("Transactions",JSON.stringify(arr));
            setTransac(arr)
        }
        else{
            alert("Please enter amount in input box")
        }
    }
    const handlesub=()=>{
        let ipval = document.getElementById("inputval").value;
        if(ipval>0 && Number(balance)>=ipval){
            let tot = Number(balance)-Number(ipval);
            localStorage.setItem("amount",JSON.stringify(tot))
            setBalance(tot);
            const d = new Date();
            let data = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}T ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}Z - ${ipval} - Remove`
            let arr = [...transac,data];
            localStorage.setItem("Transactions",JSON.stringify(arr));
            setTransac(arr)
        }
        else{
            alert("Please enter amount in input box (or) Balance is 0.")
        }
    }
  return (
    <div className='first'>
        <div>
            <h2>Balance : {balance}</h2>
            <input type="number" id='inputval' />
        </div>
        <div className="btns">
            <button onClick={handleadd}>Add</button>
            <button onClick={handlesub}>Remove</button>
        </div>
    </div>
  )
}

export default BalInput