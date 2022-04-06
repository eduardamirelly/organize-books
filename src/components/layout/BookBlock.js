import React from 'react'
import './BookBlock.css'
import ButtonGray from '../links/ButtonGray'

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
        <div className="block-horizontal-between">
            <ButtonGray to="/" name="Editar" />
            <ButtonGray to="/" name="Excluir" />
        </div>
    </div>
  )
}

export default BookBlock