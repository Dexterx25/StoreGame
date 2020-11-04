import React from 'react';
import ReactDOM from 'react-dom';
import Productscard from '../components/ProductsCard'
 import '../Styles/Home.css' 

 import Primera from '../images/Destacadas/DestacadaSalaGamerPlay.JPEG'
 import Segunda from '../images/Destacadas/ResidentEvil2.JPEG'
 import Tercera from '../images/Destacadas/DevilMyCry.JPEG';
 import Cuarta from '../images/Destacadas/MuchGames.JPEG'
class Home extends React.Component{
   state = {  //state of Api
      //Page:1,
      nextPage:1,
      //prevPage: null,
     loading:true,
     error:null,

     data:{
        
       results:[]
   
     }
   }

   componentDidMount(){ //when the new games list component is mounting
   this.fetchData();  //calling the call function API Data

   };

   fetchData = async() =>{
      try{
         this.setState({loading:true, error:null});
         const next = `${this.state.nextPage}`;
         const prev = `${this.state.prevPage}`
         //let page = [next, prev]
         const api = `https://rickandmortyapi.com/api/character?page=`
       
         const response = await fetch(api+next) //the response product then wait bringing api with fetch
         const data = await response.json();
      //const dates  = data.results.slice(0,4)
          //const filter = data.slice(1,4);
          //console.log(filter)
      
          this.setState({
             loading:false,
             data:data,
             nextPage: this.state.nextPage + 1,
            // prevPage: this.state.prevPage - 1
         
                             })
       //console.log(data.results.slice(0,2))
      }
      catch(error){
       this.setState({loading:false, error:error})
       console.log(error)
      }
   }

    render(){
        return(
           <React.Fragment>
            <div className="containerHome">
        <div className="containerHomeSlider">
          <div className="slider">
            <ul>
               <li><img src={Primera}/></li>
               <li><img src={Segunda}/></li>
               <li><img src={Tercera}/></li>
               <li ><img src={Cuarta}/></li>
            </ul>
          </div>
        </div>
        <div className="news_Container">
            <h1 className="titleNews">News</h1>

        <div className="containerHomeSliderNew">
    
           
          
          <div className="slider2_news">
              {!this.state.loading && (
                 <button onClick={() => this.fetchData()}>prev</button>
              )
              }
           
                {/* FirtsNews */} 
            <ul className="slider2_news_1"> 
            {this.state.data.results.slice(0,4).map(character=>(<>
               <li key={character.id}><Productscard character={character}/> </li>
               {/* <li key={character.id}><Productscard character={character}/> </li>
               <li key={character.id}><Productscard character={character}/> </li>
               <li key={character.id}><Productscard character={character}/> </li> */}
               </>
               ))}
               
            </ul>
               {/* SecondNews */}
            <ul className="slider2_news_2">
               <li><img src={Primera}/></li>
               <li><img src={Segunda}/></li>
               <li><img src={Tercera}/></li>
               <li ><img src={Cuarta}/></li>
            </ul>
               
               {/* ThirdNews */}
            <ul className="slider2_news_3">
               <li><img src={Primera}/></li>
               <li><img src={Segunda}/></li>
               <li><img src={Tercera}/></li>
               <li ><img src={Cuarta}/></li>
            </ul>   
            
            {!this.state.loading && (
              <button onClick={() => this.fetchData()}>next</button>
            )}
          </div>
         
          
        </div>
        
        </div>
        </div>
        </React.Fragment>
        )
    }
}
export default Home;