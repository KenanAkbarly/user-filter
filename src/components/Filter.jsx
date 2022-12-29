import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Filter = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [input,setInput] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const handleChange = event => {
        setInput(event.target.value);
        console.log(input);
        
      };
      const searchItems = (searchValue) => {
        setInput(searchValue)
        if (input !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(input.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(data)
        }
    }
    useEffect(()=>{
        axios
        .get('https://randomuser.me/api/?results=100')
        .then((res)=>{
            setData(res.data.results)
            console.log(res.data.results);
            setLoading(false)
        })
    },[])
  return (
      <>
            <input type="text" value={input} onChange={handleChange}/>
        {loading?(<div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div>):(<> 
         {
            input.length>1?(
                filteredResults.map((item)=>{
                    <div key={item.id}>
                <span>{item.name.title}   </span>
                <span>{item.name.first}   </span>
                <span>{item.name.last}   </span>
            </div>
                })
            ):
          ( 
            data.map((item)=>{
        return(
            <div key={item.id}>
                <span>{item.name.title}   </span>
                <span>{item.name.first}   </span>
                <span>{item.name.last}   </span>
            </div>
        )
       })
     )
         }
</>
     )   
        }
    </>
  
  )
}

export default Filter
