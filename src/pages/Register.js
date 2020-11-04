import React from 'react';
import ReactDOM from 'react-dom';
import FormSection from '../components/formComponent'
import Badge from '../components/Badge'
import '../Styles/Register.css'
class Form extends React.Component{

    state = {
        //modal:null,
        loading:true,
        error:null,
       
            formRegisterUser:{
                identification:'',
                nickName:'',
                email:'',
                age:'' ,
                jobTitle:'',
                password:''
            },
};
handleChange = e => {  //datesSendOneForOne
    this.setState({
      formRegisterUser: {
        ...this.state.formRegisterUser,
        [e.target.name]: e.target.value,
      },
    });
  };
   click = e => {
        const containerPage = document.getElementById('RegisterPageContainer')
        containerPage.style.display = "flex"
        const formSection = document.getElementById('formSection')
        formSection.style.width = "30vw"
        const Badge_container = document.getElementById('Badge_container')
        Badge_container.style.display = "block";
        Badge_container.style.visibility = "visible";
        Badge_container.style.width = "50vw"
        Badge_container.style.height = "57vh"
        Badge_container.style.margin = "2em 1em 0em 1em "
        Badge_container.style.color = "white"
      
   }
  handleSubmit = async e =>{ //for send  dates to register one User
   e.preventDefault();
   this.setState({loading:true, error:null})
   try{
       const api = ``  //directión API Params
       const dataUserRegister = `${this.state.formRegisterUser}`
         await fetch(api+dataUserRegister)
         this.props.history.push('/Users'); //page Gratitude
   }
   catch(error){
       //PageErrorPostDate
       this.setState({loading:false, error:error})
    console.log('error'+error)
    alert(error)
   }
  }
handleClick = e =>{
//ModalHere
}
  
render() 
{
    return(
        <React.Fragment>
            <div className="RegisterPageContainer" id="RegisterPageContainer">
              <div className="Badge_container" id="Badge_container">
            <Badge
                nickName={this.state.formRegisterUser.nickName || 'Your NickName'}
                identification={this.state.formRegisterUser.identification || 'Identification: C.C'}
                jobTitle={this.state.formRegisterUser.jobTitle || 'Your ocupation'}
                email={this.state.formRegisterUser.email || 'Your Email'}
                age={this.state.formRegisterUser.age || 'Your Age'}
               // avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div id="formSection" >
        <FormSection 
          onChange={this.handleChange} //propiety of FormSection to each input dates divide all dates input write
          handleClick={this.handleClick}  //propiety of FormSectio to Open Modal
          onSubmit={this.handleSubmit}         // propiety FormSection to button's form for make fetch.PostApiRest
          formValues={this.state.formRegisterUser}
          click={this.click}

        />
        </div>
           </div>
        </React.Fragment>
         )
    }  
}

export default Form; 