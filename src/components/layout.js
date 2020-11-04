import React from "react"
import Navbar from "./navbar";

function Layout(props){
return(
<div className="Layout">
  <Navbar/>
  <div >
      {props.children}
      </div>
      </div>
       
     
)
}
export default Layout;