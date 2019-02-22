import React, { Component } from 'react'
import './Common.css'
 class About extends Component {
     state={
         title:'AIG IBD Summit 2018',
         session:61,
         hour:20,
         suscriber:314,
         contributor:46,
         toggle:false,
         article:"The IBD Summit 2018 was organised by the Asian Institute of Gastroenterology in January 2018. IBD is an emergent disease in India and the Asia-Pacific with a rising incidence over the last decade. Crohns disease & ulcerative colitis are chronic lifelong conditions. Establishing and maintaining symptom control and remission is critical to minimize the complications. he symposium focussed on providing an in-depth review of the pathophysiology, diagnostic methods, medical and surgical therapeutic approaches of IBD. International and national experts in the field discussed, debated and highlighted the latest concepts and consensus in the management of IBD" 
        
     }
     handleReadMore=(event)=>{
        this.setState({
            toggle:true
        })
     }
     handleReadLess =(event)=>{
         this.setState({
             toggle:false
         })
     }
   
  render() {
      const showLess=(
          <div>
              {this.state.article}
              <span onClick={this.handleReadLess} className="text-read">..show less</span>
          </div>
      )
      const showMore =(
          <div>
              {this.state.article.substring(0,400)}
              <span onClick={this.handleReadMore} className="text-read" >..read more</span>
          </div>
      )
    return (
      <div className="jumbotron">
      <div className="row">
      <div className="col-md-6">
        <h6 className="text-success text-display">{this.state.title}</h6>
        <span><bold  className="text-primary" >{this.state.session} </bold>  SESSION </span>
        <span> <bold  className="text-primary" >{this.state.hour} </bold>  HOURS</span>
        <span><bold  className="text-primary" >{this.state.contributor} </bold>   CONTRIBUTORS</span>
        <span> <bold  className="text-primary" >{this.state.suscriber} </bold>  SUBSCRIBERS</span>
      </div>
      <div className="col-md-6">
      <button className="subscribe ">SUBSCRIBE</button>
      </div>
      </div>
        <div>{this.state.toggle ===false ? showMore : showLess }</div>
      </div>
    )
  }
}



export default  About;
