import './Card.scss'
import { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5257796615424b19ac78f0e1540fb594";
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    const res = await axios.get(url);
    return setData(res.data.articles);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="main">         
        <div 
        className='card card1'
        >
        Card1
        </div>
        <div 
        className='card card2'
        >  
        {data.map((dataObj, index) => {  
          if (index === 0) {
            return (
              <div 
                className='article'
                key={index}
              >
                <div 
                className='article-image'
                >
                  <img src={dataObj.urlToImage} alt='' />
                </div>
                <div
                className='article'
                >
                  <p>{dataObj.title}</p>
                </div>
                <div 
                className='article-publishedAt'
                >
                  <p>{dataObj.publishedAt}</p>
                </div>
              </div>
              );
            }
          })}
        </div>
        <div 
        className='card card3'
        >
        {data.map((dataObj, index) => {  
          if (index === 1) {
            return (
              <div 
              className='article'
              key={index}
              >
                <div 
                className='article-image'
                >
                  <img src={dataObj.urlToImage} alt='' />
                </div>
                <div 
                className='article'
                >
                  <p>{dataObj.title}</p>
                </div>
                <div 
                className='article-publishedAt'
                >
                  <p>{dataObj.publishedAt}</p>
                </div>
              </div>
              );
            }
          })}
        </div>

        <div className='card card4'>Card4</div>

        <div 
        className='card card5'
        >
        {data.map((dataObj, index) => {  
          if (index === 2) {
            return (
              <div 
              className='article'
              key={index}
              >
                <div
                className='article-image'
                >
                  <img src={dataObj.urlToImage} alt='' />
                </div>
                <div
                className='article'
                >
                  <p>{dataObj.title}</p>
                </div>
                <div
                className='article-publishedAt'
                >
                  <p>{dataObj.publishedAt}</p>
                </div>
                </div>
              );
            }
          })}
        </div>
        <div
        className='card card6'
        >
        {data.map((dataObj, index) => {  
          if (index === 3) {
            return (
              <div 
              className='article'
              key={index}
              >
                <div
                className='article-image'
                >
                  <img src={dataObj.urlToImage} alt='' />
                </div>
                <div
                className='article'
                >
                  <p>{dataObj.title}</p>
                </div>
                <div
                className='article-publishedAt'
                >
                  <p>{dataObj.publishedAt}</p>
                </div>
              </div>
              );
            }
          })}
        </div>
        
      <div className='card card7'>Card7</div>

    </div>
  )
}

export default Card