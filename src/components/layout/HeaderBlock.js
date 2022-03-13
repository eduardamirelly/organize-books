import React from 'react'
import './HeaderBlock.css'
import { Link } from 'react-router-dom'

function HeaderBlock(props) {
  return (
    <div className="block-horizontal-between">
        <h4 className="title-block">
          {props.text}
        </h4>
        <Link to={props.link} className="see-more-block">
          See more...
        </Link>
    </div>
  )
}

export default HeaderBlock