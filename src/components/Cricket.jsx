import React,{ useState,useEffect} from 'react'

import axios from "axios";

const Cricket = () => {
    
    const [data, setData] = useState([]);
useEffect(()=>{
  axios.get("http://localhost:8000/api/food")
  .then((res)=>{
    setData(res.data);
  })
},[])
    return (
      <>
      <div className="contentPage">
        
        {data.map((article) => {
          return (
            <a href={article.id}>
              <div className="card">
                <img src={article.Image} alt="FitnessImg" />
                <p>{article.title}</p>
                <hr />
                <p>{article.description}</p>
              <p>{article.category}</p>
              </div>
              </a>
          );
        })}
        </div>
        <div className="right">
          
        </div>
      </>
    )
  }
  
  export default Cricket