import React from 'react';
import ReactDOM from 'react-dom';
class FormSection extends React.Component{
     handleClick(){
         //modal
     }
     state={
         click:false,
     }
    
    
    render(){
        return(
             <React.Fragment>
                <div className="ContainerPageRegister">
                    <form onSubmit={this.props.onSubmit}>
                            
                            <div>
                                <input className="RegisterUser"
                                  value={this.props.formValues.nickName}
                                  name="nickName"
                                   type="nickName"
                                   id="data"
                                   onChange={this.props.onChange}
                                   placeholder="nickName"
                                   onClick={this.props.click}
                                   />
                            </div> 
                            <div>
                                <input className="RegisterUser"
                                 value={this.props.formValues.identification}
                                  type="text"
                                  id="data"
                                  placeholder="Identification"
                                  name="identification"
                                  onClick={this.props.click}
                                  onChange={this.props.onChange}
                                  />
                            </div>
                            <div>
                                <input className="RegisterUser"
                                 value={this.props.formValues.password}
                                  type="password"
                                  id="data"
                                  placeholder="Make a PassWord acount"
                                  name="password"
                                  onClick={this.props.click}
                                  onChange={this.props.onChange}
                                  />
                            </div>
                            <div>
                            <div> 
                                <input  
                                className="RegisterUser"
                                id="data"
                                value={this.props.formValues.email}
                                placeholder="Email"
                                 type="email"  name="email"
                                 onChange={this.props.onChange}
                                 onClick={this.props.click}
                                />
                            </div>
                                <input  className="RegisterUser"

                                 value={this.props.formValues.Age}
                                  type="date"
                                name="age"
                                id="data"
                                  onChange={this.props.onChange}
                                  placeholder="Age"
                                  onClick={this.props.click}
                                  />     
                            </div>
                            <div>
                                <input  className="RegisterUser"
                                 onChange={this.props.onChange}
                                 value={this.props.formValues.jobTitle}
                                 name="jobTitle"
                                 id="data"
                                  type="text"
                                  placeholder="JobTitle"
                                  onClick={this.props.click}
                                  />
                            </div>
                            
                            <div className="buttonSendDates">
                            <button  onClick={this.props.handleClick} className="btn btn-primary">Send</button>
                            </div>             
                     </form>
                </div>


             </React.Fragment>
        )
    }
    
}
export default FormSection