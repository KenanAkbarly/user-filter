// import axios from 'axios'
// import React, { useEffect, useState,  } from 'react'

// const Filter = () => {
//     const [data,setData] = useState([])
//     const [loading,setLoading] = useState(true)
//     const [input,setInput] = useState([])
//     const [filteredResults, setFilteredResults] = useState([]);
//     const handleChange = event => {
//         setInput(event.target.value);
//         console.log(input);
        
//       };
//       const searchItems = (searchValue) => {
//         setInput(searchValue)
//         if (input !== '') {
//             const filteredData = data.filter((item) => {
//                 return Object.values(item).join('').toLowerCase().includes(input.toLowerCase())
//             })
//             setFilteredResults(filteredData)
//         }
//         else{
//             setFilteredResults(data)
//         }
//     }
//     useEffect(()=>{
//         axios
//         .get('https://randomuser.me/api/?results=100')
//         .then((res)=>{
//             setData(res.data.results)
//             console.log(res.data.results);
//             setLoading(false)
//         })
//     },[])
//   return (
//       <>
//             <input type="text" value={input} onChange={handleChange}/>
//         {loading?(<div class="spinner-border" role="status">
//   <span class="sr-only"></span>
// </div>):(<> 
//          {
//             input.length>1?(
//                 filteredResults.map((item)=>{
//                     <div key={item.id}>
//                 <span>{item.name.title}   </span>
//                 <span>{item.name.first}   </span>
//                 <span>{item.name.last}   </span>
//             </div>
//                 })
//             ):
//           ( 
//             data.map((item)=>{
//         return(
//             <div key={item.id}>
//                 <span>{item.name.title}   </span>
//                 <span>{item.name.first}   </span>
//                 <span>{item.name.last}   </span>
//             </div>
//         )
//        })
//      )
//          }
// </>
//      )   
//         }
//     </>
  
//   )
// }

// export default Filter
import '../components/Loader.css'
import '../components/style.scss'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi";
const Filter = () => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [input, setInput] = useState('')
    const handleChange =(event)=>{
        setInput(event.target.value)
        console.log(event.target.value)
    }
    useEffect(()=>{
        axios
        .get('https://randomuser.me/api/?results=100')
        .then((response)=>{
            setData(response.data.results)
            setLoading(false)
            console.log(response.data.results);
        })
    },[])
  return (
    <div className='body'>
        
        <div className='header'></div>
            <div className='header-left'>
                <h1 className='title'>
                找人
                </h1>
      <div className='search_components'> <input type="text" placeholder='Search user...' value={input} onChange={handleChange} 
      /><BiSearch/></div>
            </div>
    {
        loading?( <div className='loader_body'><span class="loader"></span></div>)
        :( 
                data
                .filter((item)=>{
                    if(input ==''){
                        return item;
                    }else if(item.name.title.toLowerCase().includes(input.toLowerCase())){
                        return item;
                    }
                    else if(item.name.first.toLowerCase().includes(input.toLowerCase())){
                        return item;
                    }
                    else if(item.name.last.toLowerCase().includes(input.toLowerCase())){
                        return item;
                    }
                })
                .map((item)=>{
                    return(
                        <div className='card'>
                            <div key={item.id} className='card_row'>
                                    <img src={`${item.picture.thumbnail}`}/>
                                    <div>
                                        <span>{item.name.title}   </span>
                                    <span>{item.name.first}   </span>
                                    <span>{item.name.last}   </span></div>
                                </div>
                        </div>
                                
                            )
                })
                 )
    }
   
    </div>
  )
}

export default Filter