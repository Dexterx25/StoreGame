import React from 'react';

function ProductsCard (props){
    const character = props.character;
        return(
            <div style={ {backgroundImage: `url(${character.image})`,with:'20em', height:'18em'}} >
                 <h1>{character.name}</h1>
                 <div style={{width:'20em'}}>
                
                    <a>
        <h3>aquí va el precio</h3>
                    </a>
                 </div>
            </div>
        );
        }
export default ProductsCard;