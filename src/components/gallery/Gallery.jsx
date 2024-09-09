import React from 'react'
import './gallery.scss';
import img from '/vite.svg'

const Gallery = () => {
  return (
    <div id='Gallery' >
        <div className="card one">one</div>
        <div className="card two">
            <img src={img} alt="vite" />
            <h3>Discription</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>
        <div className="card three">three</div>
        <div className="card four">four</div>
    </div>
  )
}

export default Gallery