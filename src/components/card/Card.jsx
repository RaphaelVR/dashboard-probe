import './Card.scss'
import { useState, useEffect } from "react";
import axios from "axios";
import { AccuWeather } from '../../api/AccuWeather/AccuWeather';
// import { search } from 'react-icons-kit/feather/search'
// import { Icon } from 'react-icons-kit'

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

  const [citySearch, setCitySearch] = useState('');
  const [cityData, setCityData]=useState(null);

  // city search form
  const fetchCity = (e) =>{
    e.preventDefault();
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ICfOrVGI3ofdnGODMlLrRMwyPbISOCdO&q=${citySearch}`)
    .then((res)=>{
      setCityData(res.data[0]);
      setCitySearch('');
    }).catch(err=>console.log(err.message));
  }

  return (
    <div className="main">         
        <div 
        className='card card1'
        >
          
            <h1 className="headline">AccuWeather API</h1>
            <form className='form-group custom-form' autoComplete='off'
            onSubmit={fetchCity}>
              <label>Search for a city to get weather data</label>
              <div className='search-box'>
                <input className='form-control' required placeholder='Enter city name...'
                value={citySearch} onChange={(e)=>setCitySearch(e.target.value)}/>
                <button type='submit' className="btn btn-secondary btn-sm">
                  {/* <Icon icon={search} size={22}/> */}
                </button>
              </div>
            </form>
            {cityData&& <div style={{padding:10+'px', width: 100+'%'}}><AccuWeather cityData={cityData}/></div>}
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