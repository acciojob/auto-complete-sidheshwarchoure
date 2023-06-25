
import React, { useEffect, useState } from "react";
import './../styles/App.css';

let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]


const App = () => {

  let [search,setSearch] = useState("")

  let [filterFruits,setFilterFruits] = useState(fruits)
  
  useEffect(()=>{
    setFilterFruits(fruits.filter(value=>value.toLowerCase().includes(search.toLowerCase())))
  },[search])
  return (
    <div>
        <input type="text" placeholder="Search"
        onChange = {e => setSearch(e.target.value)}/>

        <ul>
          {
          filterFruits.map(value =>(
            <li>{value}</li>
          ))
         }
        </ul>

    </div>
  )
}

export default App;
