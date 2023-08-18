import React, { useEffect, useState } from "react";
import "./Imagesearch.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";

const ImageSearch = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(['travel']);  
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const client_id = "7F3o64RbVqOR8sIxVDP6JaHSi8ERd0CwIu67l4SCIrc";
  const fetchUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${client_id}`
 
  const fetchImg =()=>{
    axios
    .get(fetchUrl,{
      headers:{}
    ,})
      .then((res) => setData([...data, ...res.data.results]))
      .catch(err=>console.log(err))
      setPage(page+1)
    }
    
  useEffect(() => {
    fetchImg()
    }, [query]);
   
    const searchImg = (e)=>{
      if (e.keyCode === 13){
        setQuery(e.target.value)
        setData([])
      }
    }
  
  return (
   <section>
    <h1 className="title">Image Search</h1>
     <div className="form">
      <input className='form-input' type="text" placeholder="Search" onKeyDown={(e)=>searchImg(e)}/>
    </div>
    <InfiniteScroll
     dataLength={data.length} //This is important field to render the next data
     next={fetchImg}
     hasMore={hasMore}
     loader={<h4>Loading...</h4>}
     endMessage={
       <p style={{ textAlign: 'center' }}>
         <b>Yay! You have seen it all</b>
       </p>
     }
    >
  
  <div className="imgsearch">
        {data.map((data,key)=>{
          return<div className="img-container" key={key}>
            <a className='img-list-a'href={data.urls.regular}> 
            <img className='img-list' src={data.urls.small} alt={data.alt_description}/>

            </a>
          </div>
        })}
      </div>
    </InfiniteScroll>
   </section>
  );
};

export default ImageSearch;
