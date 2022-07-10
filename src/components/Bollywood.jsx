import React, { useEffect,useState} from "react";


import axios from "axios";


const Bollywood = () => {
  const [data, setData] = useState([])
useEffect(()=>{
  axios.get("http://localhost:8000/api/bolly")
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
              <img src={article.Image} alt="BollyImg" />
              <p>{article.Title}</p>
              <p>{article.description}</p>
              <p>{article.author}</p>
              <hr />
            </div></a>
        );
      })}
      </div>
      <div className="right">
        
      </div>
    </>
  );
};

export default Bollywood;





