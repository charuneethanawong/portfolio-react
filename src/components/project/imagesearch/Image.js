
import React from 'react'


const Image = ({img,key,alt}) => {
  return (
    <div>
      <a href={img.regular}>
        <img src={img.small} key={key}/>
        {/* <p>{alt}</p> */}
      </a>     
    </div>
  )
}

export default Image



