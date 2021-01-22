import React, { Component } from 'react';
 class nav  extends Component{
     constructor(props){
         super(props);
         this.state={
             brand: "honda",
             color: "red",
         }
     }
     changecolor = ()=>{
         this.setState({
             color:"blue",
         });
     }
     render(){
         return(
             <div>
                 <p className="car">car is {this.state.brand}</p>
                 <h1>Car is {this.state.color} in colour</h1>
                 <button type="button" onClick={this.changecolor}>Change colour</button>
             </div>

         )
     }


 }
 
 export default nav;
