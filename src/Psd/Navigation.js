import React, { Component }  from 'react';
import Sticky from './Stickyicons';




class navigation extends Component{
    render(){
        return(
           

            
            <div className="container im1" 
            style={{backgroundImage:'url(1.jpg)',
            height:'136vh'}}>   
            <div className="container cont">
            <img src='2.jpg' alt="" className="im" /> 
                <ul >
                    <li>HOME</li>
                    <li>PAGES</li>
                    <li>ABOUT</li>
                    <li>PORTFOLIO</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                    <li><i class="fa fa-fw fa-search"></i></li>    
                </ul>
            </div>
            <div className="center">
                <p>Beleive You can Fly</p>
               </div>
          <Sticky />
            
        </div>
      
    
        );
    }
}
export default navigation;