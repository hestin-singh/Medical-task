import React, { Component } from 'react'

export default class Video extends Component {
  render() {
    return (
     <React.Fragment>
         <div class="embed-responsive embed-responsive-21by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
        </div>
     </React.Fragment>
    )
  }
}
