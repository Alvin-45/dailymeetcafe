import React from 'react'
import '../App.css'
import aboutimg from '../assets/about-background-image.png'
function About() {
  return (
   <>
        <div id='about' className='fullbodyabt  d-flex justify-content-between align-items-center'>
            <div className="partial2 bg-warning"></div>
            <img className='abtimg' src={aboutimg} alt="" />
            <div className='contab'>
                <h4 className="text-warning" >About</h4>
                <p className='abcon'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt fugiat, blanditiis itaque sint reprehenderiteos doloribus ipsam similique nihil optio quasi nulla illum excepturi officiis rem repellat quae? Tempora, sapiente</p>
                <p className='abcon'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ad dolores iusto explicabo. Sequi incidunt consectetur modi quidem sit a fuga impedit quos laudantium reiciendis, veritatis eos deserunt consequatur cum?</p> 
                <button className="twobut btn btn-warning text-light mt-5 btn1" style={{height:'50px'}}>Explore More<i className="fa-solid fa-arrow-right" style={{color: '#ffffff'}}></i></button>
                <button className="btn btn-secondary ms-3 mt-5 btn1" style={{height:'50px'}}><i className="fa-solid fa-circle-play" style={{color: '#000000'}}></i> Watch Video</button>
                </div>
        </div>
   </>
  )
}

export default About