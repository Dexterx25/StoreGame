import React from 'react';  //primero y más importante para que pueda servir este archivo js es importar React, siempre
//utilizarlo 
//import Logo from '../images/logo.jpg';
//import myPhote from '../images/me.jpg';
import '../Styles/Badge.css';
//import Gravatar from '../components/gravatar'
class Badge extends React.Component{
 

   render(){  //lo que esté dentro del renderizado, será el elemento del componente ya que todos los componentes son clases
    return( //aquí vamos a retornar al render nuestro elemento:
     <div className="global_Container_Badge">
         <div className="Dates_section">
        <div className="presentation_section">
           <div className="avatar">
              
            
</div>

           <div className="name_Section">
              <p> place one nickName:</p>
    <h1>{this.props.nickName}</h1>
           </div>
       </div>
         <div className="description_Section" >
    <p>c.c Identification:<br/>{this.props.identification}</p>
    <p>Your date born:<br/>{this.props.age}</p>
    <p>gmail:<br/>{this.props.email}</p>
    <p>ocupación:<br/>{this.props.jobTitle}<br/></p>
    
 
      </div>
   </div>
         <div className="imageSection">
            <h5>Upload your Image:</h5> 
           <input ClassName="ImageFile"
            type="file"
            
            />
         </div>
     </div>
                                                                   //Aquí todo será JXS, por ejemplo
    )

   }
}
export default Badge;