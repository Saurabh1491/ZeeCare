import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex error, atque voluptates veniam deleniti blanditiis provident illo cum! Eius architecto, asperiores impedit debitis, dolorem numquam tempora vel quibusdam, consequatur aliquam ab iusto et assumenda! Amet, illum. Quae, corporis. Dolor ducimus dolorum soluta possimus? Reiciendis veniam recusandae facere aperiam aspernatur?
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo itaque, necessitatibus ex eum rem in magni minus, beatae cum ducimus dolor. Fugiat, quae ipsum sapiente reprehenderit amet praesentium magni, unde non placeat sequi repudiandae! Iusto.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, placeat!</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography
