import React from 'react'
import './Common.css'
const  Person=()=> {
  return (
    <div className="person">
         <h5  className="text-success"><bold>Conversation</bold></h5>
         <img height={100} width={100} class="image-style"  src="https://images.unsplash.com/photo-1474051013785-a5ecb8f78d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Cinque Terre"/>
  
        <p  class="text-primary"><bold>Rohan</bold></p>
        <span>Psychologist</span>
    </div>
  )
}


export default Person;
