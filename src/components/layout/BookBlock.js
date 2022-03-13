import React from 'react'
import './BookBlock.css'

function BookBlock(props) {
  return (
    <div className="block-book">
        <h4>
            {props.title}
        </h4>
        <p>
            {props.author}
        </p>
        <div className="block-horizontal-start">
            <div className="circle"></div>
            <p>Status</p>
        </div>
        <div className="">
            
        </div>
    </div>
  )
}

export default BookBlock