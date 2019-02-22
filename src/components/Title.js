import React from 'react'
import './Common.css'
 const Title =()=> {
  return (
    <div>
    <div className="row title">
      <div className="col-md-6">
        
        <div>
        <span><i class="fas fa-unlock fa-lg"></i></span>
       <span className="text-primary"> <bold>A career in IBD: Prospects and Challenges </bold></span>
        </div>
        <span>474 VIDEOS VIEWS  * 8  LIKES    *  6 SHARES </span>
       
      </div>
      <div className="col-md-6">
      <div className="float-right">
      <i className="fas fa-thumbs-up ">Likes</i>
      <span className="fa fa-star ">BOOKMARK</span>
      </div>
      </div>
    </div>
    <div className="icon">
    <i class="fab fa-whatsapp fa-2x"></i>
    <i class="fab fa-facebook fa-2x"></i>
    <i class="fab fa-twitter fa-2x"></i>
    
    <i class="fas fa-envelope fa-2x"></i>
   
    
    
    </div>
    <div className="tag">
        <b>Tagged Under : </b>
        <span  className="tag-css">Day 1</span>
        <span className="tag-css">  International Faculity</span>
    </div>
    <div className="person">
    <p  className="text-success"><bold>FEATURING</bold></p>
    <img height={100} width={100} class="image-style"  src="https://images.unsplash.com/photo-1474051013785-a5ecb8f78d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Cinque Terre"/>
    <h6  className="text-primary">Dr.Simon Travis</h6>
    <span>Professor ,Transationsal</span>
    </div>
    
    </div>
   
  )
}

export default Title;