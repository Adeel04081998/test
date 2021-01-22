import React, { Component } from 'react';



 class home  extends Component{
     render(){
         return(

             <div>
                  <h1>This is class Component for testing</h1> 
                  <button className='btn btn-primary'>Edit</button>
                  <Contacts/>
                  
             </div>
            
             
         )
     }
 }
 const Contacts= () => {
     return(
         <p>Its is functional component for testing</p>
     );
         
     
 };
 export default home;
