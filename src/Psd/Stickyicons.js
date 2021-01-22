import React, { Component } from 'react';

class icon extends Component{
    render(){
        return(
           <div>
              {/*Icon*/}  
            <div class="icon-bar">
            <li className='facebook'><i class="fa fa-facebook"></i></li> 
            <li className='twitter'><i class="fa fa-twitter"></i></li>
            <li className="linkedin"><i class="fa fa-linkedin"></i></li>
          </div>
          {/*image*/}
          <div className="main">
          <div id="st-box"> 
                <img src="6.jpg" alt='' style={{width:'190px', height:'160px'}} /> 
            </div> 
            <div id="rd-box"> 
            <img src="6.jpg" alt='' style={{width:'190px', height:'160px' }} /> 
            </div> 
            <div id="nd-box"> 
            <img src="5.jpg" alt='' style={{width:'190px', height:'160px' }} /> 
            </div> 
            <div id="nd-box"> 
            <img src="5.jpg" alt='' style={{width:'190px', height:'160px'}} /> 
            </div> 
            <div id="nd-box"> 
            <img src="5.jpg" alt='' style={{width:'190px', height:'160px'}} /> 
            </div> 
            <div id="nd-box"> 
            <img src="5.jpg" alt='' style={{width:'190px', height:'160px'}} /> 
            </div> 
            
          </div>

          </div>
         
        )
    }
    
}
export default icon;