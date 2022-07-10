import React,{useState,useEffect} from 'react'

import axios from "axios";

const Hollywood = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/api/holly")
    .then((res)=>{
      setData(res.data);
    })
  },[]);
  return (
    <>
    <div className="contentPage">
      {data.map((article) => {
        return (
          <a href={article.id}>
            <div className="card">
              <img src={article.Image} alt="HollyImg" />
              <p>{article.ititle}</p>
              <p>{article.category}</p>
              <p>{article.description}</p>
              <hr />
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

export default Hollywood