import React ,{useState,useEffect} from 'react'

import axios from "axios";

const Home = () => {

  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/api/home")
    .then((res)=>{
      setData(res.data);
    })
  },[]);
  return (

    <div>
      

      <div className="contentPage">
      
      {data.map((article) => {
        return (
        <a href={article.id}>
            <div className="card">
              <img src={article.Image} alt="PopularImg" />
              <p>{article.title}</p>
              <p>{article.description}</p>
              <p>{article.categoryr}</p>
              <hr />
            </div></a>
        );
      })}
      </div>
      <div className="right">
        
      </div>

    </div>
  )
}

export default Home