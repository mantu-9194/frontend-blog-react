import React,{ useEffect,useState} from 'react'


const Fitness = () => {
  const [data, setData] = useState([]);
useEffect(()=>{
  const url="http://localhost:8000/api/fit";
  fetch(url).then(res=>res.json())
  .then(res=>setData(res))
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
              <p>{article.author}</p>
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

export default Fitness