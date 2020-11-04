import React from "react"
//import ReactDOM from "react-dom";
import '../Styles/NavbarStyle.css';
import Logo from '../images/loges/MGamesLoge.png';
import {Link} from 'react-router-dom';
class Navbar extends React.Component{
    render(){
        return(
            <header className="NavbarContainer">
             
                
              
                  <div className="NavbarList" >
                      <div><Link to="/">
                      <img className="NavbarLogo"src={Logo} alt="logo MGames" />
                      </Link>
                      </div>
                      <nav>
                       <a><Link to="/">Home</Link></a>
                       <a><Link to="/Promos">Promos</Link></a>   
                        <a className="games">  <Link to="/Games">Games</Link></a> 
                       <a><Link to="/Prevents">Preventas</Link></a> 
                    
                       <a><Link to="/Pavos">Pavos</Link></a> 
                       <a><Link to="/Plus">Plus</Link></a> 
                    
                       <a className="NavbarUser"><Link to="Login">Login</Link>
                    <Link to="Register">Register</Link></a>
                   
                       </nav> 
                </div>  
                <div className="space" >
                  
                  <div></div>
                  <div></div>
                
                </div>
            </header>
        )
    }
}
export default Navbar;